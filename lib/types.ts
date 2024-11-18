export type TNavLink = {
    href: string
    label: string
    icon: {
        src: string,
        width: number,
        height: number
    }
}

export type TTag = {
    _id: string,
    name: string
}

export type TAuthor = {
    _id: string,
    name: string
}

export type TQuestion = {
    _id: string,
    title: string,
    description: string,
    tags: TTag[],
    author: TAuthor,
    upvotes: number,
    answers: number,
    views: number,
    createdAt: Date
}