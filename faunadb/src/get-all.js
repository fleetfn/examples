import {Client, query} from 'faunadb';

/**
 * Configure faunaDB Client with our secret.
 */
const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

export default async (req, res) => {
  try {
    const {data} = await client.query(
      query.Paginate(query.Match(query.Index('all_todos')))
    );

    const getAllTodoDataQuery = data.map((ref) => query.Get(ref));

    const response = await client.query(getAllTodoDataQuery);

    res.send(response);
  } catch (error) {
    res.code(400).send(error);
  }
};