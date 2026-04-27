-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "assignedAgentMemberId" TEXT;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_assignedAgentMemberId_fkey" FOREIGN KEY ("assignedAgentMemberId") REFERENCES "AgencyMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;
