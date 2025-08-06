import prisma from "./prisma";
import { currentUser, auth } from "@clerk/nextjs/server";

export async function syncClerkUserToDB() {
  const { userId } = await auth();
  if (!userId) return;

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

