import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, 'Please input your email').email('Incorrect Email'),
    password: z.string().min(1, 'need to input password').min(8, 'Password must be at least 8 charaters')
})

export type LoginFormData = z.infer<typeof loginSchema>;