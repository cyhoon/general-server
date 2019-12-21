import { Service } from 'typedi';

import { ElasticSearchAPILog, ElasticSearchAPILogType } from '../libraries/elasticSearchAPILog';
import { ElasticSearchErrorLog, ElasticSearchErrorLogType } from '../libraries/elasticSearchErrorLog';

@Service()
export class LogService {
  constructor(
    private elasticSearchErrorLog: ElasticSearchErrorLog,
    private elasticSearchAPILog: ElasticSearchAPILog
  ) {}

  public log(data: ElasticSearchAPILogType) {
    this.elasticSearchAPILog.putLog(data);
  }

  public error(data: ElasticSearchErrorLogType) {
    this.elasticSearchErrorLog.putLog(data);
  }
}
