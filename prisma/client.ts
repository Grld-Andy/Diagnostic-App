import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
let prisma: PrismaClient;

console.log("node", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  console.log("here");
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    console.log("sdfgwerw");
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
