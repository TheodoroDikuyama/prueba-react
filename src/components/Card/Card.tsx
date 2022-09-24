import * as React from "react";
import styles from "./Card.module.scss";
import { Productos } from "../../interfaces/interfaces";

export const Card: any = ({ title, image, price }: Productos) => {
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
