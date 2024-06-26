-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastModified" DATETIME NOT NULL,
    "from" DATETIME,
    "to" DATETIME,
    "isImportant" BOOLEAN NOT NULL,
    "isCompleted" BOOLEAN NOT NULL
);
