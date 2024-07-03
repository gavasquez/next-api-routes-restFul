/*
cookie: cart
{
  'uuid-123-1': 4,
  'uuid-123-1': 1,
  'uuid-123-1': 3,
  'uuid-123-1': 5,
}
*/

import { getCookie, hasCookie, setCookie } from 'cookies-next';

export const getCookieCart = (): { [id: string]: number } => {

  if(hasCookie('cart')){
    const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
    return cookieCart;
  }

  return {};
}

export const addProductToCart = (id: string) => {

  const cookieCart = getCookieCart();

  if(cookieCart[id]){
    cookieCart[id]  = cookieCart[id]+1;
  }else {
    cookieCart[id] = 1;
  }

  setCookie('cart', JSON.stringify(cookieCart));
}

export const remoteProductFromCart = (id: string) => {
  
  const cookieCart = getCookieCart();

  if(cookieCart[id]){
    delete cookieCart[id];
  }

  setCookie('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = (id: string) => {
  
  const cookieCart = getCookieCart();

  if(!cookieCart[id]) return;

  const itemsInCart = cookieCart[id] - 1;

  if(itemsInCart <= 0){
    delete cookieCart[id];
  }else {
    cookieCart[id] = itemsInCart;
  }
  
  setCookie('cart', JSON.stringify(cookieCart));
}