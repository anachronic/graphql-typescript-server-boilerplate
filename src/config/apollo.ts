import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

export async function setupApollo(app: Express): Promise<void> {
  try {
    const schema = await buildSchema({
      resolvers: [`${__dirname}/resolvers/**/*.{ts,js}`],
    })

    const apolloServer = new ApolloServer({ schema })
    apolloServer.applyMiddleware({ app })
  } catch (err) {
    console.error('Failed to init apollo server')
    throw err
  }
}
