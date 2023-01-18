import type { PrismaClient } from '@prisma/client'

export async function createHabits(prisma: PrismaClient) {
  await prisma.habit.deleteMany()

  await prisma.habit.create({
    data: {
      id: 'fff3a822-29e5-469f-8057-a8fe65137e11',
      title: 'Beber 2L de água',
      userId: '6fed555d-b0c9-43c8-ae67-4c7bb8a63ae2',
      createdAt: new Date('2023-01-10T00:00:00.000z'),
      weekDays: {
        create: [
          {
            id: '60d17cb6-da91-4076-a0e5-058b737772ad',
            weekDay: 1
          },
          {
            id: 'ef1920bd-6f7b-4bdb-ae5a-372c60dc60af',
            weekDay: 2
          },
          {
            id: '52b079a1-ad3d-43ff-b517-b76f8c2e0588',
            weekDay: 3
          }
        ]
      }
    }
  })

  await prisma.habit.create({
    data: {
      id: '9df2c065-5f25-4ed0-ab2e-6033caf838eb',
      title: 'Exercitar',
      userId: '6fed555d-b0c9-43c8-ae67-4c7bb8a63ae2',
      createdAt: new Date('2023-01-10T00:00:00.000z'),
      weekDays: {
        create: [
          {
            id: 'ce621bd8-4cab-45c3-a5de-9dfe801e881e',
            weekDay: 3
          },
          {
            id: '392d8d68-9760-4dbf-b9eb-1e11163f1ed2',
            weekDay: 4
          },
          {
            id: 'f9bae832-5d90-41ad-af43-7da153cfd769',
            weekDay: 5
          }
        ]
      }
    }
  })

  await prisma.habit.create({
    data: {
      id: '7409fef7-78e5-4b4b-93e2-c6aaf98ef0f8',
      title: 'Dormir 8h',
      userId: '6fed555d-b0c9-43c8-ae67-4c7bb8a63ae2',
      createdAt: new Date('2023-01-10T00:00:00.000z'),
      weekDays: {
        create: [
          {
            id: '7b86d9da-1c9f-48db-87e9-8f736eeac1d6',
            weekDay: 1
          },
          {
            id: '926d315b-9ac3-407a-83fd-6abb619403c7',
            weekDay: 2
          },
          {
            id: 'f3f59765-ca98-4c8e-9e0f-f1a81bc747a8',
            weekDay: 3
          },
          {
            id: '0821e05f-f9de-4a4c-b3f8-de5acb000ca1',
            weekDay: 4
          },
          {
            id: 'cf0b97da-ee76-46b3-a8ea-0bcd4988b5c7',
            weekDay: 5
          }
        ]
      }
    }
  })
}
