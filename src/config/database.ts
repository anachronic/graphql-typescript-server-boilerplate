import { createConnection, Connection } from 'typeorm'

export async function setupDatabase(): Promise<Connection> {
  try {
    const connection = await createConnection()
    console.log('Database is fine')
    return connection
  } catch (err) {
    console.error('Database is not fine')
    throw err
  }
}
