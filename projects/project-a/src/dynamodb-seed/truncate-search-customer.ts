"use strict";
import { DynamoDB } from "aws-sdk";
import { CustomerSearchItem, newItemCustomerSearch } from "./random-customer";
import { dbClient, truncate } from "../support/dynamoDb";
import { getCustomerSearchTableName } from "../support/util";
var _ = require("lodash");

const numCustomers = 5000;


truncate(dbClient, getCustomerSearchTableName(), numCustomers, newItemCustomerSearch);

