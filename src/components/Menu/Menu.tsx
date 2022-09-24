import styles from "./menu.module.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

const items: { id: number; title: string; route: string }[] = [
  {
    id: 1,
    title: "HOME",
    route: "/",
  },
  {
    id: 2,
    title: "PRODUCTOS",
    route: "/productos",
  },
];

export const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <FaShippingFast size={15} />
        <h1>ENVIOS GRATIS</h1>
      </header>
      <nav>
        <div className={styles.title}>
          <BsShop size={20} />
          <h1>APLICACION DE COMPRAS</h1>
        </div>
        <ul className={styles.items}>
          {items.map((i) => (
            <li key={i.id}>
              <Link to={i.route}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
