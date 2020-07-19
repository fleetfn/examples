import React from 'react';

export default ({navigate}) => (
    <div className="container main">
        <h1 className="title">404: Not Found <span aria-label="sorry" role="img">😞</span>!</h1>
        <button className="btn mt-12" onClick={() => navigate('/')}>Back to home</button>
    </div>
);