// eslint-disable-next-line max-classes-per-file
import { get } from 'lodash-es';

export class TokenError extends Error {}

export class ErrorHelper {
  static parse(error: any): Error {
    const networkError = get(error, 'networkError.result.errors', null);
    if (networkError && Array.isArray(networkError)) {
      const msg = networkError.map((row) => row.message).join(', ');

      if (networkError.some((row) => row?.extensions?.code === 'invalid_token')) {
        return new TokenError(msg);
      }

      return new Error(msg);
    }

    return error;
  }
}
