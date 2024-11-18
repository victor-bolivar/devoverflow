import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Heading from "@tiptap/extension-heading";
import Image from "next/image";
import { List } from 'lucide-react'
import { FaListOl, FaListUl } from "react-icons/fa6";


interface TipTapProps {

    editorContent: string;

    onChange: (content: string) => void;

}

const RichTextEditor = ({ editorContent, onChange }: TipTapProps) => {

    const editor = useEditor({

        extensions: [
            StarterKit,
            ListItem,
            Heading.configure({
                HTMLAttributes: {
                    class: "text-xl font-bold capitalize",
                    levels: [2],
                },
            }),
            BulletList.configure({
                HTMLAttributes: {
                    class: "list-disc ml-2",
                },
            }),
            OrderedList.configure({
                HTMLAttributes: {
                    class: "list-decimal ml-2",
                },
            }),

        ],

        immediatelyRender: false,
        editorProps: {
            attributes: {
                class:
                    "shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
            },
        },
        content: editorContent,

        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },

    });

    if (!editor) {
        return null;
    }

    return (

        <div className="flex flex-col justify-stretch min-h-[200px] border rounded border-b-0">
            <div className="flex items-center gap-4 mt-2">

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`ml-4 rounded ${editor.isActive("bold") ? "bg-gray-200" : ""}`}
                    title="Bold (Ctrl+B)"
                >
                    <b>B</b>
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`rounded ${editor.isActive("italic") ? "bg-gray-200" : ""
                        }`}
                    title="Italic (Ctrl+I)"
                >
                    <i>I</i>
                </button>


                <button
                    type="button"
                    onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={
                        editor.isActive("heading", { level: 2 }) ? "is-active" : ""
                    }
                >
                    H
                </button>

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`rounded ${editor.isActive("bulletList") ? "bg-gray-200" : ""}`}
                    title="Bullet List"
                >
                    <FaListUl />
                </button >

                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`rounded ${editor.isActive("orderedList") ? "bg-gray-200" : ""}`}
                    title="Ordered List"
                >

                    <FaListOl />
                </button >

            </div >

            <EditorContent editor={editor} />

        </div >

    );

};

export default RichTextEditor;