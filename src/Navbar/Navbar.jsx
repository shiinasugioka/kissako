import React from "react";
import styles from "./NavbarStyles";

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <a href="/" style={styles.navbarLogo}>
          Logo
        </a>
      </div>
      <div style={styles.groupContainer}>
        <ul
          style={{
            ...styles.navbarGroup,
            ...{ fontFamily: "Noto Serif JP" },
          }}
        >
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
      </div>
    </nav>
  );
};

export default NavBar;
