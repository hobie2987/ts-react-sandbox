
export function isNull(value: any): boolean {
    return value === null;
}

export function isUndefined(value: any): boolean {
    return value === undefined;
}

export function isNullOrUndefined(value: any): boolean {
    return isNull(value) || isUndefined(value);
}

export function isString(value: any): boolean {
    return typeof value === 'string'
}

export function isObject(value: any): boolean {
    return typeof value === 'object' && !isArray(value) && !isNull(value)
}

export function isArray(value: any): boolean {
    return Array.isArray(value)
}

export function isJSON(value: any): boolean {
    if (!isString(value)) {
        return false;
    }

    try {
        const json = JSON.parse(value);
        return isObject(json) && !isNull(json)
    } catch (error) {
        return false;
    }
}
