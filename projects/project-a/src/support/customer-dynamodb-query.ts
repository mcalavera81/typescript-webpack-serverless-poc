import { DocumentClient } from "aws-sdk/clients/dynamodb";
import createError from 'http-errors';
import _ from "lodash";
import { Config, SearchMapper, StringMap } from "../schema/config-schema";
import { getTableName } from "./util";


function getDynamoDBQueryParams(config: Config, params: StringMap): DocumentClient.QueryInput {
    const indexName: string | undefined = findBestIndex(config, params);
    if (!indexName)
        throw new createError.BadRequest(`Index not available from params: ${JSON.stringify(params, null, 2)}`)

    const indexExpression = buildIndexExpression(config.dbSchema.search, indexName);
    const filterExpression = buildFilterExpression(config.dbSchema.search, indexName, params);
    const dynamoQueryParams: DocumentClient.QueryInput = { ...indexExpression, ...filterExpression };
    return dynamoQueryParams;
}


function findBestIndex(config: Config, params: StringMap): string | undefined {
    const indexName = _.find(config.indexes, (elem: string) => {
        const apiFieldsIndexSelector = config.dbSchema.search.index[elem].selector;

        return _.reduce(
            _.map(apiFieldsIndexSelector, (apiField: string) =>
                _.has(params, apiField)
            ), (a: boolean, b: boolean) => a && b, true);
    });

    return indexName;
}


type IndexExpression = {
    TableName: string,
    IndexName?: string,
    KeyConditionExpression: string
}


function buildIndexExpression(searchMapper: SearchMapper, indexName: string): IndexExpression {
    const index = searchMapper.index[indexName];
    const pairs = [["KeyConditionExpression", index.keyCondition]]

    if (index.dynamoDbIndex) {
        pairs.push(["TableName", getTableName(searchMapper.table)])
        pairs.push(["IndexName", getTableName(index.table)])
    } else {
        pairs.push(["TableName", getTableName(index.table)])
    }

    return _.fromPairs(pairs) as IndexExpression
}

type Filter = {
    ExpressionAttributeNames: DocumentClient.ExpressionAttributeNameMap,
    ExpressionAttributeValues: DocumentClient.ExpressionAttributeValueMap,
    FilterExpression?: string
    ProjectionExpression?: string;
    Limit?: number;
}

function buildFilterExpression(searchMapper: SearchMapper, indexName: string, params: StringMap): Filter {

    const allowedInputApiFilters: string[] = filterAllowedApiFilters(params, searchMapper);

    const mapping = searchMapper.field;

    const filterObj = _.reduce(
        allowedInputApiFilters,
        (obj: Filter, inputApiFilter: string) => {
            _.set(obj.ExpressionAttributeNames, `#${inputApiFilter}`, mapping[inputApiFilter])
            _.set(obj.ExpressionAttributeValues, `:${inputApiFilter}`, params[inputApiFilter])

            if (isNotIndexFilter(searchMapper, indexName, inputApiFilter)) {
                const newFilter = `#${inputApiFilter} = :${inputApiFilter}`
                obj.FilterExpression = obj.FilterExpression ?
                    `${obj.FilterExpression} and ${newFilter}` : `${newFilter}`
            }
            return obj;
        },
        { ExpressionAttributeNames: { "#customer": "customer" }, ExpressionAttributeValues: {} }
    );

    filterObj.ProjectionExpression = "#customer"
    filterObj.Limit = 10
    return filterObj;
}

function isNotIndexFilter(searchMapper: SearchMapper, indexName: string, inputApiFilter: string): boolean {
    const apiFieldsIndexSelector = searchMapper.index[indexName].selector;
    return !_.includes(apiFieldsIndexSelector, inputApiFilter)
}

function filterAllowedApiFilters(params: StringMap, searchMapper: SearchMapper): string[] {
    const allowedApiFilters = _.keys(searchMapper.field);
    return _.filter(_.keys(params), (inputApiField: string) => _.includes(allowedApiFilters, inputApiField));
}

export { findBestIndex, getDynamoDBQueryParams };

