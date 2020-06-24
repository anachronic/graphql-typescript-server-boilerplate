import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import '../env.config'

async function main() {
  const port = process.env.EXPRESS_PORT

  const app = express()

  try {
    await createConnection()
    console.log('Database is fine')
  } catch (err) {
    console.error('Database is not fine')
    throw err
  }

  app.get('/', async (_req, res) => {
    res.send({
      status: 'ok',
    })
  })

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

  app.listen(port, () => console.log(`Listening on ${port}`))
}

main()
