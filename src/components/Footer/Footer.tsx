import styles from "./footer.module.scss";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className={styles.containerFooter}>
      <h1> SÍGUENOS </h1>
      <div className={styles.redesSociales}>
        <a href="https://www.facebook.com/">
          <BsFacebook color="#1877F2" size={25} />
        </a>

        <a href="https://www.instagram.com/">
          <BsInstagram color="#E4405F" size={25} />
        </a>

        <a href="https://twitter.com/">
          <BsTwitter color="#1DA1F2" size={25} />
        </a>
      </div>
    </div>
  );
};
