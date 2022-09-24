import { TYPES } from "../actions/shopingAction";

const initialState: any = {
  porducts: [],
  details: {},
  cart: [],
};

export function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };

    case TYPES.ADD_TO_CART:
      let newItem = state.products.find(
        (product: any) => product.id === action.payload
      );
      console.log(newItem);

      let itemInCart = state.cart.find((item: any) => item.id === newItem.id);
      console.log(itemInCart);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item: any) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };

    case TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case TYPES.REMOVE_ONE_FROM_CART: {
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

    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.payload),
      };
    }

    case TYPES.ADD_ONE_FROM_CART: {
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
