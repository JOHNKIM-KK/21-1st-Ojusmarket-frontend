const MAIN_LIST = '/data/MainData.json';
const DELIVERY_DATA = 'http://10.58.6.166:8000/orders/order';
const PURCHASE_DATA = 'http://10.58.6.166:8000/orders/order';
const SIGNUP_URL = 'http://10.58.3.92:8000';
const LOGIN_URL = 'http://10.58.7.179:8000';
const BASE_URL = 'http://10.58.3.10:8000';

export const GET_PRODUCT_API = `${MAIN_LIST}/products`;
export const GET_DELIVERY_API = `${DELIVERY_DATA}/delivery`;
export const GET_PURCHASE_API = `${PURCHASE_DATA}/purchase`;
export const GET_SIGNUP_API = `${SIGNUP_URL}/user`;
export const GET_LOGIN_API = `${LOGIN_URL}/user/sign-in`;
export const GET_RECIPE_INFO_API = `${BASE_URL}/recipes`;
