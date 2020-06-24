import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import resolvers from './resolvers'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
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

  app.listen(port, () => console.log(`Listening on ${port}`))
}

main()
