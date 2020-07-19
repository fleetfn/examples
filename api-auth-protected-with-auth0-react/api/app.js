import {extname} from 'path';
import {URL} from 'url';
import fetch from 'node-fetch';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const ASSET_URL = process.env.ASSET_URL;

const contentType = {
    '.js': 'application/javascript',
    '.css': 'text/css; charset=utf-8'
};

const replaceHtml = async (data) => {
    const html = await fetch(ASSET_URL + '/index.html').then(res => res.text());
    return html.replace('<div id="root"></div>', `<div id="root">${data}</div>`);
}

export default async (req, res) => {
    const url = new URL(req.url, `https://${req.headers.host}`);

    // We do the server-side rendering of our application when
    // `url` is the main one.
    if (url.pathname === '/') {
        const data = ReactDOMServer.renderToString(<App />);

        res
            .type('text/html')
            .send(await replaceHtml(data));
    } else {
        try {
            const type = extname(url.pathname);

            // Redirect the call to an S3 bucket, use the S3 bucket available
            // through a CDN to suppress the use of authentication
            // or rate limits.
            res
                .type(contentType[type])
                .send(
                    await fetch(ASSET_URL + url.pathname)
                        .then(res => {
                            if (!res.ok) {
                                throw res;
                            }

                            switch (type) {
                                case '.css':
                                case '.js':
                                    return res.text();
                                default:
                                    return res;
                            }
                        })
                );
        } catch (error) {
            const data = ReactDOMServer.renderToString(<App initialLocation="404" />);

            res.status(404)
                .type('text/html')
                .send(await replaceHtml(data));
        }
    }
};