import { TQuestion, TTag } from "../types"
import connectDB from "./connectDB"
import Question from "./models/Question"
import Tag from "./models/Tag"

export const createQuestion = async (title: string, content: string, tagNames: [string]) => {
    try {
        await connectDB()

        const tagsId: string[] = []
        tagNames.forEach(async (tagName) => {
            tagsId.push(await readTagId(tagName))
        })

        // TODO add author
        const question = new Question({
            title,
            content,
            tagsId
        })
        const savedQuestion = await question.save()
        console.log(savedQuestion)
    } catch (e) {
        console.log(e);
    }
}

export const readQuestions = async () => {
    try {
        await connectDB()
        const questions = await Question.find() as TQuestion[]
        return questions

    } catch (e) {
        console.log(e);
    }
}

// Tags

export async function readTagId(tagName: string) {
    try {
        await connectDB()
        const foundTag = await Tag.findOne({ name: tagName }, { '_id': 1 })
        return foundTag?._id
    } catch (e) {
        console.log(e);
    }
}

export async function ensureTagExists(tagName: string) {
    try {
        await connectDB()
        const foundTag = await Tag.findOne({ name: tagName })

        if (foundTag) {
            return
        } else {
            const createdTag = await Tag.create({ name: tagName })
        }

    } catch (e) {
        console.log(e);
    }
}

