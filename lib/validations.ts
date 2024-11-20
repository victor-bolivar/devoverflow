import { z } from 'zod'
import {
    MIN_TAGS_PER_QUESTION,
    MAX_TAGS_PER_QUESTION,
    MIN_PASSWORD_CHARACTERS,
    MAX_PASSWORD_CHARACTERS,
    MIN_USERNAME_CHARACTERS,
    MAX_USERNAME_CHARACTERS
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

export const SignInSchema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z
        .string()
        .min(MIN_PASSWORD_CHARACTERS, `Password must be at least ${MIN_PASSWORD_CHARACTERS} characters long`)
        .max(MAX_PASSWORD_CHARACTERS, `Password must be less than ${MAX_PASSWORD_CHARACTERS} characters`)
        .nonempty("Password is required"),
});

export const SignUpSchema = z.object({
    username: z
        .string()
        .min(MIN_USERNAME_CHARACTERS, `Username must be at least ${MIN_USERNAME_CHARACTERS} characters long`)
        .max(MAX_USERNAME_CHARACTERS, `Username must be less than ${MAX_USERNAME_CHARACTERS} characters`)
        .nonempty("Username is required"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(MIN_PASSWORD_CHARACTERS, `Password must be at least ${MIN_PASSWORD_CHARACTERS} characters long`)
        .max(MAX_PASSWORD_CHARACTERS, `Password must be less than ${MAX_PASSWORD_CHARACTERS} characters`),
});