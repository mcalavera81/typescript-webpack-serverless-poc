import faker from "faker";
import { GetCustomersRecordidResponse, GetCustomersResponseBodyInner } from '../customer-api';

interface CustomerGetItem {
  id: string;
  version: number;
  customer: GetCustomersRecordidResponse;
}

interface CustomerSearchItem {
  id: string;
  version: number;
  firstName: string;
  firstSurname: string;
  secondSurname: string;
  dateOfBirth: string;
  customer: GetCustomersResponseBodyInner;
}




function newItemCustomerSearch(): CustomerSearchItem {

  const customerId = faker.random.alphaNumeric(10);
  const firstName = "firsName"; //faker.name.firstName();
  const firstSurname = faker.name.lastName();
  const secondSurname = "" + faker.random.number({ min: 1, max: 500 }); //faker.name.lastName();
  const dateOfBirth = faker.date.past().toISOString().split('T')[0];

  return {
    id: customerId,
    version: faker.random.number({ min: 0, max: 1000 }),
    firstName: firstName,
    firstSurname: firstSurname,
    secondSurname: secondSurname,
    dateOfBirth: dateOfBirth,
    customer: randomCustomerSearch(customerId, firstName, firstSurname, secondSurname, dateOfBirth)
  };
}

function newItemCustomerGet(): CustomerGetItem {
  return {
    id: faker.random.alphaNumeric(10),
    version: faker.random.number({ min: 0, max: 1000 }),
    customer: randomCustomer()
  };
}

function randomCustomerSearch(
  customerId: string,
  firstName: string,
  firstSurname: string,
  secondSurname: string,
  dateOfBirth: string): GetCustomersResponseBodyInner {
  return {
    "legalDocuments": [
      {
        "legalDocId": faker.random.alphaNumeric(),
        "legalDocTypeTCode": "PASSPORT"
      }
    ],
    "firstName": firstName,
    "customerId": customerId,
    "firstSurname": firstSurname,
    "secondSurname": secondSurname,
    "dateOfBirth": dateOfBirth,
  }

}

function randomCustomer(): GetCustomersRecordidResponse {
  return {
    header: {
      transactionStatus: "Live",
      audit: {
        t24Time: faker.random.number(),
        parseTime: faker.random.number(),
      },
      id: "100015",
      status: "success"
    },
    body: {
      vulnerabilities: [
        {
          vulnerabilityTCode: "HEARING.IMPARED"
        }
      ],
      addresses: [
        {
          street: faker.address.streetName(),
          number: "892",
          floor: "2",
          department: "A",
          monoblock: "Palacio Barolo",
          additionalItems1: "San Telmo",
          additionalItems2: "Alberti",
          countryTCode: faker.address.countryCode(),
          city: faker.address.city(),
          province: "Buenos Aires",
          postCode: faker.address.zipCode(),
          addressTypeTCode: "Home"
        }
      ],
      telephones: [
        {
          countryCodeTCode: "AR",
          isPrimaryTelephoneTBoolean: "YES",
          telephoneNumber: faker.phone.phoneNumber(),
          fullTelephoneNumber: "+5492231234567",
          startTime: "10:10",
          endTime: "16:45"
        }
      ],
      emailDetails: [
        {
          preferredEmailTCode: "Office",
          email: faker.internet.email()
        }
      ],
      legalDocuments: [
        {
          legalDocId: "6187466890",
          legalDocTypeTCode: "CUIT",
          nameOnId: "CLAUDIO POLTORAK",
          issuingAuthority: "AR",
          issueDate: "2017-11-30",
          expirationDate: "2020-11-30"
        }
      ],
      relationDetails: [
        {
          relationTCode: "44",
          customerId: "100100"
        }
      ],
      overseaTaxes: [
        {
          taxCountryTCode: "string",
          tin: "string",
          taxReasonTCode: "string"
        }
      ],
      overrideDetails: [
        {
          override: "string"
        }
      ],
      firstSurname: faker.name.lastName(),
      secondSurname: faker.name.lastName(),
      firstName: faker.name.firstName(),
      alias: "CLAUD",
      genderTCode: "MALE",
      maritalStatusTCode: "SINGLE",
      targetTCode: "2",
      nationalityTCode: "AR",
      staffTCode: "ACTIVE",
      residenceTCode: "AR",
      dateOfBirth: "2011-101-01",
      languageTCode: "2",
      industryClasificationTCode: "0111",
      countryOfBirthTCode: "AR",
      provinceOfBirthTCode: "AR",
      cityOfBirth: faker.address.city(),
      occupationClasificationTCode: "2000",
      activityTypeTCode: "10",
      educationLevelTCode: "Titulado Superior",
      mergeDate: "2017-11-30",
      recordStatus: "LIVE",
      currentNumber: 1,
      inputter: "INPUTTER",
      primaryAgentTcode: "CLAUDIOD",
      agentGroupTCode: "RETAIL",
      isVipTBoolean: "YES",
      communicationTypeTCode: "EMAIL"
    }
  };
}

export {
  CustomerGetItem,
  newItemCustomerGet,
  CustomerSearchItem,
  newItemCustomerSearch
};
