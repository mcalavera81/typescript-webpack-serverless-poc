// To parse this data:
//
//   import { Convert, Test } from "./file";
//
//   const test = Convert.toTest(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Test {
    dataEventId:    string;
    dataEventSize:  number;
    entityId:       string;
    company:        string;
    payload:        Payload;
    processingTime: number;
    application:    string;
    context:        Context;
    dataEventIndex: number;
    metadata:       Metadata;
    emittedTime:    number;
    entityName:     string;
    companyTable:   null;
}

export interface Context {
    function:        string;
    bankingDate:     string;
    application:     string;
    companyCode:     string;
    transactionRef:  string;
    transactionType: string;
}

export interface Metadata {
    requestId: string;
}

export interface Payload {
    LPvMgmtid:                null;
    LAaCussd:                 null;
    Title:                    null;
    ExemptRg17:               null;
    NoOfDependents:           null;
    recId:                    string;
    ARRAY_RefDataItem:        any[];
    AuditDateTime:            null;
    ARRAY_ExternSysId:        any[];
    LCusFldcob:               null;
    LPrimaryAgent:            null;
    ARRAY_OtherFinRel:        any[];
    AssetClass:               null;
    CurrNo:                   string;
    ARRAY_LCusEmail:          any[];
    CustomerSince:            null;
    ARRAY_SocialNtwIds:       any[];
    ARRAY_AddressItem2:       any[];
    ARRAY_AddressItem1:       any[];
    ARRAY_PreviousName:       any[];
    ClsCparty:                string;
    ARRAY_FurtherDetails:     any[];
    ARRAY_LegalIdDocname:     any[];
    Industry:                 string;
    LCusAgentgrp:             null;
    ARRAY_Override:           any[];
    ARRAY_VisType:            any[];
    GlobalCustomer:           null;
    CoCode:                   string;
    PermEst:                  null;
    ARRAY_Vulnerability:      any[];
    RecordStatus:             null;
    LastKycReviewdate:        null;
    CustomerType:             string;
    LPvCusclass:              null;
    ARRAY_Country:            any[];
    ARRAY_Address:            any[];
    NoUpdateCrm:              null;
    LBlklistFlag:             null;
    AmlResult:                string;
    ARRAY_PostCode:           any[];
    DeptCode:                 string;
    ARRAY_CrProfileType:      ARRAYCRProfileType[];
    ARRAY_LCuTxothcer:        any[];
    UpdatePrevAddress:        null;
    LCusMgedate:              null;
    ARRAY_LCusStreet:         any[];
    DeathDate:                null;
    ARRAY_Name2:              any[];
    Authoriser:               string;
    ARRAY_Name1:              ARRAYName1[];
    FlatNumber:               null;
    BirthIncorpDate:          null;
    Jurisdiction:             null;
    DateOfBirth:              string;
    ARRAY_NameAlias:          any[];
    LCusRiskcnt:              null;
    ARRAY_Text:               any[];
    DispoExempt:              null;
    CountrySubdivision:       null;
    ARRAY_LCusFatcatax:       any[];
    ContribAfip:              null;
    ARRAY_LCusGrps:           any[];
    BuildingNumber:           null;
    LCusFldactst:             null;
    AuditorCode:              null;
    Residence:                string;
    FxCommGroupid:            null;
    LCusTaxres:               string;
    ARRAY_PostingRestrict:    any[];
    AmlCheck:                 string;
    IndusClassify:            null;
    Target:                   string;
    LCusFldadtyp:             null;
    AddressCountry:           null;
    ConfidTxt:                null;
    AutoNextSuitreviewdate:   null;
    LAaCused:                 null;
    ARRAY_ResidenceStatus:    any[];
    RegCountry:               null;
    CalcRiskClass:            null;
    ARRAY_LCusRelcode:        any[];
    ARRAY_OverrideReason:     any[];
    ARRAY_RelationCode:       any[];
    CreditorId:               null;
    ReportTemplate:           null;
    AddressType:              null;
    AddressPurpose:           null;
    MobileBankingService:     string;
    ARRAY_LCusPhprefix:       any[];
    ARRAY_OffPhone:           any[];
    LCusVip:                  null;
    ARRAY_Inputter:           ARRAYInputter[];
    ResidenceRegion:          null;
    ARRAY_CrUserProfiletype:  ARRAYCRUserProfiletype[];
    ExemptRg17Val:            null;
    AllowBulkProcess:         null;
    ARRAY_Phone1:             any[];
    CompanyBook:              string;
    BirthProvince:            null;
    ARRAY_TownCountry:        any[];
    ARRAY_Interests:          any[];
    ProbateDate:              null;
    ManualRiskClass:          null;
    MaritalStatus:            null;
    LCusSource:               null;
    Reserved51:               null;
    LFcmRevwdate:             null;
    ARRAY_LRtd3000Tcid:       any[];
    CustomerCode:             null;
    ARRAY_OtherOfficer:       any[];
    ARRAY_TaxId:              any[];
    IssueCheques:             null;
    NetMonthlyIn:             null;
    ARRAY_LocalContent:       any[];
    CustomerStatus:           string;
    Mnemonic:                 string;
    NotificationOfDeath:      null;
    ARRAY_CommType:           any[];
    Language:                 string;
    LCusFreetxt:              null;
    Introducer:               null;
    KycComplete:              null;
    ARRAY_AltCusId:           any[];
    ARRAY_EmploymentStatus:   any[];
    ARRAY_LCustTaxid:         any[];
    ARRAY_LegalId:            any[];
    LCusBirthpro:             null;
    Sector:                   string;
    ARRAY_SpokenLanguage:     any[];
    PoBoxNumber:              null;
    LastSuitReviewdate:       null;
    CuEffDate:                null;
    FamilyName:               null;
    ManualNextSuitreviewdate: null;
    WhtExempt:                null;
    LAaCusrest:               null;
    ManualNextKycreviewdate:  null;
    LPergrupo:                null;
    LParentCntry:             null;
    DateLastVerified:         null;
    LAaCusreqby:              null;
    LastAmlResultdate:        null;
    ARRAY_MandateAppl:        any[];
    LCusTaxreten:             string;
    Domicile:                 null;
    InternetBankingService:   string;
    AddressItem2:             null;
    AddressItem1:             null;
    LIntBodycode:             null;
    ARRAY_RiskAssetType:      any[];
    SecureMessage:            null;
    CustomerLiability:        null;
    BuildingName:             null;
    LCusFldloed:              null;
    AddressValidatedBy:       null;
    ARRAY_HoldingsPivot:      any[];
    LCusFullcorp:             null;
    LCusFldtol:               null;
    LIntlBodyind:             null;
    NetMonthlyOut:            null;
    MergedTo:                 null;
    LCustTaxexmp:             string;
    LFcmRiskrtg:              null;
    Nationality:              string;
    Segment:                  null;
    LCusCorpname2:            null;
    LCusCorpname1:            null;
    ARRAY_ProbOfDeft:         any[];
    LCusConlevel:             null;
    ARRAY_ContactType:        any[];
    FiscalBenefit:            null;
    Gender:                   string;
    ARRAY_Fax1:               any[];
    ARRAY_Street:             ARRAYStreet[];
    GivenNames:               null;
    Alias:                    null;
    PersonEntityId:           null;
    ExemptedEntity:           null;
    AutoNextKycreviewdate:    null;
    ARRAY_OtherNationality:   any[];
    ContactDate:              null;
    LCusStaffcls:             null;
    ReviewFrequency:          null;
    KycRelationship:          null;
    DispoOfficer:             null;
    TaxCert:                  null;
    AccountOfficer:           string;
    ARRAY_CustomerRating:     any[];
    MergedStatus:             null;
    ARRAY_FormerVisType:      any[];
    LAaCusreason:             null;
    Salutation:               null;
    ARRAY_Pastimes:           any[];
    OccupClassify:            null;
    ARRAY_ShortName:          ARRAYShortName[];
    ARRAY_DateTime:           ARRAYDateTime[];
}

export interface ARRAYCRProfileType {
    RECORD_CrProfileType: RECORDCRProfileType;
}

export interface RECORDCRProfileType {
    CrProfileType: string;
    CrProfile:     string;
}

export interface ARRAYCRUserProfiletype {
    RECORD_CrUserProfiletype: RECORDCRUserProfiletype;
}

export interface RECORDCRUserProfiletype {
    CrUserProfiletype: string;
    CrCalcProfile:     string;
    CrUserProfile:     string;
    CrCalcResetdate:   null;
}

export interface ARRAYDateTime {
    DateTime: string;
}

export interface ARRAYInputter {
    Inputter: string;
}

export interface ARRAYName1 {
    Name1: string;
}

export interface ARRAYShortName {
    ShortName: string;
}

export interface ARRAYStreet {
    Street: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toTest(json: string): Test {
        return cast(JSON.parse(json), r("Test"));
    }

    public static testToJson(value: Test): string {
        return JSON.stringify(uncast(value, r("Test")), null, 2);
    }

    public static toContext(json: string): Context {
        return cast(JSON.parse(json), r("Context"));
    }

    public static contextToJson(value: Context): string {
        return JSON.stringify(uncast(value, r("Context")), null, 2);
    }

    public static toMetadata(json: string): Metadata {
        return cast(JSON.parse(json), r("Metadata"));
    }

    public static metadataToJson(value: Metadata): string {
        return JSON.stringify(uncast(value, r("Metadata")), null, 2);
    }

    public static toPayload(json: string): Payload {
        return cast(JSON.parse(json), r("Payload"));
    }

    public static payloadToJson(value: Payload): string {
        return JSON.stringify(uncast(value, r("Payload")), null, 2);
    }

    public static toARRAYCRProfileType(json: string): ARRAYCRProfileType {
        return cast(JSON.parse(json), r("ARRAYCRProfileType"));
    }

    public static aRRAYCRProfileTypeToJson(value: ARRAYCRProfileType): string {
        return JSON.stringify(uncast(value, r("ARRAYCRProfileType")), null, 2);
    }

    public static toRECORDCRProfileType(json: string): RECORDCRProfileType {
        return cast(JSON.parse(json), r("RECORDCRProfileType"));
    }

    public static rECORDCRProfileTypeToJson(value: RECORDCRProfileType): string {
        return JSON.stringify(uncast(value, r("RECORDCRProfileType")), null, 2);
    }

    public static toARRAYCRUserProfiletype(json: string): ARRAYCRUserProfiletype {
        return cast(JSON.parse(json), r("ARRAYCRUserProfiletype"));
    }

    public static aRRAYCRUserProfiletypeToJson(value: ARRAYCRUserProfiletype): string {
        return JSON.stringify(uncast(value, r("ARRAYCRUserProfiletype")), null, 2);
    }

    public static toRECORDCRUserProfiletype(json: string): RECORDCRUserProfiletype {
        return cast(JSON.parse(json), r("RECORDCRUserProfiletype"));
    }

    public static rECORDCRUserProfiletypeToJson(value: RECORDCRUserProfiletype): string {
        return JSON.stringify(uncast(value, r("RECORDCRUserProfiletype")), null, 2);
    }

    public static toARRAYDateTime(json: string): ARRAYDateTime {
        return cast(JSON.parse(json), r("ARRAYDateTime"));
    }

    public static aRRAYDateTimeToJson(value: ARRAYDateTime): string {
        return JSON.stringify(uncast(value, r("ARRAYDateTime")), null, 2);
    }

    public static toARRAYInputter(json: string): ARRAYInputter {
        return cast(JSON.parse(json), r("ARRAYInputter"));
    }

    public static aRRAYInputterToJson(value: ARRAYInputter): string {
        return JSON.stringify(uncast(value, r("ARRAYInputter")), null, 2);
    }

    public static toARRAYName1(json: string): ARRAYName1 {
        return cast(JSON.parse(json), r("ARRAYName1"));
    }

    public static aRRAYName1ToJson(value: ARRAYName1): string {
        return JSON.stringify(uncast(value, r("ARRAYName1")), null, 2);
    }

    public static toARRAYShortName(json: string): ARRAYShortName {
        return cast(JSON.parse(json), r("ARRAYShortName"));
    }

    public static aRRAYShortNameToJson(value: ARRAYShortName): string {
        return JSON.stringify(uncast(value, r("ARRAYShortName")), null, 2);
    }

    public static toARRAYStreet(json: string): ARRAYStreet {
        return cast(JSON.parse(json), r("ARRAYStreet"));
    }

    public static aRRAYStreetToJson(value: ARRAYStreet): string {
        return JSON.stringify(uncast(value, r("ARRAYStreet")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Test": o([
        { json: "dataEventId", js: "dataEventId", typ: "" },
        { json: "dataEventSize", js: "dataEventSize", typ: 0 },
        { json: "entityId", js: "entityId", typ: "" },
        { json: "company", js: "company", typ: "" },
        { json: "payload", js: "payload", typ: r("Payload") },
        { json: "processingTime", js: "processingTime", typ: 0 },
        { json: "application", js: "application", typ: "" },
        { json: "context", js: "context", typ: r("Context") },
        { json: "dataEventIndex", js: "dataEventIndex", typ: 0 },
        { json: "metadata", js: "metadata", typ: r("Metadata") },
        { json: "emittedTime", js: "emittedTime", typ: 0 },
        { json: "entityName", js: "entityName", typ: "" },
        { json: "companyTable", js: "companyTable", typ: null },
    ], false),
    "Context": o([
        { json: "function", js: "function", typ: "" },
        { json: "bankingDate", js: "bankingDate", typ: "" },
        { json: "application", js: "application", typ: "" },
        { json: "companyCode", js: "companyCode", typ: "" },
        { json: "transactionRef", js: "transactionRef", typ: "" },
        { json: "transactionType", js: "transactionType", typ: "" },
    ], false),
    "Metadata": o([
        { json: "requestId", js: "requestId", typ: "" },
    ], false),
    "Payload": o([
        { json: "LPvMgmtid", js: "LPvMgmtid", typ: null },
        { json: "LAaCussd", js: "LAaCussd", typ: null },
        { json: "Title", js: "Title", typ: null },
        { json: "ExemptRg17", js: "ExemptRg17", typ: null },
        { json: "NoOfDependents", js: "NoOfDependents", typ: null },
        { json: "recId", js: "recId", typ: "" },
        { json: "ARRAY_RefDataItem", js: "ARRAY_RefDataItem", typ: a("any") },
        { json: "AuditDateTime", js: "AuditDateTime", typ: null },
        { json: "ARRAY_ExternSysId", js: "ARRAY_ExternSysId", typ: a("any") },
        { json: "LCusFldcob", js: "LCusFldcob", typ: null },
        { json: "LPrimaryAgent", js: "LPrimaryAgent", typ: null },
        { json: "ARRAY_OtherFinRel", js: "ARRAY_OtherFinRel", typ: a("any") },
        { json: "AssetClass", js: "AssetClass", typ: null },
        { json: "CurrNo", js: "CurrNo", typ: "" },
        { json: "ARRAY_LCusEmail", js: "ARRAY_LCusEmail", typ: a("any") },
        { json: "CustomerSince", js: "CustomerSince", typ: null },
        { json: "ARRAY_SocialNtwIds", js: "ARRAY_SocialNtwIds", typ: a("any") },
        { json: "ARRAY_AddressItem2", js: "ARRAY_AddressItem2", typ: a("any") },
        { json: "ARRAY_AddressItem1", js: "ARRAY_AddressItem1", typ: a("any") },
        { json: "ARRAY_PreviousName", js: "ARRAY_PreviousName", typ: a("any") },
        { json: "ClsCparty", js: "ClsCparty", typ: "" },
        { json: "ARRAY_FurtherDetails", js: "ARRAY_FurtherDetails", typ: a("any") },
        { json: "ARRAY_LegalIdDocname", js: "ARRAY_LegalIdDocname", typ: a("any") },
        { json: "Industry", js: "Industry", typ: "" },
        { json: "LCusAgentgrp", js: "LCusAgentgrp", typ: null },
        { json: "ARRAY_Override", js: "ARRAY_Override", typ: a("any") },
        { json: "ARRAY_VisType", js: "ARRAY_VisType", typ: a("any") },
        { json: "GlobalCustomer", js: "GlobalCustomer", typ: null },
        { json: "CoCode", js: "CoCode", typ: "" },
        { json: "PermEst", js: "PermEst", typ: null },
        { json: "ARRAY_Vulnerability", js: "ARRAY_Vulnerability", typ: a("any") },
        { json: "RecordStatus", js: "RecordStatus", typ: null },
        { json: "LastKycReviewdate", js: "LastKycReviewdate", typ: null },
        { json: "CustomerType", js: "CustomerType", typ: "" },
        { json: "LPvCusclass", js: "LPvCusclass", typ: null },
        { json: "ARRAY_Country", js: "ARRAY_Country", typ: a("any") },
        { json: "ARRAY_Address", js: "ARRAY_Address", typ: a("any") },
        { json: "NoUpdateCrm", js: "NoUpdateCrm", typ: null },
        { json: "LBlklistFlag", js: "LBlklistFlag", typ: null },
        { json: "AmlResult", js: "AmlResult", typ: "" },
        { json: "ARRAY_PostCode", js: "ARRAY_PostCode", typ: a("any") },
        { json: "DeptCode", js: "DeptCode", typ: "" },
        { json: "ARRAY_CrProfileType", js: "ARRAY_CrProfileType", typ: a(r("ARRAYCRProfileType")) },
        { json: "ARRAY_LCuTxothcer", js: "ARRAY_LCuTxothcer", typ: a("any") },
        { json: "UpdatePrevAddress", js: "UpdatePrevAddress", typ: null },
        { json: "LCusMgedate", js: "LCusMgedate", typ: null },
        { json: "ARRAY_LCusStreet", js: "ARRAY_LCusStreet", typ: a("any") },
        { json: "DeathDate", js: "DeathDate", typ: null },
        { json: "ARRAY_Name2", js: "ARRAY_Name2", typ: a("any") },
        { json: "Authoriser", js: "Authoriser", typ: "" },
        { json: "ARRAY_Name1", js: "ARRAY_Name1", typ: a(r("ARRAYName1")) },
        { json: "FlatNumber", js: "FlatNumber", typ: null },
        { json: "BirthIncorpDate", js: "BirthIncorpDate", typ: null },
        { json: "Jurisdiction", js: "Jurisdiction", typ: null },
        { json: "DateOfBirth", js: "DateOfBirth", typ: "" },
        { json: "ARRAY_NameAlias", js: "ARRAY_NameAlias", typ: a("any") },
        { json: "LCusRiskcnt", js: "LCusRiskcnt", typ: null },
        { json: "ARRAY_Text", js: "ARRAY_Text", typ: a("any") },
        { json: "DispoExempt", js: "DispoExempt", typ: null },
        { json: "CountrySubdivision", js: "CountrySubdivision", typ: null },
        { json: "ARRAY_LCusFatcatax", js: "ARRAY_LCusFatcatax", typ: a("any") },
        { json: "ContribAfip", js: "ContribAfip", typ: null },
        { json: "ARRAY_LCusGrps", js: "ARRAY_LCusGrps", typ: a("any") },
        { json: "BuildingNumber", js: "BuildingNumber", typ: null },
        { json: "LCusFldactst", js: "LCusFldactst", typ: null },
        { json: "AuditorCode", js: "AuditorCode", typ: null },
        { json: "Residence", js: "Residence", typ: "" },
        { json: "FxCommGroupid", js: "FxCommGroupid", typ: null },
        { json: "LCusTaxres", js: "LCusTaxres", typ: "" },
        { json: "ARRAY_PostingRestrict", js: "ARRAY_PostingRestrict", typ: a("any") },
        { json: "AmlCheck", js: "AmlCheck", typ: "" },
        { json: "IndusClassify", js: "IndusClassify", typ: null },
        { json: "Target", js: "Target", typ: "" },
        { json: "LCusFldadtyp", js: "LCusFldadtyp", typ: null },
        { json: "AddressCountry", js: "AddressCountry", typ: null },
        { json: "ConfidTxt", js: "ConfidTxt", typ: null },
        { json: "AutoNextSuitreviewdate", js: "AutoNextSuitreviewdate", typ: null },
        { json: "LAaCused", js: "LAaCused", typ: null },
        { json: "ARRAY_ResidenceStatus", js: "ARRAY_ResidenceStatus", typ: a("any") },
        { json: "RegCountry", js: "RegCountry", typ: null },
        { json: "CalcRiskClass", js: "CalcRiskClass", typ: null },
        { json: "ARRAY_LCusRelcode", js: "ARRAY_LCusRelcode", typ: a("any") },
        { json: "ARRAY_OverrideReason", js: "ARRAY_OverrideReason", typ: a("any") },
        { json: "ARRAY_RelationCode", js: "ARRAY_RelationCode", typ: a("any") },
        { json: "CreditorId", js: "CreditorId", typ: null },
        { json: "ReportTemplate", js: "ReportTemplate", typ: null },
        { json: "AddressType", js: "AddressType", typ: null },
        { json: "AddressPurpose", js: "AddressPurpose", typ: null },
        { json: "MobileBankingService", js: "MobileBankingService", typ: "" },
        { json: "ARRAY_LCusPhprefix", js: "ARRAY_LCusPhprefix", typ: a("any") },
        { json: "ARRAY_OffPhone", js: "ARRAY_OffPhone", typ: a("any") },
        { json: "LCusVip", js: "LCusVip", typ: null },
        { json: "ARRAY_Inputter", js: "ARRAY_Inputter", typ: a(r("ARRAYInputter")) },
        { json: "ResidenceRegion", js: "ResidenceRegion", typ: null },
        { json: "ARRAY_CrUserProfiletype", js: "ARRAY_CrUserProfiletype", typ: a(r("ARRAYCRUserProfiletype")) },
        { json: "ExemptRg17Val", js: "ExemptRg17Val", typ: null },
        { json: "AllowBulkProcess", js: "AllowBulkProcess", typ: null },
        { json: "ARRAY_Phone1", js: "ARRAY_Phone1", typ: a("any") },
        { json: "CompanyBook", js: "CompanyBook", typ: "" },
        { json: "BirthProvince", js: "BirthProvince", typ: null },
        { json: "ARRAY_TownCountry", js: "ARRAY_TownCountry", typ: a("any") },
        { json: "ARRAY_Interests", js: "ARRAY_Interests", typ: a("any") },
        { json: "ProbateDate", js: "ProbateDate", typ: null },
        { json: "ManualRiskClass", js: "ManualRiskClass", typ: null },
        { json: "MaritalStatus", js: "MaritalStatus", typ: null },
        { json: "LCusSource", js: "LCusSource", typ: null },
        { json: "Reserved51", js: "Reserved51", typ: null },
        { json: "LFcmRevwdate", js: "LFcmRevwdate", typ: null },
        { json: "ARRAY_LRtd3000Tcid", js: "ARRAY_LRtd3000Tcid", typ: a("any") },
        { json: "CustomerCode", js: "CustomerCode", typ: null },
        { json: "ARRAY_OtherOfficer", js: "ARRAY_OtherOfficer", typ: a("any") },
        { json: "ARRAY_TaxId", js: "ARRAY_TaxId", typ: a("any") },
        { json: "IssueCheques", js: "IssueCheques", typ: null },
        { json: "NetMonthlyIn", js: "NetMonthlyIn", typ: null },
        { json: "ARRAY_LocalContent", js: "ARRAY_LocalContent", typ: a("any") },
        { json: "CustomerStatus", js: "CustomerStatus", typ: "" },
        { json: "Mnemonic", js: "Mnemonic", typ: "" },
        { json: "NotificationOfDeath", js: "NotificationOfDeath", typ: null },
        { json: "ARRAY_CommType", js: "ARRAY_CommType", typ: a("any") },
        { json: "Language", js: "Language", typ: "" },
        { json: "LCusFreetxt", js: "LCusFreetxt", typ: null },
        { json: "Introducer", js: "Introducer", typ: null },
        { json: "KycComplete", js: "KycComplete", typ: null },
        { json: "ARRAY_AltCusId", js: "ARRAY_AltCusId", typ: a("any") },
        { json: "ARRAY_EmploymentStatus", js: "ARRAY_EmploymentStatus", typ: a("any") },
        { json: "ARRAY_LCustTaxid", js: "ARRAY_LCustTaxid", typ: a("any") },
        { json: "ARRAY_LegalId", js: "ARRAY_LegalId", typ: a("any") },
        { json: "LCusBirthpro", js: "LCusBirthpro", typ: null },
        { json: "Sector", js: "Sector", typ: "" },
        { json: "ARRAY_SpokenLanguage", js: "ARRAY_SpokenLanguage", typ: a("any") },
        { json: "PoBoxNumber", js: "PoBoxNumber", typ: null },
        { json: "LastSuitReviewdate", js: "LastSuitReviewdate", typ: null },
        { json: "CuEffDate", js: "CuEffDate", typ: null },
        { json: "FamilyName", js: "FamilyName", typ: null },
        { json: "ManualNextSuitreviewdate", js: "ManualNextSuitreviewdate", typ: null },
        { json: "WhtExempt", js: "WhtExempt", typ: null },
        { json: "LAaCusrest", js: "LAaCusrest", typ: null },
        { json: "ManualNextKycreviewdate", js: "ManualNextKycreviewdate", typ: null },
        { json: "LPergrupo", js: "LPergrupo", typ: null },
        { json: "LParentCntry", js: "LParentCntry", typ: null },
        { json: "DateLastVerified", js: "DateLastVerified", typ: null },
        { json: "LAaCusreqby", js: "LAaCusreqby", typ: null },
        { json: "LastAmlResultdate", js: "LastAmlResultdate", typ: null },
        { json: "ARRAY_MandateAppl", js: "ARRAY_MandateAppl", typ: a("any") },
        { json: "LCusTaxreten", js: "LCusTaxreten", typ: "" },
        { json: "Domicile", js: "Domicile", typ: null },
        { json: "InternetBankingService", js: "InternetBankingService", typ: "" },
        { json: "AddressItem2", js: "AddressItem2", typ: null },
        { json: "AddressItem1", js: "AddressItem1", typ: null },
        { json: "LIntBodycode", js: "LIntBodycode", typ: null },
        { json: "ARRAY_RiskAssetType", js: "ARRAY_RiskAssetType", typ: a("any") },
        { json: "SecureMessage", js: "SecureMessage", typ: null },
        { json: "CustomerLiability", js: "CustomerLiability", typ: null },
        { json: "BuildingName", js: "BuildingName", typ: null },
        { json: "LCusFldloed", js: "LCusFldloed", typ: null },
        { json: "AddressValidatedBy", js: "AddressValidatedBy", typ: null },
        { json: "ARRAY_HoldingsPivot", js: "ARRAY_HoldingsPivot", typ: a("any") },
        { json: "LCusFullcorp", js: "LCusFullcorp", typ: null },
        { json: "LCusFldtol", js: "LCusFldtol", typ: null },
        { json: "LIntlBodyind", js: "LIntlBodyind", typ: null },
        { json: "NetMonthlyOut", js: "NetMonthlyOut", typ: null },
        { json: "MergedTo", js: "MergedTo", typ: null },
        { json: "LCustTaxexmp", js: "LCustTaxexmp", typ: "" },
        { json: "LFcmRiskrtg", js: "LFcmRiskrtg", typ: null },
        { json: "Nationality", js: "Nationality", typ: "" },
        { json: "Segment", js: "Segment", typ: null },
        { json: "LCusCorpname2", js: "LCusCorpname2", typ: null },
        { json: "LCusCorpname1", js: "LCusCorpname1", typ: null },
        { json: "ARRAY_ProbOfDeft", js: "ARRAY_ProbOfDeft", typ: a("any") },
        { json: "LCusConlevel", js: "LCusConlevel", typ: null },
        { json: "ARRAY_ContactType", js: "ARRAY_ContactType", typ: a("any") },
        { json: "FiscalBenefit", js: "FiscalBenefit", typ: null },
        { json: "Gender", js: "Gender", typ: "" },
        { json: "ARRAY_Fax1", js: "ARRAY_Fax1", typ: a("any") },
        { json: "ARRAY_Street", js: "ARRAY_Street", typ: a(r("ARRAYStreet")) },
        { json: "GivenNames", js: "GivenNames", typ: null },
        { json: "Alias", js: "Alias", typ: null },
        { json: "PersonEntityId", js: "PersonEntityId", typ: null },
        { json: "ExemptedEntity", js: "ExemptedEntity", typ: null },
        { json: "AutoNextKycreviewdate", js: "AutoNextKycreviewdate", typ: null },
        { json: "ARRAY_OtherNationality", js: "ARRAY_OtherNationality", typ: a("any") },
        { json: "ContactDate", js: "ContactDate", typ: null },
        { json: "LCusStaffcls", js: "LCusStaffcls", typ: null },
        { json: "ReviewFrequency", js: "ReviewFrequency", typ: null },
        { json: "KycRelationship", js: "KycRelationship", typ: null },
        { json: "DispoOfficer", js: "DispoOfficer", typ: null },
        { json: "TaxCert", js: "TaxCert", typ: null },
        { json: "AccountOfficer", js: "AccountOfficer", typ: "" },
        { json: "ARRAY_CustomerRating", js: "ARRAY_CustomerRating", typ: a("any") },
        { json: "MergedStatus", js: "MergedStatus", typ: null },
        { json: "ARRAY_FormerVisType", js: "ARRAY_FormerVisType", typ: a("any") },
        { json: "LAaCusreason", js: "LAaCusreason", typ: null },
        { json: "Salutation", js: "Salutation", typ: null },
        { json: "ARRAY_Pastimes", js: "ARRAY_Pastimes", typ: a("any") },
        { json: "OccupClassify", js: "OccupClassify", typ: null },
        { json: "ARRAY_ShortName", js: "ARRAY_ShortName", typ: a(r("ARRAYShortName")) },
        { json: "ARRAY_DateTime", js: "ARRAY_DateTime", typ: a(r("ARRAYDateTime")) },
    ], false),
    "ARRAYCRProfileType": o([
        { json: "RECORD_CrProfileType", js: "RECORD_CrProfileType", typ: r("RECORDCRProfileType") },
    ], false),
    "RECORDCRProfileType": o([
        { json: "CrProfileType", js: "CrProfileType", typ: "" },
        { json: "CrProfile", js: "CrProfile", typ: "" },
    ], false),
    "ARRAYCRUserProfiletype": o([
        { json: "RECORD_CrUserProfiletype", js: "RECORD_CrUserProfiletype", typ: r("RECORDCRUserProfiletype") },
    ], false),
    "RECORDCRUserProfiletype": o([
        { json: "CrUserProfiletype", js: "CrUserProfiletype", typ: "" },
        { json: "CrCalcProfile", js: "CrCalcProfile", typ: "" },
        { json: "CrUserProfile", js: "CrUserProfile", typ: "" },
        { json: "CrCalcResetdate", js: "CrCalcResetdate", typ: null },
    ], false),
    "ARRAYDateTime": o([
        { json: "DateTime", js: "DateTime", typ: "" },
    ], false),
    "ARRAYInputter": o([
        { json: "Inputter", js: "Inputter", typ: "" },
    ], false),
    "ARRAYName1": o([
        { json: "Name1", js: "Name1", typ: "" },
    ], false),
    "ARRAYShortName": o([
        { json: "ShortName", js: "ShortName", typ: "" },
    ], false),
    "ARRAYStreet": o([
        { json: "Street", js: "Street", typ: "" },
    ], false),
};
