import type { PrismaClient } from '@prisma/client'

export async function createDays(prisma: PrismaClient) {
  await Promise.all([
    prisma.day.deleteMany(),
    prisma.day.create({
      data: {
        id: '4cf48a8f-45d5-4e2d-9b6c-00a246bd6577',
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabit: {
          create: {
            habitId: 'fff3a822-29e5-469f-8057-a8fe65137e11'
          }
        }
      }
    }),
    prisma.day.create({
      data: {
        id: '00df9c7b-c7b1-4392-9e03-5d8f3f8e8848',
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabit: {
          create: {
            habitId: 'fff3a822-29e5-469f-8057-a8fe65137e11'
          }
        }
      }
    }),
    prisma.day.create({
      data: {
        id: 'a9d526db-7c5b-4dc1-a507-d074abe207f1',
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabit: {
          create: [
            {
              habitId: 'fff3a822-29e5-469f-8057-a8fe65137e11'
            },
            {
              habitId: '9df2c065-5f25-4ed0-ab2e-6033caf838eb'
            }
          ]
        }
      }
    })
  ])
}
