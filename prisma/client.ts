import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
let prisma: PrismaClient;

prisma = new PrismaClient();

export default prisma;
