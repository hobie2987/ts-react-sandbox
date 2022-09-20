import { isJSON, isNullOrUndefined, isObject } from "../utils/common";

export namespace SessionStorage {

    export function get(key: string): Object | string {
        const value = window.sessionStorage.getItem(key);
        return isNullOrUndefined(value)
            ? undefined
            : isJSON(value) ? JSON.parse(value) : value;
    }

    export function set(key: string, value: string | Object): void {
        const str = isObject(value) ? JSON.stringify(value) : value.toString();
        window.sessionStorage.setItem(key, str)
    }
}