export interface IFilter {
    fields?: any;
    include?: any;
    limit?: number;
    order?: string | string[];
    skip?: number;
    where?: any;
    deleted?: boolean;
  }