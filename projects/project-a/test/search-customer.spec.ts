import config from "../config.json";
import { getDynamoDBQueryParams } from "../src/support/customer-dynamodb-query";
import { expect } from "chai";
import "mocha";
import { name, date, random } from "faker";


describe("getDynamoDBQueryParams", () => {
  it("should select dateOfBirth index", () => {
    const apiParams = {
      firstName: firstName(),
      firstSurname: lastName(),
      dateOfBirth: pastDate()
    };
    const queryParams = getDynamoDBQueryParams(config, apiParams);

    expect(queryParams).to.eql({
      KeyConditionExpression: '#dateOfBirth = :dateOfBirth',
      TableName: 'customer-search',
      IndexName: 'customer-search-by-dateOfBirth-index',
      ExpressionAttributeNames:
      {
        '#firstName': 'firstName',
        '#firstSurname': 'firstSurname',
        '#dateOfBirth': 'dateOfBirth'
      },
      ExpressionAttributeValues:
      {
        ':firstName': apiParams.firstName,
        ':firstSurname': apiParams.firstSurname,
        ':dateOfBirth': apiParams.dateOfBirth
      },
      FilterExpression: '#firstName = :firstName and #firstSurname = :firstSurname'
    })

  });

  it("should select legalDoc table", () => {

    const apiParams = {
      firstSurname: lastName(),
      dateOfBirth: pastDate(),
      legalDocId: random.uuid(),
      legalDocTypeTCode: random.word()
    };
    const queryParams = getDynamoDBQueryParams(config, apiParams);

    expect(queryParams).to.eql({
      KeyConditionExpression: '#legalDocId = :legalDocId and #legalDocTypeTCode = :legalDocTypeTCode',
      TableName: 'customer-search-by-legalDoc',
      ExpressionAttributeNames:
      {
        "#legalDocTypeTCode": "legalDocType",
        '#legalDocId': 'legalDocId',
        '#firstSurname': 'firstSurname',
        '#dateOfBirth': 'dateOfBirth'
      },
      ExpressionAttributeValues:
      {
        ':firstSurname': apiParams.firstSurname,
        ':dateOfBirth': apiParams.dateOfBirth,
        ":legalDocTypeTCode": apiParams.legalDocTypeTCode,
        ":legalDocId": apiParams.legalDocId
      },
      FilterExpression: '#firstSurname = :firstSurname and #dateOfBirth = :dateOfBirth'
    })

  });

  it("should select firstName index", () => {

    const apiParams = {
      firstSurname: lastName(),
      firstName: firstName()
    };

    const queryParams = getDynamoDBQueryParams(config, apiParams);

    expect(queryParams).to.eql({
      KeyConditionExpression: '#firstName = :firstName',
      TableName: 'customer-search',
      IndexName: 'customer-search-by-firstName-index',
      ExpressionAttributeNames:
      {
        '#firstName': 'firstName',
        '#firstSurname': 'firstSurname'
      },
      ExpressionAttributeValues:
      {
        ':firstName': apiParams.firstName,
        ':firstSurname': apiParams.firstSurname,
      },
      FilterExpression: '#firstSurname = :firstSurname'
    })
  })

  it("should select dateOfBirth index (legalDoc info incomplete)", () => {

    const apiParams = {
      firstSurname: lastName(),
      dateOfBirth: pastDate(),
      legalDocId: random.uuid()
    };

    const queryParams = getDynamoDBQueryParams(config, apiParams);

    expect(queryParams).to.eql({
      KeyConditionExpression: '#dateOfBirth = :dateOfBirth',
      TableName: 'customer-search',
      IndexName: 'customer-search-by-dateOfBirth-index',
      ExpressionAttributeNames:
      {
        '#dateOfBirth': 'dateOfBirth',
        '#firstSurname': 'firstSurname',
        '#legalDocId': 'legalDocId'
      },
      ExpressionAttributeValues:
      {
        ':dateOfBirth': apiParams.dateOfBirth,
        ':firstSurname': apiParams.firstSurname,
        ':legalDocId': apiParams.legalDocId,
      },
      FilterExpression: '#firstSurname = :firstSurname and #legalDocId = :legalDocId'
    })

  })


  it("should not select any table/index ", () => {

    const apiParams = {};
    const queryParams = getDynamoDBQueryParams(config, apiParams);

    expect(queryParams).to.be.an('undefined')
  })
});


const lastName: () => string = () => name.lastName();
function firstName() { return name.firstName() }
const pastDate: () => string = () => date.past().toISOString();
