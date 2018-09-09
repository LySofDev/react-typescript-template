import * as Cookies from 'js-cookie';

export class CookieService {

  public static set(key: string, value: string) {
    Cookies.set(key, value);
  }

  public static get(key: string): string {
    return Cookies.get(key) || "";
  }

  public static exists(key: string): boolean {
    return typeof Cookies.get(key) !== "undefined";
  }

  public static remove(key: string) {
    Cookies.remove(key);
  }

}
