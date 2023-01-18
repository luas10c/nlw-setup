import type { PrismaClient } from '@prisma/client'

export async function createUsers(prisma: PrismaClient) {
  await prisma.user.deleteMany()

  await prisma.user.create({
    data: {
      id: '6fed555d-b0c9-43c8-ae67-4c7bb8a63ae2',
      name: 'John Joe',
      email: 'john@example.com',
      password: null,
      birthday: '1997-08-10',
      gender: 1,
      createdAt: new Date('2023-01-10T00:00:00.000z')
    }
  })
}
