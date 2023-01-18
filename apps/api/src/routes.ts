import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import dayjs from 'dayjs'
import type { FastifyInstance } from 'fastify'

import { prisma } from './database/prisma'

export async function routes(app: FastifyInstance) {
  app.post('/habit', async (request) => {
    const schema = z.object({
      title: z.string(),
      weekDays: z.array(z.number().min(0).max(6))
    })

    const { title, weekDays } = await schema.parseAsync(request.body)

    const today = dayjs().startOf('day').toDate()

    const data = await prisma.habit.create({
      data: {
        id: randomUUID(),
        title: title,
        userId: '6fed555d-b0c9-43c8-ae67-4c7bb8a63ae2',
        createdAt: today,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              id: randomUUID(),
              weekDay
            }
          })
        }
      }
    })

    return data
  })

  app.get('/day', async (request) => {
    const schema = z.object({
      date: z.coerce.date()
    })

    const { date } = await schema.parseAsync(request.query)

    const parsedDate = dayjs(date).startOf('day')
    const weekDay = dayjs(date).get('day')

    const possibleHabits = await prisma.habit.findMany({
      where: {
        createdAt: {
          lte: date
        },
        weekDays: {
          some: {
            weekDay
          }
        }
      }
    })

    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate()
      },
      include: {
        dayHabit: true
      }
    })

    const completedHabits = day
      ? day.dayHabit.map((dayHabit) => {
          return dayHabit.habitId
        })
      : []

    return {
      possibleHabits,
      completedHabits
    }
  })
}
