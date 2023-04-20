import { fetchCart, fetchUser } from "../utils/fetchLocalStorage";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  modalShow: false,
  cartItems: cartInfo,
};
