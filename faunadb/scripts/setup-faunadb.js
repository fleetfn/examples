const {Client, query} = require('faunadb');

console.log('Creating your FaunaDB Database...');

if (!process.env.FAUNADB_SERVER_SECRET) {
  console.log('Required FAUNADB_SERVER_SECRET enviroment variable not found.');
  process.exit(1);
} else {
  createFaunaDB(process.env.FAUNADB_SERVER_SECRET)
}

async function createFaunaDB(secret) {
  console.log('Create the fauna database schema!');

  const client = new Client({secret});

  try {
    await client.query(query.CreateCollection({name: 'todos'}));
    await client.query(query.CreateIndex({name: 'all_todos', source: query.Collection('todos')}));

    console.log('Fauna Database schema has been created')
  } catch (error) {
    console.log(error)
    if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
      console.log('Fauna already setup! Good to go');
    }
  }
}