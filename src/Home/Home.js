import React, { useState } from 'react';
import './Home.css';

const PageTitle = () => {
    return (
        <>
            <h1>HOME</h1>
            <h2>Ryota</h2>
        </>
    );
};

const returnHome = () => {
    return (
        <PageTitle />
    );
};

export default returnHome;