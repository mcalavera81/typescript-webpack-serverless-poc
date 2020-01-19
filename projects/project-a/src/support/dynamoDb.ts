"use strict";

import { DynamoDB } from "aws-sdk";
import { getDynamoDbOfflinePort } from "../../test/support/getDynamoDbOfflinePort";
import { DocumentClient, WriteRequest, BatchWriteItemRequestMap } from 'aws-sdk/clients/dynamodb';

import jp from 'jsonpath';
import { stringify } from '../../../../libraries/lib-b';
var _ = require("lodash");

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: "localhost",
    endpoint: `http://localhost:${getDynamoDbOfflinePort()}`
  };

}

const dynamoDb = new DynamoDB(options)

const dbClient = new DynamoDB.DocumentClient({ service: dynamoDb });


async function batchWrite<T>(
  dynamodb: DocumentClient,
  tableName: string,
  count: number,
  itemGenerator: () => T
) {

  console.info(`Initiating batch write (${count}) to ${tableName}`)

  const itemsTotal: T[] = []
  const unprocessedItems: BatchWriteItemRequestMap[] = []
  const writeRequests: WriteRequest[] = _.range(0, count)
    .map(() => {
      return itemGenerator();
    })
    .map((item: T) => {
      return {
        PutRequest: {
          Item: item
        }
      };
    })


  const chunks: WriteRequest[][] = _.chunk(writeRequests, 25)
  _.forEach(chunks, async (chunk: WriteRequest[]) => {

    let req: DocumentClient.BatchWriteItemInput = {
      RequestItems: {
        [tableName]: chunk

      }
    };

    const items: T[] = jp.query(req, `RequestItems["${tableName}"][*].PutRequest.Item`)
    const response = await dynamodb
      .batchWrite(req)
      .promise()

    itemsTotal.push(...items)
    if (response.UnprocessedItems) {
      unprocessedItems.push(response.UnprocessedItems)
    }

  });


  console.log(`UnprocessedItems: ${stringify(unprocessedItems)}`)
  console.log(`${count} customers inserted to ${tableName}`)

  return itemsTotal;
}


async function truncate<T>(
  dynamodb: DocumentClient,
  tableName: string,
  count: number,
  itemGenerator: () => T
) {

  console.info(`Initiating batch delete (${count}) to ${tableName}`)

  const itemsTotal: T[] = []
  const unprocessedItems: BatchWriteItemRequestMap[] = []

  const scanInput: DocumentClient.ScanInput = { TableName: tableName }
  const scanOutput: DocumentClient.ScanOutput = await dynamodb.scan(scanInput).promise();

  scanOutput.Items?.forEach(async item => {
    console.log(item)
    const params: DocumentClient.DeleteItemInput =
      { TableName: tableName, Key: { id: item.id } }
    await dbClient.delete(params).promise()
  })

  return;
  /******************** */

  const writeRequests: WriteRequest[] = _.range(0, count)
    .map(() => {
      return itemGenerator();
    })
    .map((item: T) => {
      return {
        DeleteRequest: {
          Item: item
        }
      };
    })


  const chunks: WriteRequest[][] = _.chunk(writeRequests, 25)
  _.forEach(chunks, async (chunk: WriteRequest[]) => {
    let req: DocumentClient.BatchWriteItemInput = {
      RequestItems: {
        [tableName]: chunk

      }
    };

    const items: T[] = jp.query(req, `RequestItems["${tableName}"][*].PutRequest.Item`)
    const response = await dynamodb
      .batchWrite(req)
      .promise()

    itemsTotal.push(...items)
    if (response.UnprocessedItems) {
      unprocessedItems.push(response.UnprocessedItems)
    }

  });


  console.log(`UnprocessedItems: ${stringify(unprocessedItems)}`)
  console.log(`${count} customers inserted to ${tableName}`)

  return itemsTotal;
}

export { dbClient, batchWrite, truncate };