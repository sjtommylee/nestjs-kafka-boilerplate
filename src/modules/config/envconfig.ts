import path from 'path';
import { Config } from '.';

const BASE_URL = `base-url`;
const BROKERS = 'test-broker';

export const config: Config = {
  dir: path?.join(__dirname, '../../env'),
  filename: '.app.env.local',
  variables: {
    KAFKA_BROKERS: JSON.stringify(['localhost:9092']),
    TEST_CONFIG_VAR: 'ENVGEN_TEST',
    BASE_URL,
    BROKERS,
  },
};
