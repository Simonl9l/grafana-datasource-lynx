import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  installationId: number;
  clientId: number;
  type: string;
  meta: any[];
  tabledata: boolean;
  stateOnly: boolean;
  metaAsFields: boolean;
  linkKey: string;
  messageFrom: string;
  groupBy: string;
  nameBy: string;
}

export const defaultQuery: Partial<MyQuery> = {
  installationId: 0,
  clientId: 0,
  type: '',
  meta: [{ key: 'type', value: '' }],
};

export interface LogEntry {
  client_id: number;
  installation_id: number;
  timestamp: number;
  topic: string;
  value: number;
  msg: string;
}

export interface LogResult {
  count: number;
  data: LogEntry[];
  last: number;
  total: number;
}

export interface FunctionX {
  id: number;
  type: string;
  meta: object;
}

export interface Installation {
  id: number;
  client_id: number;
  name: string;
}

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  url?: string;
  apiKey?: string;
  auth?: string;
}
