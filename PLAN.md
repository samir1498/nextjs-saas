# Minimal SaaS App – Project Plan

A minimal multi-tenant SaaS starter using:

- **Next.js 15** (App Router)
- **Clerk** for authentication + organization management
- **Supabase** (PostgreSQL) as database
- **Prisma** as ORM
- **Tailwind CSS** for styling
- **Vercel** for deployment

---

## ✅ Tech Stack

| Layer        | Tool                         |
|--------------|------------------------------|
| Frontend     | Next.js 15 + App Router      |
| Auth         | Clerk (user + org support)   |
| Backend      | Next.js API Routes           |
| Database     | Supabase PostgreSQL          |
| ORM          | Prisma                       |
| Styling      | Tailwind CSS                 |
| Hosting      | Vercel                       |

---

## 🧱 Features & Modules

### 1. 🔐 Authentication (Clerk)

- [x] Sign up / Sign in
- [ ] Organization selection or creation on login
- [ ] Extract user & organization from Clerk JWT
- [ ] Middleware for route protection

### 2. 🏢 Multi-Tenancy (Org-based)

- [ ] Each user belongs to a Clerk Organization
- [ ] `organizationId` stored on all tenant data (e.g. projects)
- [ ] Enforce data scoping per org in API routes
- [ ] Protect against cross-org access

### 3. 🗄 Database (Supabase + Prisma)

- [x] Supabase project + Postgres DB
- [x] Prisma schema setup
- [ ] Tables: User, Organization, Project
- [ ] Sync Clerk data into local DB
- [ ] Push schema to Supabase

### 4. 📊 Dashboard

- [ ] Protected `/dashboard` route
- [ ] Show user + org context
- [ ] List projects for the current org

### 5. 📁 Project Module (Example Domain)

- [ ] `Project` model: id, title, description, orgId
- [ ] `/api/projects` CRUD endpoints
- [ ] Project belongs to org (not user)
- [ ] UI form to create/update projects

---

## 📂 Directory Structure (Planned)

```text

src/
├── app/
│   ├── dashboard/         # Protected UI
│   ├── api/
│   │   └── projects/      # Multi-tenant REST API
│   └── layout.tsx         # ClerkProvider wrapper
├── components/            # UI components
├── lib/
│   ├── prisma.ts          # Prisma client
│   └── clerk.ts           # Clerk org/user utils
├── middleware.ts          # Clerk auth middleware
prisma/
└── schema.prisma

```

---

## 🔜 Next Steps

- [ ] Create Next.js project with TypeScript, App Router, Tailwind
- [ ] Install Clerk, Prisma, and configure `.env.local`
- [ ] Initialize Prisma schema with multi-tenant models
- [ ] Set up ClerkProvider and middleware
- [ ] Build and test protected `/dashboard`
- [ ] Implement `Project` API routes with org scoping

---

## 🧠 Notes

- **Organization scoping is enforced at the DB + API level**
- Use `orgId` from Clerk JWT in all API routes
- Extendable with Stripe billing per org
- May include cron/queues/analytics later
