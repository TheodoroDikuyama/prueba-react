import styles from "./CartItem.module.scss";
import { QuantityHooks } from "./hooks";
import { BsTrash } from "react-icons/bs";

export const CartItem = (props: any) => {
  const { title, image, price, quantity, id } = props;
  const { addOne, deleteFromCart } = QuantityHooks();
  return (
    <div className={styles.gridLayout}>
      <div className={styles.col1}>
        <img src={image} alt={title}></img>
      </div>

      <div className={styles.col2}>
        <h1>{title}</h1>
        <span>$ {price}</span>
        <button
          className={styles.buttonRemove}
          onClick={() => deleteFromCart(id, true)}
        >
          <BsTrash size={20} />
        </button>
        <div className={styles.containerButtons}>
          <button onClick={() => addOne(id)}>+</button>
          <input placeholder={quantity}></input>
          <button onClick={() => deleteFromCart(id)}>-</button>
        </div>
      </div>
    </div>
  );
};
