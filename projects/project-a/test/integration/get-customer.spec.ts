import { viaHandler } from "../test-helper";
import { APIGatewayProxyEvent } from 'aws-lambda';
import "mocha"
import event from '../event/api-gateway-event.json'
import { GetCustomersRecordidResponse } from '../../src/customer-api';
import { getIds1 } from "./boostrap.spec";
const expect = require("chai").expect;
import yaml from 'js-yaml';
import fs from 'fs'
import path from 'path'
import * as SwaggerValidator from 'swagger-object-validator';
import { ValidationResult } from 'swagger-object-validator';
import { prettyPrint } from "../../../../libraries/lib-b";
import { validate } from "../test-util";

describe("get customer test", function () {
    this.timeout(30000);

    it("ok", async () => {

        event.pathParameters.customer_id = getIds1()[0].id

        const response = await viaHandler(event, 'get-customer')
        const body = response.body as GetCustomersRecordidResponse;

        console.log(`res: ${prettyPrint(body)}`)
        expect(body).to.exist;

        await validate(body.body, "getCustomersRecordidResponseBody")
    })
})




