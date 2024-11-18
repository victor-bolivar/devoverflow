import { z } from 'zod'

export const AskAQuestionSchema = z.object({
    title: z
        .string()
        .min(5, "Minimun 5 characters")
        .max(30, "Maximun 30 characters"),
    content: z
        .string()
        .min(10, "Minimun 10 characters")
        .max(1000, "Maximun 1000 characters"),

})



// TODO add tags logic
// tags: z.array(z
//     .string()
//     .min(3, "Minimun 3 characters")
//     .max(10, "Maximun 10 characters")
// )