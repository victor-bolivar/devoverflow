import React from 'react'
import { QuestionForm } from '@/components/forms/QuestionForm'

const page = () => {
    return (
        <div>
            <h1 className='h1 mb-3'>Ask a public question</h1>
            <QuestionForm />
        </div>
    )
}

export default page
