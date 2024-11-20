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
// TODO use TUser instead of TAuthor
export interface TUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    // TODO add image image: string;
    createdAt: Date;
    updatedAt: Date;
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