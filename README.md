# Diagnostic Test Results Management  

## Overview  

This is a simple yet powerful CRUD application designed to help medical labs manage diagnostic test results efficiently. Built with Next.js, TypeScript, Prisma ORM, and PostgreSQL, it offers a smooth and secure way to store, retrieve, update, and delete test results.  

## Key Features  

- Full CRUD functionality for managing test results  
- API endpoints for backend operations  
- User-friendly interface built with Next.js and Tailwind CSS  
- Input validation with Zod  
- Database hosted on Supabase  

## Tech Stack  

- Next.js (App Router)  
- TypeScript  
- Prisma ORM  
- PostgreSQL (Supabase)  
- Zod for input validation  
- React and Tailwind CSS for styling  

## Project Structure  

```
├───app
│   ├───api
│   │   ├───auth
│   │   └───tests
│   │       └───[id]
│   ├───new
│   └───[id]
│       └───edit
├───components
├───models
├───validators
└───middleware.ts
```

### Important Files  

```
.next
node_modules
prisma
public
src
.env
.gitignore
.eslint.config.mjs
next-env.d.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tsconfig.json
```

## Installation & Setup  

### Clone the Repository  

```sh
git clone https://github.com/Grld-Andy/Diagnostic-App.git
```

### Install Dependencies  

```sh
npm install
```

### Set Up Environment Variables  

Create a `.env` file in the project root and add the necessary credentials for Supabase and authentication:  

```
DATABASE_URL=""
DIRECT_URL=""
NODE_ENV=""
```

These values can be found in the Supabase dashboard.  

### Apply Database Migrations  

```sh
npx prisma migrate dev --name init
```

If you need to push schema changes:  

```sh
npx prisma db push
```

### Start the Development Server  

```sh
npm run dev
```

The application will be available at `http://localhost:3000`.  

## API Endpoints  

### Create a Test Result  

**POST** `/api/tests`  

**Body:**  
```json
{
  "patientName": "John Doe",
  "testType": "Blood Test",
  "result": "Positive",
  "testDate": "2025-03-09",
  "notes": "Urgent case"
}
```

### Get a Test Result by ID  

**GET** `/api/tests/:id`  

**Response:**  
```json
{
  "id": 1,
  "patientName": "John Doe",
  "testType": "Blood Test",
  "result": "Positive",
  "testDate": "2025-03-09",
  "notes": "Urgent case"
}
```

### Update a Test Result  

**PUT** `/api/tests/:id`  

**Body:**  
```json
{
  "id": 1,
  "patientName": "John Doe",
  "testType": "Blood Test",
  "result": "Negative",
  "testDate": "2025-03-09",
  "notes": "Urgent result"
}
```

### Delete a Test Result  

**DELETE** `/api/tests/:id`  

### List All Test Results  

**GET** `/api/tests`  

**Response:**  
```json
[
  {
    "id": 1,
    "patientName": "John Doe",
    "testType": "Blood Test",
    "result": "Positive",
    "testDate": "2025-03-09",
    "notes": "Urgent case"
  }
]
```

## Frontend Pages  

- Adding a new test result: `app/new/page.tsx`  
- Editing an existing test result: `app/[id]/edit/page.tsx`  
- Viewing a test result: `app/[id]/page.tsx`  

## Data Validation  

Zod is used to ensure data integrity before it is stored in the database.  

Example schema in `validators/testSchema.ts`:  

```ts
import { z } from "zod";

export const testSchema = z.object({
  patientName: z.string().min(1, "Patient name is required"),
  testType: z.string().min(1, "Test type is required"),
  result: z.string().min(1, "Result is required"),
  testDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  notes: z.string().optional().max(200, "Notes should not exceed 200 characters"),
});
```

## Conclusion  

This project provides a structured and efficient approach to managing diagnostic test results. By using Next.js, Prisma, and Supabase, it ensures secure data storage, validation, and authentication.