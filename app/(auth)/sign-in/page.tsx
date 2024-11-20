import AuthForm from '@/components/forms/AuthForm'
import { SignInSchema } from '@/lib/validations'
import React from 'react'

const page = () => {
    return (
        <AuthForm type='SIGN_IN' />
    )
}

export default page
