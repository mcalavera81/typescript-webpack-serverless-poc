import { dbClient, batchWrite } from '../support/dynamoDb';
import { getCustomerByIdTableName } from "../support/util";
import { newItemCustomerGet } from "./random-customer";
var _ = require("lodash");

const numCustomers = 100;
batchWrite(dbClient, getCustomerByIdTableName(), numCustomers, newItemCustomerGet);
