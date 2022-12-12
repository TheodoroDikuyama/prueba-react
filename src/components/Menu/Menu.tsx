import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";
import { MenuHooks } from "./hooks";

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

export const Menu = () => {
  const { menuToggleHandler, menuOpen, size } = MenuHooks();

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/" className={styles.header__content__logo}>
          E-COMMERCE
        </Link>
        <nav
          className={`${styles.header__content__nav} ${
            menuOpen && size.width < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            {items.map((i) => (
              <li key={i.id}>
                <Link onClick={menuToggleHandler} to={i.route}>
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};
