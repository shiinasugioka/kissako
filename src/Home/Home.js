import React, { useState } from 'react';
import styles from './Home.css';

const PageTitle = () => {
    return (
        <>
            <h1>HOME</h1>
            <h2 style={styles.name}>
                Ryota?
            </h2>
        </>
    );
};

// これをコピーして、Quote は内容に応じて書きかえる
const Quote = () => {
    return (
        <>
            <p>
                Put text abut the quote here.
            </p>
        </>
    );
};

const Information = () => {
    return (
        <>
            <p>
                Put text about information here.
            </p>
        </>
    );
};

const returnHome = () => {
    return (
        <>
            <PageTitle />
            <Quote />
            <Information />
        </>
    );
};

export default returnHome;