/*
  Warnings:

  - Added the required column `visibility` to the `UserMedia` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MediaVisibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "UserMedia" ADD COLUMN     "visibility" "MediaVisibility" NOT NULL;
