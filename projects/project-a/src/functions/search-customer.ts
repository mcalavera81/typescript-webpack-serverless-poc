"use strict";
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import _ from "lodash";
import { stringify } from "../../../../libraries/lib-b/index";
import config from "../schema/config.json";
import { StringMap } from "../schema/config-schema";
import { dbClient } from '../support/dynamoDb';
import { ok } from "../support/jsonResponses";
import { getDynamoDBQueryParams } from "../support/customer-dynamodb-query";




async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const queryParams: StringMap = event.queryStringParameters || {};

  const dynamoParams: DocumentClient.QueryInput = getDynamoDBQueryParams(config, queryParams);
  const results = await queryDynamoDB(dynamoParams);

  return ok(results)
}



async function queryDynamoDB(dynamoParams: DocumentClient.QueryInput) {
  console.log(`Querying with ${stringify(dynamoParams)}`)
  const response = await dbClient.query(dynamoParams).promise()
  return _.map(response.Items, item => item.customer);
}

export { handler };

