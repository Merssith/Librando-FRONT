import { SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD } from "../constants/orderConstants";

export const saveShippingAddress = data => async dispatch => {
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload: data,
    })
    localStorage.setItem("shippingAddress", JSON.stringify(data))
}

export const savePaymentMethod = data => async dispatch => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: data,
    })
    localStorage.setItem("paymentMethod", JSON.stringify(data))
}