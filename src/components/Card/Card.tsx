import * as React from "react";
import styles from "./Card.module.scss";
import { ProductosI } from "../../interfaces/interfaces";

export const Card: React.FC<ProductosI> = ({ title, image, price }) => {
  return (
    <div className={styles.containerCard}>
      <h1>{title}</h1>
      {price ? <span>${price}</span> : <></>}

      <div className={styles.containerImg}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};
