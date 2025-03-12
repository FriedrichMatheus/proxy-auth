-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "data_used" DECIMAL NOT NULL DEFAULT 0.0,
    "data_limit" DECIMAL NOT NULL DEFAULT 0.0
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
