import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                resolve() {
                    return 'world';
                },
            },
        },
    }),
});

export default (req, res) => graphql(schema, req.query.query)
    .then(
        result => res.send(JSON.stringify(result)),
        err => res.send(err),
    );