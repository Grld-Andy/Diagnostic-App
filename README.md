# Diagnostic Test Results Management - Documentation

## Project Overview

This project is a simple CRUD application designed to help medical laboratories efficiently manage diagnostic test results. It is built using **Next.js**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.

## Features

- Create, Read, Update, and Delete (CRUD) diagnostic test results.
- API endpoints to manage test results.
- Frontend UI to interact with the data.
- Validation using **Zod**.
- Styled with **Tailwind CSS**.
- **Authentication and Authorization** using NextAuth.js.

## Technologies Used

- **Next.js (App Router)**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Zod (Validation)**
- **NextAuth.js (Authentication & Authorization)**
- **React & Tailwind CSS**

---

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

### **Main Directory Files**

```
.nex
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

---

## Installation & Setup

### **1. Clone the Repository**

```sh
git clone <repository_url>
cd <project_directory>
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Configure Environment Variables**

Create a `.env` file in the root directory and add the following:

```
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
NEXTAUTH_SECRET=<your-secret>
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=<your-github-client-id>
GITHUB_SECRET=<your-github-client-secret>
```

### **4. Setup the Database**

```sh
npx prisma migrate dev --name init
```

### **5. Run the Development Server**

```sh
npm run dev
```

---

## API Endpoints

### **1. Create a Diagnostic Test Result**

`POST /api/tests`

- **Body:**
  ```json
  {
    "patientName": "John Doe",
    "testType": "Blood Test",
    "result": "Positive",
    "testDate": "2025-03-09",
    "notes": "Urgent case"
  }
  ```

### **2. Get a Test Result by ID**

`GET /api/tests/:id`

- **Response:**
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

### **3. Update a Test Result**

`PUT /api/tests/:id`

- **Body:**
  ```json
  {
    "result": "Negative",
    "notes": "Updated result"
  }
  ```

### **4. Delete a Test Result**

`DELETE /api/tests/:id`

### **5. List All Test Results**

`GET /api/tests`

- **Response:**
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

---

## Frontend Implementation

### **Adding a New Test Result**

Located in `app/new/page.tsx`, this page contains a form to submit test results.

### **Editing an Existing Test Result**

Located in `app/[id]/edit/page.tsx`, this page allows updating test details.

### **Viewing Test Results**

Located in `app/[id]/page.tsx`, this page displays test details.

---

## Validation

We use **Zod** for input validation to ensure correct data structure.
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
  notes: z
    .string()
    .optional()
    .max(200, "Notes should not exceed 200 characters"),
});
```

---

## Notes

- Uses **Next.js App Router** structure.
- Follows **best practices** for API and frontend development.
- Uses **Prisma ORM** for database interactions.

### **Future Improvements**

- Add **role-based access control (RBAC)** for different user roles.
- Implement **pagination** for large datasets.
- Enhance **UI/UX** with more interactivity.

---

## Conclusion

This project provides a structured approach to managing diagnostic test results efficiently. It follows best practices in Next.js development and ensures data integrity using Prisma ORM and Zod validation.

For any issues or contributions, feel free to create a pull request or open an issue in the repository.
