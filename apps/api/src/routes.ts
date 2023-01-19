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

    const completedHabits = []
    if (day) {
      completedHabits.push(...day.dayHabit)
    }

    return {
      possibleHabits,
      completedHabits
    }
  })

  app.patch('/habit/:id/status', async (request) => {
    const schema = z.object({
      id: z.string().uuid()
    })

    const { id } = await schema.parseAsync(request.params)

    const today = dayjs().startOf('day').toDate()

    let day = await prisma.day.findUnique({
      where: {
        date: today
      }
    })
    if (!day) {
      day = await prisma.day.create({
        data: {
          id: randomUUID(),
          date: today
        }
      })
    }

    const dayHabit = await prisma.dayHabit.findUnique({
      where: {
        dayId_habitId: {
          dayId: day.id,
          habitId: id
        }
      }
    })
    if (dayHabit) {
      await prisma.dayHabit.delete({
        where: {
          dayId_habitId: {
            dayId: day.id,
            habitId: id
          }
        }
      })
    } else {
      await prisma.dayHabit.create({
        data: {
          dayId: day.id,
          habitId: id
        }
      })
    }

    return {
      dayHabit
    }
  })

  app.get('/summary', async (request) => {
    const summary = await prisma.$queryRaw`
      SELECT
        days.id,
        days.date,
        (SELECT 
          CAST(COUNT(*) as float)
            FROM day_habits
            WHERE day_id = days.id) as completed,
        (SELECT 
          CAST(COUNT(*) as float) 
            FROM habit_week_days 
            JOIN habits ON habits.id = habit_week_days.habit_id
            WHERE 
              week_day = CAST(strftime('%w', days.date / 1000, 'unixepoch') as int)
              AND habits.created_at <= days.date
        ) as amount
        FROM days
    `

    return {
      summary
    }
  })
}
