import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";
import styles from "./home.module.scss";
import banner from "../../assets/banner.jpg";
import { Card } from "../Card/Card";
import { Homehooks } from "./hooks";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { productos } = Homehooks();

  return (
    <div className={styles.container}>
      <div>
        <Menu />
      </div>

      <div className={styles.containerImg}>
        <img src={banner} alt="Banner" />
      </div>

      <div className={styles.cardGrid}>
        {productos?.map((p, index: number) => (
          <div key={index}>
            <Link to={`/productos/${p.id}`}>
              <Card title={p.title.slice(0, 20)} image={p.image} />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.aboutUs}>
        <h1> ¿Quienes somos? </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          provident accusamus fuga quia maiores iure inventore, vel, veritatis
          totam fugiat recusandae omnis culpa dicta minima amet odio commodi!
          Quaerat, voluptates?
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
