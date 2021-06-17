const MAIN_LIST = '/data/MainData.json';
const BASE_URL = 'http://10.58.3.10:8000';

export const GET_PRODUCT_API = `${MAIN_LIST}/products`;
export const GET_DELIVERY_API = `${BASE_URL}/orders/order/delivery`;
export const GET_PURCHASE_API = `${BASE_URL}/orders/order/purchase`;
export const GET_RECIPE_INFO_API = `${BASE_URL}/recipes`;
