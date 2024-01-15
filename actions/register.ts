"use server" //using this the component will never bundle in client component
import { RegisterSchema } from "@/schemas"
import * as z from "zod"
import bcrpyt from "bcrypt"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"

export const register = async (values:z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success) {
        return { error: "invalid fields!" }
    }

    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrpyt.hash(password, 10)

    const existingUser = await getUserByEmail(email);
    
    if(existingUser) {
        return { error: "User already exists!" }
    }

    const user = await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    });

    // TODO: Send verification token email


    return { success: "User created!" }
}