import HomeFilter from '@/components/home/filter';
import React from 'react'

export default async function Page(props: {
    searchParams?: Promise<{
        q?: string;
        filter?: string
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.q || '';
    const filter = searchParams?.filter || '';

    return (
        <div className='px-9'>
            {/* TODO filter the questions based on filters and query */}
            <h1>{query}</h1>
            <h2>{filter}</h2>
            <HomeFilter />
        </div>
    )
}