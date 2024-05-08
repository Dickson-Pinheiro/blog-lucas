'use server'
import { getPosts } from "./actions";
import Card from "@/components/blog/card";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Link from '@/components/ui/Link'

export default async function Home( {params, searchParams }: { params: {}, searchParams: {[key: string]: string}}) {
  const page = searchParams?.page
  const posts = await getPosts(page ? Number(page) : 1, 4)

  return (
    <main>
      <Header />
      <ul className="w-full mx-auto max-w-[1024px] divide-y divide-gray-200 dark:divide-gray-700 p-4">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Mais recentes
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Essas são as publicações mais atuais.
            </p>
          </div>
        </div>
        {posts.items.map(i => (
          <Card title={i.title} description={i.description} href={`/blog/${i.id}`} created_at={i.created} tags={i?.expand?.tags} key={i.id} />
        ))}
      </ul>
      <div className="flex justify-end text-base font-medium leading-6 max-w-[1024px] mx-auto">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 p-4"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      <Footer/>
    </main>
  );
}
//<Pagination currentPage={page ? Number(page) : 1} totalPages={posts.totalPages}/>
