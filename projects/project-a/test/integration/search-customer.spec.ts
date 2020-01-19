import { expect } from "chai";
import "mocha";
import { prettyPrint } from '../../../../libraries/lib-b/index';
import { GetCustomersResponseBody } from '../../code-gen/out/api';
import event from '../event/api-gateway-event.json';
import { viaHandler } from "../test-helper";
import { validate } from "../test-util";
import { getIds2 } from "./boostrap.spec";


describe("search customer test", function () {
    this.timeout(30000);

    it("ok", async () => {

        console.log(`firstName: ${getIds2()[0].firstName}`)

        event.queryStringParameters = {
            "firstName": getIds2()[0].firstName
        }
        const response = await viaHandler(event, 'search-customer')
        const body = response.body as GetCustomersResponseBody;


        console.log(`res: ${prettyPrint(body)}`)
        expect(body).to.exist;

        await validate(body, "getCustomersResponseBody")

    })

})
