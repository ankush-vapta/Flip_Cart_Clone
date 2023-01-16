import axios from "axios"
import { GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../constant/constant"

const URL = "http://localhost:8000"
// @ts-ignore
export const getProduct = () => async (dispatch: any) => {

  try {
    // @ts-ignore
    let response = await axios.get(`${URL}/products`)
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: response.data
    })
  } catch (error: any) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.message
    })
  }
}