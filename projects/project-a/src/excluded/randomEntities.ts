'use strict'
import faker from "faker";
import { Customer, Account, CustomerT24, AccountT24, CustomersRange, AccountsRange } from './domain';
import {createCustomerT24, createAccountT24} from './apiGateway';

let randomGen  = faker.random;
let nameGen = faker.name;
let phoneGen = faker.phone;
let finance = faker.finance;
let random = faker.random;



export async function createSeedData(customerRange: CustomersRange, accountsRange: AccountsRange){

    const customers:CustomerT24[] = []
    let accounts:AccountT24[] = []

    const numberOfCustomers = randomInt(customerRange.min, customerRange.max);
    console.log(`Creating ${numberOfCustomers} customers ...`)

    for(let i=0;i<numberOfCustomers;i++){
        const createdCustomer: CustomerT24 = await createCustomer();
        customers.push(createdCustomer)

        const customerAccounts:AccountT24[] = await createCustomerAccounts(accountsRange,createdCustomer.id)
        accounts = accounts.concat(customerAccounts)
    }

    return [customers, accounts];    
}

async function createCustomerAccounts(accountsRange: AccountsRange, customerId: string) {
    const accounts:AccountT24[] = []
    const numberOfAccounts = randomInt(accountsRange.min,accountsRange.max);
    console.log(`Creating ${numberOfAccounts} accounts for customer ${customerId}`)
    
    for(let i=0;i<numberOfAccounts;i++){
        const createdAccount: AccountT24 = await createAccountT24(randomAccount(customerId));
        accounts.push(createdAccount);
    }

    return accounts
}


async function createCustomer(){
    const customerT24:CustomerT24 =await createCustomerT24(randomCustomer()); 
    return customerT24;
}

function randomAccount(customerId: string):Account{
    var account: Account ={     
        customerId: customerId,    
        name:finance.accountName(),
        account:  finance.account(),
        currencyName:finance.currencyName()
    };

    return account;    
}

function randomCustomer(){
    var customer:Customer = {
        firstName: nameGen.firstName(), 
        lastName: nameGen.lastName(),
        phone: phoneGen.phoneNumber()
    };
    return customer;
}

function randomInt(min: number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


