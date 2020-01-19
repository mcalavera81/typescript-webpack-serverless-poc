import { dbClient, truncate } from '../support/dynamoDb';
import { getCustomerByIdTableName } from "../support/util";
import { newItemCustomerGet } from "./random-customer";
var _ = require("lodash");

const numCustomers = 100;
truncate(dbClient, getCustomerByIdTableName(), numCustomers, newItemCustomerGet);
