interface Config {
  indexes: string[];
  dbSchema: DbSchema;
}

interface DbSchema {
  id: { table: string };
  search: SearchMapper;
}

interface SearchMapper {
  table: string;
  index: { [key: string]: DBIndex };
  field: StringMap;
}

interface DBIndex {
  table: string;
  dynamoDbIndex: boolean;
  keyCondition: string;
  selector: string[];
}

interface StringMap {
  [key: string]: string;
}

export { Config, DbSchema, SearchMapper, DBIndex, StringMap };
