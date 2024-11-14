import React from 'react'

export default async function Page(props: {
    searchParams?: Promise<{
        q?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.q || '';

    return (
        <div>
            <h1>{query}</h1>
        </div>
    )
}