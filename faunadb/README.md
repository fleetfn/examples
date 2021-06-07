# ToDo Service with FaunaDB

This directory is an example of using [FaunaDB](https://fauna.com/) with [Fleet serverless function](https://fleetfn.com/function).

## About this application

This is a small ToDo application just the backend service built in Fleet Serverless Function.

| Method  | Path | Description |
| ------------- | ------------- | ------------- |
| **DELETE**  | `/todo/:id`  | Delete an item from the list |
| **GET**  | `/todo/:id`  | Get an item from the list |
| **GET**  | `/todo`  | Get all items from the list |
| **POST**  | `/todo`  | Add a new item to the list |
| **PUT**  | `/todo/:id`  | Update a list item |

## Deploy Your Own

If you are new here you can deploy your [serverless function](https://fleetfn.com/function) with Fleet:

- Install [Fleet CLI](https://fleetfn.com/docs/fleet-cli.html)
- [Create a new project in Fleet Console](https://console.fleetfn.com/)
- Sign up for a FaunaDB account
- Create a database in FaunaDB Console
- Create a database access key

  Add the key as [secret](https://fleetfn.com/docs/secrets.html) in Fleet Console to use as environment variable with value `FAUNADB_SERVER_SECRET`.

- Set up your FaunaDB collection and indexes

  ```shell
  $ FAUNADB_SERVER_SECRET=YourFaunaDBSecretHere yarn run bootstrap
  ```

- Create a project from this example

  ```shell
  $ fleet init faunadb
  ```

- Now just deploy. Enjoy 😉!

  ```shell
  $ fleet
  ```