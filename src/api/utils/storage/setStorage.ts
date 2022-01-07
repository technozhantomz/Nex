export const setStorage = (item: string, params: any, storageType = 'localStorage') => window[storageType as keyof Window].setItem(item, JSON.stringify(params));