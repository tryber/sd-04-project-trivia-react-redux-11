export const setLocal = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getLocal = (key) => JSON.parse(localStorage.getItem(key));
