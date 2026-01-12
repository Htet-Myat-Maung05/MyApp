import { z } from "zod";

export const userSchema = z.object({
    firstName: z.string().min(2,{message: "first Name must be at least 2 charaters"}).max(50,{message: "first name must be less than 50 charaters"}),

    lastName: z.string().min(2,{message: "first Name must be at least 2 charaters"}).max(50,{message: "first name must be less than 50 charaters"}),

    email: z.string().email({message: "invalid email address"}),

    phone: z.string().min(8, {message: "Phone number must be at least 6 digits"}).regex(/^(?:\+?959|959-)?(?:[0-9]{9-11})$/,{message: "wrong number"}),

    password: z.string().min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' }),

    confirmPassword: z.string()
    .min(8, { message: 'Confirm password must be at least 8 characters' }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export type UserFormData = z.infer<typeof userSchema>;