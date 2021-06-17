const MAIN_LIST = '/data/MainData.json';
const DELIVERY_DATA = 'http://10.58.1.164:8000';
const PURCHASE_DATA = 'http://10.58.1.164:8000';

export const GET_PRODUCT_API = `${MAIN_LIST}`;
export const GET_DELIVERY_API = `${DELIVERY_DATA}/orders`;
export const GET_PURCHASE_API = `${PURCHASE_DATA}/orders/payment`;
