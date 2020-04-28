# GraphQL API

This directory is a brief example of a [Fleet serverless function](https://fleetfn.com/function) with a GraphQL API.

## Deploy Your Own

If you are new here you can deploy your [serverless function](https://fleetfn.com/function) with Fleet:

- [Request early access](https://fleetfn.com/#request-early-access) to open your account
- Install [Fleet CLI](https://fleetfn.com/docs/fleet-cli.html)
- Create a new project

```shell
$ git clone git@github.com:fleetfn/examples.git && cd examples/graphql-api
```

Change your project id in the `fleet.json` file and implant it directly from your terminal.

```shell
$ fleet
```

You can now do the test using the curl command or just calling in the browser.

```shell
$ curl -G 'https://xxxxxxxx-xxxxxxxxx.runfleet.io/query' --data-urlencode 'query={hello}'
```