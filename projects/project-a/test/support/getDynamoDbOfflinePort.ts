function getDynamoDbOfflinePort() {
  return process.env.DYNAMODB_PORT || "3005";
}

export { getDynamoDbOfflinePort }
