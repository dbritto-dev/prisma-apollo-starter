const { ApolloServer, gql } = require("apollo-server")
const { Prisma } = require("prisma-binding")
const { importSchema } = require("graphql-import")
const resolvers = require("./resolvers")

const server = new ApolloServer({
  typeDefs: importSchema("./src/schema.graphql"),
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "./src/generated/prisma.graphql", // the auto-generated GraphQL schema of the Prisma API
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml`
    }),
  }),
})

server.listen().then(({ url }) => `🚀  Server ready at ${url}`)
