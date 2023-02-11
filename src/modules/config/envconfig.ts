import path from 'path';

export type EnvironmentValue = string | number | boolean;
export type EnvironmentKeyValues = Record<string, EnvironmentValue>;

export interface Config {
  dir: string;
  filename: string;
  variables: EnvironmentKeyValues;
}

export const config: Config = {
  dir: path.join(__dirname, '../../env'),
  filename: '.app.env.local',
  variables: {
    KAFKA_BROKERS: JSON.stringify(['localhost:9092']),
  },
};
