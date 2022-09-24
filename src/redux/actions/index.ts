import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { TYPES } from "./shopingAction";

const API_URL = "https://fakestoreapi.com";

export const getProducts: any =
  (limit: number) => async (dispatch: Dispatch<any>) => {
    try {
      const productos: AxiosResponse = await axios.get(
        `${API_URL}/products?limit=${limit}`
      );

      return dispatch({
        type: "GET_PRODUCTS",
        payload: productos.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getDetails: any =
  (id: number) => async (dispatch: Dispatch<any>) => {
    try {
      const detailProduct: AxiosResponse = await axios.get(
        `${API_URL}/products/${id}`
      );
      return dispatch({
        type: "GET_DETAILS",
        payload: detailProduct.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getCart: any = () => (dispatch: Dispatch<any>) => {
  return dispatch({
    type: TYPES.GET_CART,
  });
};

export const addProducToCart: any =
  (id: number) => (dispatch: Dispatch<any>) => {
    return dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    });
  };

export const clearCart: any = () => (dispatch: Dispatch<any>) => {
  return dispatch({
    type: TYPES.CLEAR_CART,
  });
};

export const removeFromCart: any =
  (id: number, all?: boolean) => (dispatch: Dispatch<any>) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

export const addOneFromCart: any =
  (id: number) => (dispatch: Dispatch<any>) => {
    return dispatch({
      type: TYPES.ADD_ONE_FROM_CART,
      payload: id,
    });
  };
