import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import * as SwaggerValidator from 'swagger-object-validator';
import { ValidationResult } from 'swagger-object-validator';
import { expect } from "chai";

function readSyncYaml(...paths: string[]) {
    return yaml.safeLoad(fs.readFileSync(path.join(...paths), 'utf8'));
}

async function validate(object: any, schema: string) {

    return new Promise((resolve, reject) => {
        customerValidator.validateModel(object, schema, (err: string, result?: ValidationResult) => {
            if (result?.errors && result?.errors.length > 0) {
                reject(result?.humanReadable())
            } else {
                resolve()
            }
        });

    }).then(null, (rej) => expect.fail(rej))
}
const customerSwagger = readSyncYaml(__dirname, '../api-specs/my-customer-swagger.yaml');
const customerValidator = new SwaggerValidator.Handler(customerSwagger)

export { validate }