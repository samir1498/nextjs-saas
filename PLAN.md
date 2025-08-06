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
- [x] Organization creation after login
- [x] Extract user from Clerk JWT
- [x] Middleware for route protection

### 2. 🏢 Multi-Tenancy (Org-based)

- [x] Users can belong to multiple organizations
- [x] `organizationId` stored on all tenant data (e.g. projects)
- [ ] Enforce data scoping per org in API routes
- [ ] Protect against cross-org access

### 3. 🗄 Database (Supabase + Prisma)

- [x] Supabase project + Postgres DB
- [x] Prisma schema setup with many-to-many relationship between Users and Orgs
- [x] Tables: User, Organization, Project, OrganizationsOnUsers
- [x] Sync Clerk user data into local DB (on first visit to dashboard)
- [x] Push schema to Supabase

### 4. 📊 Dashboard

- [x] Protected `/dashboard` route
- [x] Show user context
- [x] List organizations for the current user
- [x] UI form to create organizations
- [ ] List projects for the current org

### 5. 📁 Project Module (Example Domain)

- [x] `Project` model: id, title, description, orgId
- [ ] `/api/projects` CRUD endpoints
- [x] Project belongs to org (not user)
- [ ] UI form to create/update projects

---

## 📂 Directory Structure (Actual)

```text
src/
├── app/
│   ├── dashboard/         # Protected UI
│   │   ├── page.tsx
│   │   ├── actions.ts
│   │   └── create-org-form.tsx
│   ├── layout.tsx         # ClerkProvider wrapper
│   └── globals.css
├── lib/
│   ├── clerk-db-sync.ts   # Syncs Clerk user to local DB
│   └── prisma.ts          # Prisma client
├── middleware.ts          # Clerk auth middleware
prisma/
└── schema.prisma
```

---

## 🔜 Next Steps

- [ ] Implement `Project` API routes with org scoping
- [ ] Build UI for creating and listing projects on the dashboard
- [ ] Show full user and organization context in the dashboard

---

## 🧠 Notes

- **Organization scoping is enforced at the DB + API level**
- Use `orgId` from Clerk JWT in all API routes
- Extendable with Stripe billing per org
- May include cron/queues/analytics later
