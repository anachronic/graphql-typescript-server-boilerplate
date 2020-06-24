import express from 'express'
import 'reflect-metadata'
import { setupApollo } from './config/apollo'
import { setupDatabase } from './config/database'

async function main() {
  const port = process.env.EXPRESS_PORT

  const app = express()

  await setupDatabase()
  await setupApollo(app)

  app.get('/', async (_req, res) => {
    res.send({
      status: 'ok',
    })
  })

  app.listen(port, () => console.log(`Listening on ${port}`))
}

main()
