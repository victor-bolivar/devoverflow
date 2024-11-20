'use client'

import React from 'react'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z, ZodSchema } from 'zod';
import { SignInSchema, SignUpSchema } from '@/lib/validations'
import { capitalizeFirstLetter } from '@/lib/utils';
import { signinUser, signupUser } from '@/actions/auth';
import { redirect } from 'next/navigation';
import { signIn } from "next-auth/react";
import Link from 'next/link';

type AuthFormProps = {
    type: "SIGN_IN" | "SIGN_UP";
};

const AuthForm = ({ type }: AuthFormProps) => {

    let schema;
    let defaultValues;
    switch (type) {
        case 'SIGN_IN':
            schema = SignInSchema;
            defaultValues = {
                email: '',
                password: '',
            } as z.infer<typeof SignInSchema>;
            break;
        case 'SIGN_UP':
            schema = SignUpSchema;
            defaultValues = {
                username: '',
                email: '',
                password: ''
            } as z.infer<typeof SignUpSchema>;
            break;
        default:
            throw new Error('Invalid type provided to AuthForm');
    }

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues,
    });

    const handleCreateQuestion = async (
        data: any
    ) => {
        switch (type) {
            case 'SIGN_UP':
                await signupUser(data)
                redirect('/sign-in')
                break;
            case 'SIGN_IN':
                const res = await signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                });
                if (res?.error) {
                    // TODO better error handling
                }
                if (res?.ok) {
                    redirect('/')
                }
            default:
                break;
        }

    };


    return (
        <div className='flex flex-col border rounded-lg bg-300 w-3/5 max-w-xl py-6 px-10'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <h1 className='h1'>{type === 'SIGN_IN' ? 'Sign in' : 'Create your account'}</h1>
                    <p>to continue to DevFlow</p>
                </div>
                <Image src="/logo.svg" alt="Logo" width={32} height={32} className="w-[3rem] h-[3rem] self-center" />
            </div>

            <Form {...form}>
                <form
                    className="flex w-full flex-col gap-8 mt-8"
                    onSubmit={form.handleSubmit(handleCreateQuestion)}
                >
                    {
                        Object.keys(defaultValues).map(fieldName => (
                            <FormField
                                key={fieldName}
                                control={form.control}
                                name={fieldName}
                                render={({ field }) => (
                                    <FormItem className="flex w-full flex-col">
                                        <FormLabel className="paragraph-light text-dark400_light800">
                                            {capitalizeFirstLetter(fieldName)}
                                        </FormLabel>
                                        <FormControl>


                                            <Input
                                                className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-[56px] border"
                                                {...field}
                                                type={
                                                    ['email', 'password'].includes(fieldName) ? fieldName : 'text'
                                                }
                                            />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))
                    }

                    <Button
                        type="submit"
                        className="primary-gradient w-full py-5  tracking-wider !text-light-900"
                    >
                        Continue
                    </Button>

                    <div className='text-center'>
                        {type === 'SIGN_IN'
                            ? <p>Don't have an account? <Link href={'/sign-up'} className='text-orange-900'>Sign up</Link></p>
                            : <p>Already have an account? <Link href={'/sign-in'} className='text-orange-900'>Sign in</Link></p>
                        }
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default AuthForm
