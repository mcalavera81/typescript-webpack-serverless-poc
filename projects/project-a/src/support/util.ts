import assert from "assert"
import config from "../schema/config.json";


const getResponseHeaders = () => {
  return {
    "Access-Control-Allow-Origin": "*"
  };
};

function getTableName(tableName: string, stageParam?: string) {
  const stage: string | undefined = stageParam ?? process.env.STAGE;
  assert(stage, "Stage must be defined");
  return `${stage}-${tableName}`;
}

function getCustomerByIdTableName() {
  return getTableName(config.dbSchema.id.table)
}

function getCustomerSearchTableName() {
  return getTableName(config.dbSchema.search.table)
}

function getEmailTableName() {
  return getTableName(config.dbSchema.search.index["email"].table)
}

function getPhoneTableName() {
  return getTableName(config.dbSchema.search.index["phone"].table)
}

function getLegalDocTableName() {
  return getTableName(config.dbSchema.search.index["legalDoc"].table)
}


export {
  getResponseHeaders,
  getTableName,
  getCustomerSearchTableName,
  getCustomerByIdTableName,
  getEmailTableName,
  getPhoneTableName,
  getLegalDocTableName
}
