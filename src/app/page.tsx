import Link from "next/link";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 container mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Next.js 15, Clerk, Supabase, and Prisma - A Minimal SaaS Starter
      </h1>
      <p className="text-lg mb-8 text-center px-12">
        This app is a minimal example of a SaaS (Software as a Service) using Next.js 15, Clerk for authentication and user management, Supabase as the database, and Prisma as the ORM.
      </p>
      <Link href="/dashboard" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Go to Dashboard
      </Link>
    </div>
  )
}
