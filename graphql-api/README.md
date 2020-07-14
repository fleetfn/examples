# GraphQL API

This directory is a brief example of a [Fleet serverless function](https://fleetfn.com/function) with a GraphQL API.

_Live Example: https://examples.runfleet.io/graphql-api/?query={hello}_

## Deploy Your Own

If you are new here you can deploy your [serverless function](https://fleetfn.com/function) with Fleet:

- Install [Fleet CLI](https://fleetfn.com/docs/fleet-cli.html)
- [Create a new project in Fleet Console](https://console.fleetfn.com/)

```shell
$ fleet init graphql-api
```

Now just deploy. Enjoy 😉!

```shell
$ fleet
```

You can now do the test using the curl command or just calling in the browser.

```shell
$ curl -G 'https://xxxxxxxx-xxxxxxxxx.runfleet.io/query' --data-urlencode 'query={hello}'
```