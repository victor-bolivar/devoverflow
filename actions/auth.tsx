"use server"
import { createUserInDatabase } from "@/lib/db";

export const signupUser = async (data: any) => {
    const { username, email, password } = data;

    try {
        await createUserInDatabase(username, email, password)

    } catch (e) {
        console.log(e);
    }
}
