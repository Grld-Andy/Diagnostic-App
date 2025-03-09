import {z} from 'zod'
import { createTestSchema } from '../validators/testValidationSchema';

export type Test = z.infer<typeof createTestSchema>;