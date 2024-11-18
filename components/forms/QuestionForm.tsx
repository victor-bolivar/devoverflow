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
import { MAX_TAGS_PER_QUESTION } from "@/constants"
import Tag from "../tag"
import { RxCross1 } from "react-icons/rx";


export function QuestionForm() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof AskAQuestionSchema>>({
        resolver: zodResolver(AskAQuestionSchema),
        defaultValues: {
            title: "",
            content: '',
            tags: []
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof AskAQuestionSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const handleAddTag = (e: KeyboardEventHandler<HTMLInputElement>) => {
        console.log(e)
        if (e.key === 'Enter') {
            e.preventDefault()
            form.setValue('tags', [...form.getValues('tags'), e.target.value])
            e.target.value = ''
        }

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

                                <RichTextEditor editorContent={field.value} onChange={value => { field.onChange({ target: { value } }) }} />

                            </FormControl>
                            <FormDescription>
                                Introduce the problem and expand on what you put in the title.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="h3">
                                Tags <span className="text-orange-strong">*</span>
                            </FormLabel>
                            <FormControl>

                                <div>
                                    <Input className="input" placeholder="" onKeyDown={handleAddTag} />
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {form.getValues('tags').map(tag => <Tag type="delete" label={tag} onClick={() => {
                                            // remove the tag
                                            form.setValue('tags', form.getValues('tags').filter(tagElement => tagElement != tag))
                                        }} />)}
                                    </div>
                                </div>
                            </FormControl>
                            <FormDescription>
                                Add up to {MAX_TAGS_PER_QUESTION} tag{MAX_TAGS_PER_QUESTION > 1 && 's'}.
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
