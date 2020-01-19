import { stringify } from "../../../../libraries/lib-b";
import { HttpError } from "http-errors";

function ok(data: any) {
    return json(200, data);
}

function error(err: HttpError, headers: any = {}) {
    return json(
        err.statusCode ? err.statusCode : 500,
        {
            error: err.name ? err.name : "Exception",
            message: err.message ? err.message : "Unknown error"
        },
        headers);
}

function json(statusCode: number, data: any, headers: any = {}) {
    return ({
        statusCode,
        headers: Object.assign({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }, headers),
        body: stringify(data),
    });
}

export {
    ok,
    error,
    json
};