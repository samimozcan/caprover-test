import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'postgresMyPC',
  connector: 'postgresql',
  url: '',
  host: '161.35.26.223',
  port: 5432,
  user: 'postgres',
  password: 'pass123',
  database: 'test',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PostgresMyPcDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'postgresMyPC';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.postgresMyPC', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
