import fastify from 'fastify'
import cors from '@fastify/cors'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function bootstrap() {
  const app = fastify()

  await app.register(cors, {
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    origin: '*'
  })

  app.get('/', async (request, response) => {
    const data = await prisma.habit.findMany()

    return data
  })

  const url = await app.listen({ port: 7004, host: '0.0.0.0' })
  console.log(url)
}

bootstrap()
