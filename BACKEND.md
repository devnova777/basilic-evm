# Ponder & Supabase Integration Guide

This document explains how **Ponder.sh** and **Supabase** work together, why **Supabase makes sense**, and the workflow for making changes to the backend.

## 🚀 **Why Use Supabase with Ponder?**

Even though **Ponder.sh** handles database migrations and provides a **GraphQL + RPC API** (including raw SQL queries), **Supabase adds value in key areas**:

✅ **Database Branching & Lifecycle Management**
- Supabase provides **isolated database environments** per branch.
- **Discouraged:** Using Supabase migrations – Ponder controls schema.

✅ **Vercel Integration**
- **Supabase’s Vercel integration automatically passes the correct database config** to deployed instances.
- No need to manually configure database connections.

✅ **Supabase SDK for Pragmatism**
- We use **a Supabase client injection pattern** to execute functions **both on the backend and frontend**.
- **Not using Supabase Auth with ABAC** in the starter, but it’s **totally doable** if required in your app.
- **This can be achieved using Ponder’s Drizzle schema** as well, but it requires more work in terms of lines of code since you need actions or API endpoints, whereas **Supabase works out of the box**.

✅ **Familiarity & Supabase SDK Features**
- Even though Ponder handles queries, **Supabase SDK still provides helpful utilities**.
- `pnpm supa:gen` generates **TypeScript types, Zod schemas, and updates Supabase SDK config.**
- We use the **@repo/supabase API functions**, following a **client injection pattern**, allowing seamless execution across frontend and backend.

### ❌ **What Not to Use Supabase For?**
- **❌ Supabase Migrations:** Ponder handles all migrations; Supabase migrations are **discouraged**.

👉 **Ponder offers GraphQL and RPC that even supports raw SQL, so feel free to use that as well.**


## ⚡ **Running the Backend**

Use the following script to **start the backend services in the correct order**:

```sh
pnpm backend
```

This script:
1. **Starts Supabase** (but does not apply migrations).
2. **Starts Ponder** and applies its own database migrations.

### 🛠 **After Making Schema Updates**
After modifying the schema, run the following in the `repo/supabase` package:

```sh
pnpm supa:gen
```

This will:
- Generate **TypeScript types** for Supabase tables.
- Generate **Zod validation schemas**.
- Update **Supabase SDK config**.


## 🔄 **PR Workflow with Ephemeral Instances**

When making **Ponder changes in a PR**, follow this process:

### 📌 **Step-by-Step Process**
1️⃣ **Create a Git branch** for your changes.
2️⃣ **Create a Supabase DB branch** to isolate the database environment.
3️⃣ **Create a PR**.
   - A **GitHub Action** will:
     - **Read the Supabase branch connection string**.
     - **Deploy an ephemeral Ponder instance to Google Cloud** with the correct database connection.
   - **Supabase’s Vercel integration** will:
     - **Automatically pass the correct Supabase config** to the Vercel instance.

### 🎯 **Why This Works Well?**
✅ **Each PR gets an isolated backend** → No conflicts between changes.
✅ **No manual database setup required** → Supabase branches handle this.
✅ **Fast iteration cycle** → Deployments happen automatically.


## 🔥 **Summary**
- **Ponder controls all database migrations** – **Supabase migrations are discouraged.**
- **Supabase is used for branching, Vercel integration, and SDK utilities.**
- **Supabase SDK is used pragmatically with an injection pattern to allow execution on both frontend & backend.**
- **The @repo/supabase API functions simplify execution across the stack.**
- **`pnpm backend` starts services in the correct order.**
- **`pnpm supa:gen` updates types, Zod schemas, and SDK config.**
- **PR workflow automatically deploys ephemeral Ponder instances on GCP with the correct Supabase DB branch.**
- **Ponder offers GraphQL and RPC that supports raw SQL – feel free to use that too.**

🚀 This setup ensures **fast, scalable, and modular backend development** while leveraging both **Ponder’s powerful indexing** and **Supabase’s lifecycle management & deployment integrations**.

