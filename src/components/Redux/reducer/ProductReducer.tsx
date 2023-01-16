import { GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../constant/constant"

const products: any = [];

export const getProductReducer = (
    state: any = products,
    action: any
) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return { products: action.payload };
        case GET_PRODUCT_FAIL:
            return { products: action.payload }
        default:
            return state;
    }
}