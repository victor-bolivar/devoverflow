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

export type TAnswer = {
    _id: string
}

export type TQuestion = {
    _id: string,
    title: string,
    content: string,
    tags: TTag[],
    author: TAuthor,
    upvotes: number,
    downvotes: number,
    answers: TAnswer[],
    views: number,
    createdAt: Date,
    updatedAt: Date
}