function getSlsOfflinePort() {
  return process.env.APIGATEWAY_PORT || "3005";
}

export { getSlsOfflinePort }
