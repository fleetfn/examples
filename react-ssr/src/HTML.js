import React from 'react';

export default ({children, title}) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="theme-color" content="#000000" />
      <title>{title}</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      {children}
    </body>
  </html>
);