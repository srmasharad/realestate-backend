-- CreateEnum
CREATE TYPE "TenancyStatus" AS ENUM ('ACTIVE', 'ENDED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Tenancy" (
    "id" TEXT NOT NULL,
    "leaseAgreementId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "agencyId" TEXT NOT NULL,
    "status" "TenancyStatus" NOT NULL DEFAULT 'ACTIVE',
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "weeklyRent" DECIMAL(12,2) NOT NULL,
    "bondAmount" DECIMAL(12,2) NOT NULL,
    "advanceRent" DECIMAL(12,2) NOT NULL,
    "endedAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenancy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenancy_leaseAgreementId_key" ON "Tenancy"("leaseAgreementId");

-- AddForeignKey
ALTER TABLE "Tenancy" ADD CONSTRAINT "Tenancy_leaseAgreementId_fkey" FOREIGN KEY ("leaseAgreementId") REFERENCES "LeaseAgreement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tenancy" ADD CONSTRAINT "Tenancy_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tenancy" ADD CONSTRAINT "Tenancy_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tenancy" ADD CONSTRAINT "Tenancy_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;
