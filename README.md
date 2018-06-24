<h1 align="center"><strong>Boilerplate for a Basic GraphQL Server</strong></h1>

<br />

![](https://imgur.com/lIi4YrZ.png)

<div align="center"><strong>🚀 Bootstrap your GraphQL server within seconds</strong></div>
<div align="center">Basic starter kit for a flexible GraphQL server for Node.js - based on best practices from the GraphQL community.</div>

## Features

- **Scalable GraphQL server:** The server uses [`apollo-server v2`](https://github.com/apollographql/apollo-server) which is based on new Apollo Server
- **GraphQL database:** Includes GraphQL database binding to [Prisma](https://www.prisma.io) (running on MySQL)
- **Tooling**: Out-of-the-box support for [GraphQL Playground](https://github.com/prisma/graphql-playground) & [query performance tracing](https://github.com/apollographql/apollo-tracing)
- **Extensible**: Simple and flexible [data model](./database/types.graphql) – easy to adjust and extend
- **No configuration overhead**: Preconfigured [`graphql-config`](https://github.com/prisma/graphql-config) setup

For a fully-fledged **GraphQL & Node.js tutorial**, visit [How to GraphQL](https://www.howtographql.com/graphql-js/0-introduction/). You can more learn about the idea behind GraphQL boilerplates [here](https://blog.graph.cool/graphql-boilerplates-graphql-create-how-to-setup-a-graphql-project-6428be2f3a5).

## Requirements

You need to have the [GraphQL CLI](https://github.com/graphql-cli/graphql-cli) installed to bootstrap your GraphQL server using `graphql init`, [Prisma](https://github.com/graphcool/prisma) to deploy and update database use `prisma deploy` and [Yarn](https://yarnpkg.com/lang/en/) to install npm packages:

```sh
npm install -g graphql-cli prisma yarn
```

## Getting started

```sh
# 1. Clone the project
git clone https://github.com/danilobrinu/prisma-apollo-starter.git

# 2. Navigate to the new project
cd prisma-apollo-starter

# 3. Install npm packages
yarn install

# 4. Start server (runs on http://localhost:4000) and open GraphQL Playground
yarn dev
```

> Note: Create new enviroment using example.env and update **`__PRISMA_ENDPOINT__`** if you don't have prisma endpoint run `prisma deploy` and use Demo Server to get prisma endpoint


![](https://imgur.com/hElq68i.png)

## Documentation

### Commands

* `yarn start` starts GraphQL server on http://localhost:4000
* `yarn debug` starts GraphQL server in debug mode on http://localhost:4000
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn dev` starts GraphQL server on http://localhost:4000 _and_ opens GraphQL Playground
* `prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `prisma deploy`)

> **Note**: We recommend that you're using `yarn dev` during development as it will give you access to the GraphQL API or your server (defined by the [application schema](./src/schema.graphql)) as well as to the Prisma API directly (defined by the [Prisma database schema](./src/generated/prisma.graphql)). If you're starting the server with `yarn start`, you'll only be able to access the API of the application schema.

### Project structure

![](https://imgur.com/95faUsa.png)

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>| 
| :--  | :--         |
| `├── example.env` | Use this file to configure your enviroment (copy/paste or rename to .env) |
| `├── .graphqlconfig.yml` | Configuration file based on [`graphql-config`](https://github.com/prisma/graphql-config) (e.g. used by GraphQL Playground).|
| `└── database/ `  | _Contains all files that are related to the Prisma database service_ |\
| `　　├── prisma.yml` | The root configuration file for your Prisma database service ([docs](https://www.prisma.io/docs/reference/prisma.yml/overview-and-example-foatho8aip)) |
| `　　└── enums.graphql` | Defines your enums for data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)) |
| `　　└── seed.graphql` | Defines your seed data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)) |
| `　　└── types.graphql` | Defines your types for data model (written in [GraphQL SDL](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)) |
| `└── src/ ` | _Contains the source files for your GraphQL server_ |
| `　　├── index.js` | The entry point for your GraphQL server |
| `　　├── schema.graphql` | The **application schema** defining the API exposed to client applications  |
| `　　├── resolvers/ ` | _Contains the implementation of the resolvers for the application schema_ |
| `　　└── generated/ ` | _Contains generated files_ |
| `　　　　└── prisma.grapghql` | The **Prisma database schema** defining the Prisma GraphQL API  |

## Contributing

The GraphQL boilerplates are maintained by the GraphQL community, with official support from the [Apollo](https://dev-blog.apollodata.com) & [Graphcool](https://blog.graph.cool/) teams.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, join the [`#graphql-boilerplate`](https://graphcool.slack.com/messages/graphql-boilerplate) channel on our [Slack](https://graphcool.slack.com/).
