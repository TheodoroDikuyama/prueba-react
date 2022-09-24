import { useEffect } from "react";
import { getProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

interface ProductosI {
  id?: number;
  title: string;
  price?: number;
  description?: string;
  category?: string;
  image: string;
  rating?: { rate: number; count: number };
}

export const ProductosHooks = () => {
  const productos: ProductosI[] = useSelector((state: any) => state?.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(20));
  }, [dispatch]);

  return { productos };
};
