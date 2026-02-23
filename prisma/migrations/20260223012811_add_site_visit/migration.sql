-- CreateTable
CREATE TABLE "SiteVisit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ipHash" TEXT,
    "path" TEXT NOT NULL,
    "userAgent" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
