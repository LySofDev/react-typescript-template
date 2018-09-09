import * as Cookies from 'js-cookie';
import { CookieService } from './cookie.service';

describe('CookieService', () => {
  const testKey: string = "foo";
  const testValue: string = "bar";

  describe('when a cookie has been set', () => {
    beforeEach(() => { Cookies.set(testKey, testValue); });

    it('can be retrieved with a key', () => {
      expect(CookieService.get(testKey)).toEqual(testValue);
    });

    it('can be verified with a key', () => {
      expect(CookieService.exists(testKey)).toBe(true);
    });

    it('can be removed with a key', () => {
      expect(CookieService.exists(testKey)).toBe(true);
      CookieService.remove(testKey);
      expect(CookieService.exists(testKey)).toBe(false);
    });

    afterEach(() => { Cookies.remove(testKey); });
  });

  describe('when a cookie has not been set', () => {
    beforeEach(() => { Cookies.remove(testKey); });

    it('retrieving it will return an empty string', () => {
      expect(CookieService.get(testKey)).toEqual("");
    });

    it('verifying it will return false', () => {
      expect(CookieService.exists(testKey)).toBe(false);
    });

    it('can be set with a key and value', () => {
      expect(CookieService.exists(testKey)).toBe(false);
      CookieService.set(testKey, testValue);
      expect(CookieService.exists(testKey)).toBe(true);
      expect(CookieService.get(testKey)).toBe(testValue);
    });

    afterEach(() => { Cookies.remove(testKey); });
  });

});
