export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export enum DatabaseDialect {
  MSSQL,
  MySQL,
  PostgreSQL,
  Firebird,
}

export type CompletionLanguages = string[];
export type FormatLanguages = string[];

export interface FormatOptions {
  /**
   * Indent Size
   * @type {number}
   * @default 2
   * @memberof FormatOptions
   */
  indentSize: number;
}
export interface ConnectionSettings {
  /**
   * Connection name
   * @type {string}
   * @memberof ConnectionSettings
   */
   name: string;
  /**
   * Server address
   * @type {string}
   * @default "127.0.0.1
   * @memberof ConnectionSettings
   */
   server: string;
  /**
   * Port for connection
   * @type {number}
   * @memberof ConnectionSettings
   */
   port: number;
  /**
   * Database name
   * @type {string}
   * @memberof ConnectionSettings
   */
   database: string;
  /**
   * Database username
   * @type {string}
   * @memberof ConnectionSettings
   */
   username: string;
  /**
   * Connection password. You can use option askForPassword to prompt password before connect
   * @type {string}
   * @default null
   * @memberof ConnectionSettings
   */
   password?: string;
  /**
   * Ask for password instead of set it in your settings"
   * @type {boolean}
   * @default false
   * @memberof ConnectionSettings
   */
   askForPassword?: boolean;
  /**
   * Connection Dialect"
   * @type {DatabaseDialect}
   * @memberof ConnectionSettings
   */
   dialect: DatabaseDialect;
  /**
   * Connection timeout in seconds"
   * @type {number}
   * @default 1
   * @memberof ConnectionSettings
   */
   connectionTimeout?: number;
  /**
   */
}
export default interface Settings {
  /**
   * Name of the connection to auto connect on start
   * @type {string}
   * @default null
   * @memberof Settings
   */
  autoConnectTo?: string;
  /**
   * Show debugging messages on console.
   * @default true
   * @type {boolean}
   * @memberof Settings
   */
  logging?: boolean;
  /**
   * Help SQLTools development.
   * @type {boolean}
   * @default true
   * @memberof Settings
   */
  telemetry?: boolean;
  /**
   * Extension ID
   * @type {string}
   * @default null
   * @memberof Settings
   */
  telemetryUUID?: string;
  /**
   * Toggle statusbar visibility.
   * @type {boolean}
   * @default true
   * @memberof Settings
   */
   showStatusbar?: boolean;
  /**
   * Show debugging messages on console.
   * @type {LogLevel}
   * @default DEBUG
   * @memberof Settings
   */
   logLevel?: LogLevel;
  /**
   * Timeout in seconds for killing query process after the timeout.
   * @type {number}
   * @default 300000
   * @memberof Settings
   */
   queryTimeout?: number;
  /**
   * Number of queries to keep on History.
   * @type {number}
   * @default 100
   * @memberof Settings
   */
   historySize?: number;
  /**
   * Show results using new tab.
   * @type {boolean}
   * @default false
   * @memberof Settings
   */
   showResultOnTab?: boolean;
  /**
   * Clear output for new commands.
   * @type {boolean}
   * @default false
   * @memberof Settings
   */
   clearOutput?: boolean;
  /**
   * Languages with SQL completion activated.
   * @type {CompletionLanguages}
   * @default ["sql", "plaintext"]
   * @memberof Settings
   * @see {@link https://code.visualstudio.com/docs/languages/identifiers} for more information.
   */
  completionLanguages?: CompletionLanguages;
  /**
   * Languages with SQL formatting activated.
   * @type {FormatLanguages}
   * @default ["sql"]
   * @memberof Settings
   * @see {@link https://code.visualstudio.com/docs/languages/identifiers} for more information.
   */
  formatLanguages?: FormatLanguages;
  /**
   * Format document/selection options
   * @type {FormatOptions}
   * @memberof Settings
   */
  format?: FormatOptions;
  /**
   * Connections
   * @type {ConnectionSettings[]}
   * @default []
   * @memberof Settings
   */
  connections?: ConnectionSettings[];
}
