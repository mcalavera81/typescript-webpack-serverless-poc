'use strict'

import faker from 'faker';
import { Customer, Account, CustomerT24, AccountT24 } from './domain';

async function createCustomerT24(customer: Customer){
    let promise = new Promise<CustomerT24>((resolve, reject)=>{
        
        const customerT24: CustomerT24 ={
            id: faker.random.uuid(),
            customer: customer     
        }
             
        setTimeout(()=> resolve(customerT24),100);
    });
    return promise;
}

async function createAccountT24(account: Account){
    let promise = new Promise<AccountT24>((resolve, reject)=>{

        const accountT24: AccountT24 = {
            id: faker.random.uuid(),
            account: account            
        }

        setTimeout(()=> resolve(accountT24),100);
    });
    return promise;
}

export {createCustomerT24}
export {createAccountT24}
