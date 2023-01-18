import { prisma } from '../prisma'

import { createUsers } from './create-users'
import { createHabits } from './create-habits'
import { createDays } from './create-days'

async function bootstrap() {
  try {
    await prisma.$connect()

    // Seeders
    await createUsers(prisma)
    await createHabits(prisma)
    await createDays(prisma)

    await prisma.$disconnect()
  } catch (error) {
    console.log(error)
    await prisma.$disconnect()
    process.exit(1)
  }
}

bootstrap()
