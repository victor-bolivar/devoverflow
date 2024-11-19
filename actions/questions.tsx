"use server"

import { createQuestion, ensureTagExists } from "@/lib/db"
import { AskAQuestionSchema } from "@/lib/validations"
import { redirect } from "next/navigation"
import { TTag } from "@/lib/types"

export async function postNewQuestion(data: AskAQuestionSchema) {

    data.tags.forEach(
        async (tagName: string) => {
            await ensureTagExists(tagName)
        }
    )
    createQuestion(data.title, data.content, data.tags)
    redirect('/')
}