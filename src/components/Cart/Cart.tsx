import { BsCartPlus } from "react-icons/bs";
import styles from "./Cart.module.scss";
import { CartItem } from "../CartItem/CartItem";
import { CustomHook } from "./hooks";
import { Divider } from "@mui/material";

export const Cart: any = () => {
  const { cart, checkOut } = CustomHook();
  return (
    <div className={styles.containerCart}>
      <div className={styles.header}>
        <h1>
          <BsCartPlus style={{ marginRight: "0.5vw" }} size={25} />
          Carrito de compra
        </h1>
      </div>
      <Divider light />

      <div>
        {cart?.map((c: any, index: number) => (
          <CartItem
            key={index}
            title={c.title}
            image={c.image}
            price={c.price}
            quantity={c.quantity}
            id={c.id}
          />
        ))}
      </div>

      <span className={styles.total}>
        Total:
        {cart
          ?.reduce(
            (acc: number, { price, quantity }: any) => acc + quantity * price,
            0
          )
          .toFixed(2)}
      </span>

      <button className={styles.buttonCheckOut} onClick={() => checkOut()}>
        Finalizar Compra
      </button>
    </div>
  );
};
