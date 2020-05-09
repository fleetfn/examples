import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/App';
import HTML from './src/HTML';

export default (req, res) => {
    const data = ReactDOMServer.renderToString(
        <HTML title="Fleet Example React SSR">
            <App />
        </HTML>
    );

    res.type('text/html').send(data);
};