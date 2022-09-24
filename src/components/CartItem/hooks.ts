import { useDispatch } from "react-redux";
import { addOneFromCart, removeFromCart } from "../../redux/actions";

export const QuantityHooks = () => {
  const dispatch = useDispatch();

  const deleteFromCart = (id: number, all?: boolean): void => {
    dispatch(removeFromCart(id, all));
  };

  const addOne = (id: number): void => {
    dispatch(addOneFromCart(id));
  };
  return { deleteFromCart, addOne };
};
