/*
  Warnings:

  - You are about to drop the `day_habits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `days` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `habit_week_days` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "day_habits";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "days";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "habit_week_days";
PRAGMA foreign_keys=on;
