import { TNavLink } from "@/lib/types";

export const ROUTES = {
    TAGS: (id: string) => `/tags/${id}`,
    ASK_A_QUESTION: '/ask-a-question'
}

export const navLinks: TNavLink[] = [
    { href: '/', label: 'Home', icon: { src: '/nav-icons/home.svg', width: 24, height: 24 } },
    { href: '/collections', label: 'Collections', icon: { src: '/nav-icons/collections.svg', width: 24, height: 24 } },
    { href: '/jobs', label: 'Find jobs', icon: { src: '/nav-icons/jobs.svg', width: 24, height: 24 } },
    { href: '/tags', label: 'Tags', icon: { src: '/nav-icons/tag.svg', width: 24, height: 24 } },
    { href: '/communities', label: 'Communities', icon: { src: '/nav-icons/communities.svg', width: 24, height: 24 } },
    { href: ROUTES.ASK_A_QUESTION, label: 'Ask a Question', icon: { src: '/nav-icons/questions.svg', width: 24, height: 24 } },
]

export const MAX_TAGS_PER_QUESTION = 5
export const MIN_TAGS_PER_QUESTION = 1