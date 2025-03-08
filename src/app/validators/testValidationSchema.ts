import { z } from "zod";

export const createTestSchema = z.object({
  id: z.string().optional(),
  patientName: z.string().min(1, "Title is required"),
  testType: z.string().min(1, "Test Type is required"),
  result: z.string().min(1, "Result is required"),
  testDate: z.string(),
  notes: z.string().optional(),
});
