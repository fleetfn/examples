# API Auth Protected with Auth0 and React

This directory is a brief example of a [Fleet serverless function](https://fleetfn.com/function) with API protected with [Auth0](https://auth0.com/) and the frontend implementing with [React](https://reactjs.org).

_Live Example: https://auth0.runfleet.io_

## Use cases

- Protect API routes for authorized users
- Rate limiting APIs

## Deploy Your Own

If you are new here you can deploy your [serverless function](https://fleetfn.com/function) with Fleet:

- Install [Fleet CLI](https://fleetfn.com/docs/fleet-cli.html)
- [Create a new project in Fleet Console](https://console.fleetfn.com/)

```shell
$ fleet init api-auth-protected-with-auth0-react
```

### Setup

1. `yarn` to install dependencies
2. Setup an auth0 application.
3. Get your `Client ID` (under `applications->YOUR_APP_NAME->settings`) and add `AUTH0_CLIENT_ID` in a `fleet.json` and create a new file called `.env` for React App (based on the example `.env.example`).
4. Get your `public key` (under `applications->YOUR_APP_NAME->settings->Show Advanced Settings->Certificates`). Download it as PEM format and save it, run `awk 'NF {sub(/\r/, ""; printf "%s\\n",$0;}'  dev-ca.pem` to ca inline format and copy to add to env (`AUTH0_CLIENT_PUBLIC_KEY`) in `fleet.json`.
5. Add the asset url to `ASSET_URL` env in `fleet.json`. We use [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces/) with CDN enabled to make the frontend build assets available.
6. Deploy the services with `fleet deploy` and get the endpoints and add in `REACT_APP_PRIVATE_ENDPOINT` in the `.env` file.
7. Run `yarn build` and deploy the `build` folder on your S3 or host of choice and configure `Allowed Callback URLs`, `Allowed Web Origins`, `Allowed Origins (CORS)`, and `Application Login URI` in your auth0 client on the [auth0 dashboard](https://manage.auth0.com/). We use `https://auth0.runfleet.io` for our demo.

### Protected Function API

The API uses JSON Web Token to verify the token, use this to protect your APIs so that only authorized users to have access.

### Frontend

Frontend is written in [React](https://reactjs.org/) with [Auth0 React SDK](https://auth0.com/docs/libraries/auth0-react).

- Deploying at [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces/) on CDN
- Server side rendering with Fleet Serverless Function