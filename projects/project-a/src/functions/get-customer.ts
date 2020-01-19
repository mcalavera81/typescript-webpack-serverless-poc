import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import createError, { HttpError } from 'http-errors';
import { stringify } from "../../../../libraries/lib-b";
import { GetCustomersRecordidResponse } from '../customer-api';
import { dbClient } from "../support/dynamoDb";
import { error, ok } from '../support/jsonResponses';
import { getCustomerByIdTableName } from "../support/util";


async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  try {
    const customer_id = getEventCustomerId(event.pathParameters);
    let data = await findCustomer(customer_id);

    return ok(data)

  } catch (err) {
    // const ex = err as HttpError
    return error(err)
  }
}

function getEventCustomerId(pathParams: { [key: string]: string } | null): string {
  let customer_id = pathParams?.customer_id
  if (!customer_id) throw new createError.BadRequest("path param 'customer_id' is required")
  return decodeURIComponent(customer_id);
}

async function findCustomer(customer_id: string): Promise<GetCustomersRecordidResponse> {

  const params: DocumentClient.GetItemInput = buildGetParams(customer_id);
  let data = await dbClient.get(params).promise();
  const customer: GetCustomersRecordidResponse | undefined = data?.Item?.customer;

  if (!customer) {
    throw new createError.NotFound(`Customer not found:  ${stringify(params)}`)
  }
  return customer;

}

function buildGetParams(customer_id: string): DocumentClient.GetItemInput {
  const tableName = getCustomerByIdTableName()
  console.log(`Get param: tableName: ${tableName}, customer_id: ${customer_id}`)
  return {
    Key: {
      id: customer_id
    },
    TableName: tableName
  };

}

export { findCustomer as getCustomer, handler };

// module.exports = {
//     getCustomer,
//     handler
//   };
//   const handler = middy(bareHandler);
//   .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
//   .use(validator({ inputSchema })) // validates the input
//   .use(httpErrorHandler()); // handles common http errors and returns proper responses

//const _ = require("underscore");
//const { middy } = require("middy");
// const {
//   jsonBodyParser,
//   validator,
//   httpErrorHandler
// } = require("middy/middlewares");

//var createError = require("http-errors");
