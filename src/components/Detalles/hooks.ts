import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProducToCart, getDetails } from "../../redux/actions";

interface Productos {
  id?: number;
  title: string;
  price?: number;
  description?: string;
  category?: string;
  image: string;
  rating?: { rate: number; count: number };
}

export const DetallesHooks = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const productDetail: Productos = useSelector((state: any) => state?.details);

  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(addProducToCart(productDetail?.id));
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(getDetails(params.id));
  }, [dispatch, params.id]);

  return { addToCart, productDetail, open };
};
