import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";
import styles from "./detalles.module.scss";
import { BsCartPlus } from "react-icons/bs";
import { Sidebar } from "../Sidebar/Sidebar";
import { DetallesHooks } from "./hooks";

export const Detalles: React.FC = () => {
  const { addToCart, productDetail, open } = DetallesHooks();
  return (
    <div>
      <Menu />
      <Sidebar open={open} onClose={addToCart} />
      <div className={styles.gridLayout}>
        <div className={styles.columna1}>
          <img src={productDetail?.image} alt={productDetail?.title} />
        </div>

        <div className={styles.columna2}>
          <h1>{productDetail?.title}</h1>
          <hr></hr>
          <p>• {productDetail?.category?.toUpperCase()}</p>
          <p>${productDetail?.price}</p>
          <div className={styles.descripcion}>
            <h1>Descripcion</h1>
            <p>{productDetail?.description}</p>
          </div>
          <div className={styles.carrito}>
            <button onClick={addToCart}>
              <BsCartPlus style={{ marginRight: "7px" }} size={20} />
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
