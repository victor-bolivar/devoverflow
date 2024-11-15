import { TNavLink } from "@/lib/types";

export const navLinks: TNavLink[] = [
    { href: '/', label: 'Home', icon: { src: '/nav-icons/home.svg', width: 24, height: 24 } },
    { href: '/collections', label: 'Collections', icon: { src: '/nav-icons/collections.svg', width: 24, height: 24 } },
    { href: '/jobs', label: 'Find jobs', icon: { src: '/nav-icons/jobs.svg', width: 24, height: 24 } },
    { href: '/tags', label: 'Tags', icon: { src: '/nav-icons/tag.svg', width: 24, height: 24 } },
    { href: '/communities', label: 'Communities', icon: { src: '/nav-icons/communities.svg', width: 24, height: 24 } },
    { href: '/ask', label: 'Ask a Question', icon: { src: '/nav-icons/questions.svg', width: 24, height: 24 } },
]

export const ROUTES = {
    'TAGS': (id: string) => `/tags/${id}`
}