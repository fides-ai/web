/**
 * Created by asafam on 01/03/2019.
 */

'use strict';


export const loadKey = (key) => {
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
            return undefined;
        }
        return JSON.parse(serializedValue);
    } catch (err) {
        return undefined;
    }
};

export const saveKey = (key, value) => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (err) {
        // Ignore write errors.
    }
};