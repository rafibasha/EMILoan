import {ADD_TO_CART, REMOVE_FROM_CART, USER_LIST} from './constants';
export function addToCart(item) {
  console.log('add to cart:', item);
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
export function removefromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function getUserList() {
  console.log('user list');
  return {
    type: USER_LIST,
  };
}
