export const getLocalStorageItem = (name: string) => {
	return localStorage.getItem(name);
};
export const setLocalStorageItem = (name: string, value: any) => {
	return localStorage.setItem(name, value);
};
export const removeLocalStorageItem = (name: string) => {
	localStorage.removeItem(name);
};
export const clearLocalStorage = () => {
	localStorage.clear();
};
