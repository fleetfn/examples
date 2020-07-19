import {useAuth0} from '@auth0/auth0-react';
import React, {useState} from 'react';

const PRIVATE_ENDPOINT = process.env.REACT_APP_PRIVATE_ENDPOINT;

export default () => {
    const {
        getIdTokenClaims,
        isAuthenticated,
        isLoading,
        loginWithRedirect,
        logout,
        user,
    } = useAuth0();

    const [response, setResponse] = useState(null);

    const doFetchApi = async () => {
        let token;

        try {
            token = await getIdTokenClaims();

            if (token) {
                token = token.__raw
            }
        } catch (error) {
            console.log(error);
        }

        fetch(PRIVATE_ENDPOINT, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then(res => {
                if (res.statusCode === 200) {
                    return response.json();
                }

                throw res;
            })
            .then((data) => {
                setResponse(JSON.stringify(data.message));
            })
            .catch(async (e) => {
                setResponse(await e.text());
            });
    }

    return (
        <div className="container main">
            <h1 className="title">Welcome {user ? user.nickname : 'Guest'}!</h1>
            <p className="subtitle">{user ? 'Your email ' + user.name : 'Log in to get access to the API'}.</p>
            <div className="mt-12">
                {!isAuthenticated ? (
                    <>
                        <button className="btn" disabled={isLoading} onClick={() => loginWithRedirect()}>Log in</button>
                        <button className="btn btn-link" onClick={doFetchApi}>Try to call without authorization</button>
                    </>
                ) : (
                    <>
                        <button className="btn" disabled={isLoading} onClick={doFetchApi}>Call Protected API</button>
                        <button className="btn btn-link" onClick={() => logout()}>Log Out</button>
                    </>
                )}
            </div>
            {response && (
                <div className="code">
                    {response}
                </div>
            )}
        </div>
    );
};