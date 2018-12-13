const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const { Prisma } = require('prisma-binding');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('./src/schema.graphql');
const resolvers = require('./resolvers');
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

const server = new ApolloServer({
  schema,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml`
    }),
  }),
});

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
