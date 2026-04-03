import 'dotenv/config';

import * as bcrypt from 'bcrypt';

import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient, UserRole } from '../../src/generated/prisma';

async function main() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL is not defined');
  }

  const adapter = new PrismaPg({ connectionString });
  const prisma = new PrismaClient({ adapter });

  const passwordHash = await bcrypt.hash('12345678', 10);

  const users = [
    {
      email: 'admin@example.com',
      fullName: 'System Admin',
      role: UserRole.ADMIN,
    },
    {
      email: 'user@example.com',
      fullName: 'Normal User',
      role: UserRole.USER,
    },
    {
      email: 'agent@example.com',
      fullName: 'Agent User',
      role: UserRole.AGENT,
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        fullName: user.fullName,
        role: user.role,
        passwordHash,
        isActive: true,
      },
      create: {
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        passwordHash,
        isActive: true,
      },
    });
  }

  console.log('Seed completed successfully');
  await prisma.$disconnect();
}

main().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
