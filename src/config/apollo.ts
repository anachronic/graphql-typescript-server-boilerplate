import { ApolloServer } from 'apollo-server-express'
import { GraphQLRequestContext } from 'apollo-server-types'
import { Express } from 'express'
import { buildSchema } from 'type-graphql'

const queryLoggingPlugin = {
  requestDidStart(requestContext: GraphQLRequestContext) {
    console.log('Request started! Query:\n' + requestContext.request.query)
  },
}

export async function setupApollo(app: Express): Promise<void> {
  try {
    const schema = await buildSchema({
      resolvers: [`${__dirname}/../resolvers/**/*.{ts,js}`],
    })

    const apolloServer = new ApolloServer({
      schema,
      plugins: [queryLoggingPlugin],
    })
    apolloServer.applyMiddleware({ app })
  } catch (err) {
    console.error('Failed to init apollo server')
    throw err
  }
}
