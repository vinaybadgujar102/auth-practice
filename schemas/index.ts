import * as z from "zod";

// tip: dont limit min lenght of password field on login
export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Password should be at least 6 characters"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })
});