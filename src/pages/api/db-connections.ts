import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@pscj/services/prisma';

type SelectDbConnections = Array<{ count: number }>;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const [{ count }]: SelectDbConnections = await prisma.$queryRaw`SELECT count(distinct(numbackends)) FROM pg_stat_database;`;

  res.status(200).json({ dbConnections: count });
};
