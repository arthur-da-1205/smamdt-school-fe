import { Encryptor } from '@libraries/encryptor';
import { forIn, startsWith } from 'lodash-es';

const APP_PREFIX = 'lini_app_';
const encryptor = new Encryptor('liniapp2022');

export class LocalStorage {
  static getLength() {
    return localStorage.length;
  }

  static setItem(key: string, value: any) {
    if (value !== 'undefined' && typeof value !== 'undefined' && value !== null) {
      localStorage.setItem(`${APP_PREFIX}${key}`, encryptor.encrypt(value));
    } else {
      LocalStorage.removeItem(key);
    }
  }

  static getItem(key: string) {
    const val = localStorage.getItem(`${APP_PREFIX}${key}`);
    if (val === null) {
      return null;
    }

    const decrypted = encryptor.decrypt(val);

    return typeof decrypted !== 'string' ? JSON.stringify(decrypted) : decrypted;
  }

  static removeItem(key: string) {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }

  static clear() {
    forIn(window.localStorage, (value: any, objKey: string) => {
      if (startsWith(objKey, APP_PREFIX) === true) {
        window.localStorage.removeItem(objKey);
      }
    });
  }

  /** Tests that localStorage exists, can be written to, and read from. */
  static testLocalStorage() {
    const testValue = 'testValue';
    const testKey = 'testKey';
    const errorMessage = 'localStorage did not return expected value';

    LocalStorage.setItem(testKey, testValue);

    const retrievedValue = LocalStorage.getItem(testKey);

    LocalStorage.removeItem(testKey);

    if (retrievedValue !== testValue) {
      throw new Error(errorMessage);
    }
  }
}
