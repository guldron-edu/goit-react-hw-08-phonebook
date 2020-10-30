import React from "react";

import styles from "./Header.module.css";
import { CSSTransition } from "react-transition-group";

import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames={styles}
        unmountOnExit
      >
        <a href="/" className={styles.link}>
          Phonebook
        </a>
      </CSSTransition>
      <Nav />
    </header>
  );
};

export default Header;
