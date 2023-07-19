import React, { useState } from "react";
import styles from "./HomeStyles.jsx";

const PageTitle = () => {
  return (
    <>
      <h1>HOME</h1>
      <h2 style={styles.name}>Ryota?</h2>
    </>
  );
};

// これをコピーして、Quote は内容に応じて書きかえる
const Quote = () => {
  return (
    <div style={styles.quoteContainer}>
      <div style={{ ...styles.quoteText, ...{ fontFamily: "Noto Serif JP" } }}>
        <p>踏まれたこと、</p>
        <p>ありますか？</p>
      </div>
    </div>
  );
};

const Information = () => {
  return (
    <>
      <p>Put text about information here.</p>
    </>
  );
};

const returnHome = () => {
  return (
    <>
      <Quote />
      <Information />
    </>
  );
};

export default returnHome;
