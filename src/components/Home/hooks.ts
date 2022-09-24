import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import { useEffect } from "react";

interface Productos {
  id?: number;
  title: string;
  price?: number;
  description?: string;
  category?: string;
  image: string;
  rating?: { rate: number; count: number };
}

export const Homehooks = () => {
  const productos: Productos[] = useSelector((state: any) => state?.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(4));
  }, [dispatch]);

  return { productos };
};
