"use server" //using this the component will never bundle in client component
import { RegisterSchema } from "@/schemas"
import * as z from "zod"



export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "invalid fields!" }
    }

    return { success: "Email sent!" }
}