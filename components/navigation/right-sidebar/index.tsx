import { ChevronRight } from 'lucide-react'
import TopQuestion from './top-question'
import Tag from '../../tag'

const RightSidebar = () => {
    // TODO get questions from DB
    // TODO only get enough question for the sidebar for the sidebar to be full
    const questions = [
        { text: 'How to center a <div>', href: '/question/1' },
        { text: 'How to render a component', href: '/question/2' },
        { text: 'When to use auth.js vs firebase/supabase', href: '/question/3' },
    ]
    const popularTags = [
        { label: 'NEXTJS', href: '/' },
        { label: 'TYPESCRIPT', href: '/' },
        { label: 'VUEJS', href: '/' }
    ]

    const sectionStyle = 'flex flex-col gap-5 pb-4 border-b'
    const titleStyle = "text-xl font-medium text-dark-200 dark:text-light-700 mb-1"

    return (
        <aside className='dark:bg-dark-200 dark:bg-opacity-50 flex flex-col justify-start gap-8 border sticky top-20 left-0 h-[calc(100vh-5rem)] w-[23.5rem] max-xl:hidden pl-6 pr-4 py-8'>
            <section className={sectionStyle}>
                <h3 className={titleStyle}>Top Questions</h3>
                {questions.map(question => <TopQuestion {...question} />)}
            </section>
            <section className={sectionStyle}>
                <h3 className={titleStyle}>Popular tags</h3>
                {popularTags.map(tag => <Tag type='link' {...tag} includeRightArrow={true} />)}
            </section>

        </aside >
    )
}

export default RightSidebar
