import React, { useState } from 'react';

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
        {PageTitle}
    );
};

export default returnHome;