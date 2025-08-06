import prisma from "./prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function syncClerkUserToDB(userId: string) {
  const clerkUser = await currentUser();
  const email = clerkUser?.emailAddresses?.[0]?.emailAddress;
  if (!email) throw new Error("Missing user email");

  await prisma.user.upsert({
    where: { id: userId },
    update: { email },
    create: {
      id: userId,
      email,
    },
  });
}

