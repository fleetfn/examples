import React from 'react';

export default ({children}) => (
    <div className="app">
        <header className="container header">
            <div className="logo-auth0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 216.56">
                    <path d="M189 66.92L167.22 0H96.85l21.75 66.92zM96.85 0H26.49L4.75 66.92h70.36zM4.75 66.92zm0 0A96.83 96.83 0 0 0 39.93 175.2l21.74-66.92zm184.21 0L132 108.28l21.75 66.92A96.85 96.85 0 0 0 189 66.92zM39.93 175.2l56.92 41.36 56.93-41.36-56.93-41.36z" fill="#eb5424"></path>
                </svg>
                Fleet Serverless authentication with Auth0
            </div>
        </header>
        {children}
        <div className="footer">
            <a
                className="link-fleet"
                href="https://fleetfn.com?utm_source=auth0-custom-auth&utm_medium=template&utm_campaign=create-fleet-with-auth0"
                rel="noopener noreferrer"
                target="_blank"
            >
                Powered by 
                <img className="logo-fleet" src="https://fleetfn.com//images/logo.svg" alt="fleetfn.com" />
            </a>
        </div>
    </div>
);