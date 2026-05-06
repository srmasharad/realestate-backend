/*
  Warnings:

  - The values [REJECTED] on the enum `OfferStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `advanceRent` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bondAmount` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leaseEndDate` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leaseMonths` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leaseStartDate` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weeklyRent` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentRequestStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED', 'OVERDUE');

-- AlterEnum
BEGIN;
CREATE TYPE "OfferStatus_new" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'EXPIRED');
ALTER TABLE "public"."Offer" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Offer" ALTER COLUMN "status" TYPE "OfferStatus_new" USING ("status"::text::"OfferStatus_new");
ALTER TYPE "OfferStatus" RENAME TO "OfferStatus_old";
ALTER TYPE "OfferStatus_new" RENAME TO "OfferStatus";
DROP TYPE "public"."OfferStatus_old";
ALTER TABLE "Offer" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "acceptedAt" TIMESTAMP(3),
ADD COLUMN     "advanceRent" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "bondAmount" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "declinedAt" TIMESTAMP(3),
ADD COLUMN     "leaseEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "leaseMonths" INTEGER NOT NULL,
ADD COLUMN     "leaseStartDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "weeklyRent" DECIMAL(12,2) NOT NULL;

-- CreateTable
CREATE TABLE "PaymentRequest" (
    "id" TEXT NOT NULL,
    "offerId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "applicantId" TEXT NOT NULL,
    "bondAmount" DECIMAL(12,2) NOT NULL,
    "advanceRent" DECIMAL(12,2) NOT NULL,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "status" "PaymentRequestStatus" NOT NULL DEFAULT 'PENDING',
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentRequest_offerId_key" ON "PaymentRequest"("offerId");

-- AddForeignKey
ALTER TABLE "PaymentRequest" ADD CONSTRAINT "PaymentRequest_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "Offer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentRequest" ADD CONSTRAINT "PaymentRequest_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentRequest" ADD CONSTRAINT "PaymentRequest_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
