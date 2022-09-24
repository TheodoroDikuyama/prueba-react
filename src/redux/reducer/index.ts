import { TYPES_SHOPPING } from "../actions/shopingAction";
import { TYPES_PRODUCT } from "../actions/productAction";

const initialState: any = {
  products: [],
  details: {},
  cart: [],
};

export function rootReducer(state = initialState, action: any): any {
  switch (action.type) {
    case TYPES_PRODUCT.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case TYPES_PRODUCT.GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case TYPES_SHOPPING.ADD_TO_CART:
      let newItem = state.products.find(
        (product: any) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item: any) => item.id === newItem?.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item: any) =>
              item.id === newItem?.id
                ? { ...item, quantity: item.quantity }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };

    case TYPES_SHOPPING.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case TYPES_SHOPPING.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find(
        (item: any) => item.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item: any) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item: any) => item.id !== action.payload),
          };
    }

    case TYPES_SHOPPING.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload),
      };
    }

    case TYPES_SHOPPING.ADD_ONE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.map((item: any) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
  }
}
