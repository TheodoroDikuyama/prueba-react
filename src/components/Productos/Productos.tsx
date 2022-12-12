import styles from "./productos.module.scss";
import { Menu } from "../Menu/Menu";
import { Footer } from "../Footer/Footer";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import { ProductosHooks } from "./hooks";

export const Productos = () => {
  const { productos } = ProductosHooks();

  return (
    <div>
      <Menu />
      <div className={styles.container}>
        <h1 className={styles.titulo}>PRODUCTOS</h1>

        <div className={styles.cardGrid}>
          {productos?.map((p) => (
            <div key={p.id}>
              <Link to={`/productos/${p.id}`}>
                <Card
                  title={p.title.slice(0, 20)}
                  image={p.image}
                  price={p.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
