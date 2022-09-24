import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import { useEffect } from "react";
import { ProductosI } from "../../interfaces/interfaces";

export const Homehooks = () => {
  const productos: ProductosI[] = useSelector((state: any) => state?.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(4));
  }, [dispatch]);

  return { productos };
};
