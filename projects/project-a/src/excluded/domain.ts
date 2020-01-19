export class Customer{
    constructor(
        public firstName: string,
        public lastName: string,
        public phone: string){}
}

export class CustomerT24{
    
    constructor(
        public id:string,
        public customer: Customer){}
}

export class Account{
    constructor(
        public customerId: string,
        public name: string,
        public account: string,
        public currencyName: string){}
}

export class AccountT24{
    
    constructor(
        public id: string,
        public account: Account){}
}

export interface CustomersRange{
    min: number;
    max: number;
}

export interface AccountsRange{
    min: number;
    max: number;
}


export class Transaction {
    constructor(
        public id: string,
        public transactionType: string,
        public amount: string,
        public idOrigin: string,
        public idDestination: string,
        ) {
    }
}