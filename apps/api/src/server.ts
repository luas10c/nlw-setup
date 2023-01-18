import fastify from 'fastify'
import cors from '@fastify/cors'

import { routes } from './routes'

async function bootstrap() {
  const app = fastify()

  await app.register(cors, {
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    origin: '*'
  })

  await app.register(routes)

  const url = await app.listen({ port: 7004, host: '0.0.0.0' })
  console.log(url)
}

bootstrap()
