import { z } from 'zod'
import {
    MIN_TAGS_PER_QUESTION,
    MAX_TAGS_PER_QUESTION
} from '@/constants'

export const AskAQuestionSchema = z.object({
    title: z
        .string()
        .min(5, "Minimun 5 characters")
        .max(30, "Maximun 30 characters"),
    content: z
        .string()
        .min(10, "Minimun 10 characters")
        .max(1000, "Maximun 1000 characters"),
    tags: z
        .string()
        .array()
        .min(MIN_TAGS_PER_QUESTION, `Must contain at least ${MIN_TAGS_PER_QUESTION} ${MIN_TAGS_PER_QUESTION > 1 ? 'tags' : 'tag'}`)
        .max(MAX_TAGS_PER_QUESTION, `You can only add up to ${MAX_TAGS_PER_QUESTION} ${MAX_TAGS_PER_QUESTION > 1 ? 'tags' : 'tag'}`)

})