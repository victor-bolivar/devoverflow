"use client"

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useRef } from 'react';

type SearchbarProps = {
    placeholder: string,
    searchParam: string // for example, 'q' for a query or 't' for a tag
    fullWidth?: boolean
}

export default function Searchbar({ placeholder, searchParam, fullWidth = false }: SearchbarProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set(searchParam, term);
        } else {
            params.delete(searchParam);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const inputRef = useRef<HTMLInputElement>(null)
    const handleIconClick = () => {
        inputRef.current?.focus()
    }

    return (
        <div className={`flex-1 relative md:max-w-lg  ${fullWidth ? 'w-full' : 'max-w-xl'}`}>
            <Search onClick={handleIconClick} className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                ref={inputRef}
                className="w-full bg-light-800 dark:bg-dark-400 pl-9 text-base placeholder:text-muted-foreground/60"
                placeholder={placeholder}
                type="search"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}