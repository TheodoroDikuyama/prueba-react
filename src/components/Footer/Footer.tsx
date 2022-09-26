import styles from "./Footer.module.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export const Footer: React.FC = () => {
  return (
    <div className={styles.containerFooter}>
      <h1> SÍGUENOS </h1>
      <div className={styles.redesSociales}>
        <a href="https://www.facebook.com/">
          <BsFacebook color="#ffffff" size={25} />
        </a>

        <a href="https://www.instagram.com/">
          <BsInstagram color="#ffffff" size={25} />
        </a>

        <a href="https://twitter.com/">
          <BsTwitter color="#ffffff" size={25} />
        </a>
      </div>
    </div>
  );
};
