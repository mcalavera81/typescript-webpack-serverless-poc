import { APIGatewayProxyEvent } from 'aws-lambda';
import _ from "lodash"

const mode = process.env.TEST_MODE || "handler";


let viaHandler = async (event: APIGatewayProxyEvent, functionName: string) => {
    // let handler = require(`${APP_ROOT}/functions/${functionName}`).handler;
    const handler = require(`../src/functions/${functionName}`).handler

    console.log(`invoking via handler function ${functionName}`);

    try {
        const context = {}
        const response = await handler(event, context);
        let contentType = _.get(response, 'headers.content-type', 'application/json');
        if (response.body && contentType === 'application/json') {
            response.body = JSON.parse(response.body);
        }
        return response;
    } catch (err) {
        console.error("Error:" + err)
        throw err
    }
}

export { viaHandler }