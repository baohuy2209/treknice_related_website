import * as z from "zod";
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
    email: z.email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
    firstname: z.string().min(1, {
        message: "First name is required",
    }),
    lastname: z.string().min(1, {
        message: "Last name is required",
    }),
    username: z.string().min(1, {
        message: "Username is required",
    }),
});