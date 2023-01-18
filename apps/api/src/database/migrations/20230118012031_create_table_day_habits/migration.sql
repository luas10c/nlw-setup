-- CreateTable
CREATE TABLE "day_habits" (
    "day_id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL,

    PRIMARY KEY ("day_id", "habit_id"),
    CONSTRAINT "day_habits_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "day_habits_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "habits" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
