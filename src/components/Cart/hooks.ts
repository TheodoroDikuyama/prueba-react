import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/actions";
import swal from "sweetalert";

export const CustomHook = () => {
  //Productos en el carrito de compras
  const cart = useSelector((state: any) => state?.cart);

  const dispatch = useDispatch();

  //Finalizar compra
  const checkOut = (): void => {
    dispatch(clearCart());
    swal({
      text: "La compra fue un exito",
      icon: "success",
    });
  };
  return { cart, checkOut };
};
