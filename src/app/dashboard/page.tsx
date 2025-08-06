import { SignedIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { syncClerkUserToDB } from "@/lib/clerk-db-sync"
import prisma from "@/lib/prisma"
import { CreateOrgForm } from "./create-org-form"

export default async function DashboardPage() {
  
  const { userId } = await auth()
  if (!userId) return null
  await syncClerkUserToDB(userId)

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      organizations: {
        include: {
          organization: true,
        },
      },
    },
  })

  return (
    <SignedIn>
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2">Welcome, {user?.email}</p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Your Organizations</h2>
          {user?.organizations.length === 0 ? (
            <p className="mt-2 text-gray-500">You are not a member of any organization.</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {user?.organizations.map(({ organization }) => (
                <li key={organization.id} className="p-4 border rounded-md">
                  {organization.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8">
          <CreateOrgForm />
        </div>
      </main>
    </SignedIn>
  )
}
