"use strict";
import { batchWrite, dbClient } from "../support/dynamoDb";
import { getCustomerSearchTableName } from "../support/util";
import { newItemCustomerSearch } from "./random-customer";
var _ = require("lodash");

const numCustomers = 5000;


batchWrite(dbClient, getCustomerSearchTableName(), numCustomers, newItemCustomerSearch);

