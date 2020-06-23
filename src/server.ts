import 'reflect-metadata'
import express from 'express'
import dotenv from 'dotenv'
import { createConnection } from 'typeorm'

async function main() {
  dotenv.config({ path: '.prod.env' })
  dotenv.config({ path: '.development.env' })
  dotenv.config({ path: '.default.env' })

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
