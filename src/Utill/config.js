const MAIN_LIST = '/data/MainData.json';
const DELIVERY_DATA = 'http://10.58.6.166:8000/orders/order';
const PURCHASE_DATA = 'http://10.58.6.166:8000/orders/order';
const SIGNUP_URL = 'http://10.58.7.21:8000';

export const GET_PRODUCT_API = `${MAIN_LIST}/products`;
export const GET_DELIVERY_API = `${DELIVERY_DATA}/delivery`;
export const GET_PURCHASE_API = `${PURCHASE_DATA}/purchase`;
export const GET_SIGNUP_API = `${SIGNUP_URL}/user`;
