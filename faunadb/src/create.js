import {Client, query} from 'faunadb';

/**
 * Configure faunaDB Client with our secret.
 */
const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

export default async (req, res) => {
  const item = {data: req.body};

  try {
    const response = await client.query(
      query.Create(query.Collection('todos'), item)
    );

    res.send(response);
  } catch (error) {
    res.code(400).send(error);
  }
};