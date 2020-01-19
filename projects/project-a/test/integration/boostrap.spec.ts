import { ChildProcess, spawn, exec } from 'child_process';
import { getDynamoDbOfflinePort } from "../support/getDynamoDbOfflinePort";
import { newItemCustomerGet, newItemCustomerSearch, CustomerGetItem, CustomerSearchItem } from "../../src/dynamodb-seed/random-customer";
import { dbClient, batchWrite } from '../../src/support/dynamoDb';
import "mocha"
import { getCustomerByIdTableName, getCustomerSearchTableName } from '../../src/support/util';


process.env.STAGE = "test"

let dynamoLocalProcess: ChildProcess;
let items1: CustomerGetItem[] = []
let items2: CustomerSearchItem[] = []

function getIds1() {
    return items1;
}

function getIds2() {
    return items2;
}

before(async function () {
    this.timeout(30000);
    console.log("Running before all ...")
    await startDynamoDbOffline();
    await seedDynamoDb()
})


after(async function () {
    console.log("Running after all ...")
    stopDynamoDbOffline()
    console.log("Cleaning up")

})

function stopDynamoDbOffline() {
    dynamoLocalProcess.kill("SIGTERM");
    console.log("Serverless process stopped");
    exec(`lsof -ti tcp:${getDynamoDbOfflinePort()} | xargs kill`)
    console.log("Dynamod process stopped");
}


async function seedDynamoDb() {

    items1 = await batchWrite(dbClient, getCustomerByIdTableName(), 10, newItemCustomerGet);
    items2 = await batchWrite(dbClient, getCustomerSearchTableName(), 10, newItemCustomerSearch);
}

async function startDynamoDbOffline() {
    dynamoLocalProcess = spawn(
        "sls", [
        "dynamodb",
        "start",
        "--port",
        getDynamoDbOfflinePort(),
        "--migrate",
        "--inMemory",
        "--sharedDb",
        "--stage",
        `${process.env.STAGE}`
    ]);


    console.log(
        `Serverless: DynamoDB Local started with PID : ${dynamoLocalProcess.pid}`
    );

    dynamoLocalProcess.stderr.on("data", errData => {
        const errorMsg = `Error starting DynamoDB Local:\n${errData}`;
        console.log(errorMsg);
        throw new Error(errorMsg)
    });

    await new Promise(resolve => {
        dynamoLocalProcess.stdout.on("data", data => {
            console.log(data.toString().trim());
            if (/created table/.test(data.toString())) {
                resolve()
            }
            process.stdout.write('')
        });
    });

}

export { getIds1, getIds2 }