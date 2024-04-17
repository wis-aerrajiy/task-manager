import { DataSource, DataSourceOptions } from "typeorm";
import { DatabaseConfig } from "./db-config";

export const dataScourceOptions : DataSourceOptions = new DatabaseConfig().getDbConfig();

const dataSource = new DataSource(dataScourceOptions);

export default dataSource;