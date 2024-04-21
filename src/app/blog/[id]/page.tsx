import Header from "@/components/common/Header"
import { getBlogById } from "./actions"
import { twMerge } from "tailwind-merge"
import AuthorLayout from "@/components/layouts/AuthorLayut"
import Footer from "@/components/common/Footer"

export default async function Blog({ params }: { params: { id: string } }) {
    const blog = await getBlogById(params.id)
    console.log(blog)
    console.log(`http://0.0.0.0:8090/api/files/tbd5e2gpkd1x5na/${blog.id}}/${blog?.expand?.author.avatar}`)
    
    const classList = [
        'prose-headings:text-gray-900',
        'dark:prose-headings:text-gray-200',
        'prose-p:text-gray-900',
        'dark:prose-p:text-gray-200',
        'prose-a:text-primary-500',
        'prose-strong:text-gray-950',
        'dark:prose-strong:text-gray-100',
        'prose-a:font-bold'
    ]
    return (
        <>
            <Header />
            <AuthorLayout content={{
                date: blog.created,
                title: blog.title,
                tags: blog.expand?.tags
            }}
                authorDetails={[{
                    avatar: `http://0.0.0.0:8090/api/files/tbd5e2gpkd1x5na/${blog?.expand?.author.id}/${blog?.expand?.author.avatar}`,
                    name: blog?.expand?.author.name,
                    twitter: blog?.expand?.author.twitter
                }]}
            >
                <article dangerouslySetInnerHTML={{ __html: blog.body }} className={twMerge(classList)}>
                </article>
                <Footer />
            </AuthorLayout>
        </>
    )
}