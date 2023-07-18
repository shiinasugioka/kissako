import React from "react";
import styles from "./NavbarStyles";

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <a href="/" style={styles.navbarLogo}>
        Logo
      </a>
      <ul style={styles.navbarGroup}>
        <li style={styles.navbarItem}>
          <a href="/" style={styles.navbarLink}>
            ホーム
          </a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/about" style={styles.navbarLink}>
            当サロンについて
          </a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/services" style={styles.navbarLink}>
            サービス
          </a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/contact" style={styles.navbarLink}>
            ご予約・お問い合わせ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
