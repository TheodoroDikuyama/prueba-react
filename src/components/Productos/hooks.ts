import { useEffect } from "react";
import { getProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ProductosI } from "../../interfaces/interfaces";

export const ProductosHooks = () => {
  const productos: ProductosI[] = useSelector((state: any) => state?.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(20));
  }, [dispatch]);

  return { productos };
};
