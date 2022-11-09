import { ADD_TO_CART } from "../constants/cartConstants";

export const addToCart = (book, quantity) => async (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const bookToAdd = {
    ...book,
    bookQuantity: quantity
  };
  cart.push(bookToAdd);
  localStorage.setItem("cart", JSON.stringify(cart));
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  });
};
