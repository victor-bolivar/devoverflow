"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { AskAQuestionSchema } from "@/lib/validations"
import RichTextEditor from '@/components/rich-text-editor'

export function QuestionForm() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof AskAQuestionSchema>>({
        resolver: zodResolver(AskAQuestionSchema),
        defaultValues: {
            title: "",
            content: ''
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof AskAQuestionSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="h3">
                                Question Title <span className="text-orange-strong">*</span>
                            </FormLabel>
                            <FormControl>
                                <Input className="input" placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Be specific and imagine you're asking a question to another person.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="h3">
                                Detailed explanation of your problem? <span className="text-orange-strong">*</span>
                            </FormLabel>
                            <FormControl>

                                <RichTextEditor editorContent={field.value} onChange={value => {
                                    console.log(value)
                                    field.onChange({ target: { value } })
                                    console.log(field.value)
                                }} />

                            </FormControl>
                            <FormDescription>
                                Introduce the problem and expand on what you put in the title.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
