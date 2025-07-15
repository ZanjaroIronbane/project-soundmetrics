import { stringify } from 'qs';

export const stringifyParams = (data: Record<string, unknown>): string =>
  stringify(data);
