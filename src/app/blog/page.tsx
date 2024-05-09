import Header from '@/components/common/Header'
import Link from '@/components/ui/Link'
import Tag from "@/components/ui/Tag"
import { formatDate } from "pliny/utils/formatDate.js"
import { getPosts } from '../actions'
import Pagination from '@/components/ui/Pagination'
import Footer from '@/components/common/Footer'
import { unstable_cache } from 'next/cache'

interface AllPostProps {
    title: string,
    description: string,
    href: string,
    created_at: string
    tags: any[]
}

function AllPosts({ created_at, href, title, tags, description }: AllPostProps) {
    return (
        <li key={href} className="py-5">
            <article className="flex flex-col space-y-2 xl:space-y-0">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={created_at}>{formatDate(created_at, 'pt-br')}</time>
                    </dd>
                </dl>
                <div className="space-y-3">
                    <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={href} className="text-gray-900 dark:text-gray-100">
                                {title}
                            </Link>
                        </h2>
                        <div className="flex flex-wrap">
                            {tags?.map((tag) => <Tag key={tag.id} text={tag.tag} />)}
                        </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {description}
                    </div>
                </div>
            </article>
        </li>
    )
}

export default async function PageBlog({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const page = searchParams?.page

   
    const posts = await unstable_cache(() => getPosts(page? Number(page) : 1, 10), undefined, {revalidate: 60 * 3})()

    return(
        <main className='max-w-[1024px] mx-auto p-4'>
            <Header />
            <ul className='mb-4 mt-4'>
                {posts.items.map(p => {
                    return <AllPosts key={p.id} created_at={p.created} description={p.description} href={`/blog/${p.id}`} title={p.title} tags={p?.expand?.tags}/>
                })}
            </ul>
            <Pagination currentPage={page ? Number(page) : 1} totalPages={posts.totalPages}/>
            <Footer />
        </main>
    )
}