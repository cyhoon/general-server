import { RequestParams } from '@elastic/elasticsearch';
import { Service } from 'typedi';

import { ElasticSearch } from './elasticSearch';

const INDEX_NAME = "server_error_logs";

export type ElasticSearchErrorLogType = {
  apiName: string;
  method: string;
  url: string;
  header: Object;
  message: string;
};

@Service()
export class ElasticSearchErrorLog extends ElasticSearch<
  ElasticSearchErrorLogType
> {
  constructor() {
    super(INDEX_NAME);
  }

  public async putLog(log: ElasticSearchErrorLogType) {
    try {
      const bodyData: RequestParams.Index = {
        index: this.INDEX_NAME,
        body: {
          ...log,
          timestamp: new Date()
        }
      };

      await this.requestElasticSearch(bodyData);

      console.log("[SUCCESS]: ElasticSerachErrorLog putLog method");
    } catch (error) {
      console.log(
        `[ERROR]: ElasticSearchErrorLog putLog method, error-message=${error.message}`
      );
      return;
    }
  }
}
