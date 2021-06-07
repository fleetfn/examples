import {Client, query} from 'faunadb';

/**
 * Configure faunaDB Client with our secret.
 */
const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

const getId = (path) => path.split('/')[2];

export default async (req, res) => {
  const id = getId(req.url);

  try {
    const response = await client.query(
      query.Get(query.Ref(query.Collection('todos'), id))
    );

    res.send(response);
  } catch (error) {
    res.code(400).send(error);
  }
};