'use server'
import ThemeSwitch from "@/components/ui/SwitchTheme";
import Link from '../components/ui/Link'
import { getPosts, toggleThemeCookie } from "./actions";
import Pagination from "@/components/ui/Pagination";
import Card from "@/components/blog/card";
import { cookies } from "next/headers";
import Presentation from "@/components/blog/Presentation";

export default async function Home() {
  const posts = await getPosts(1)
  const theme = cookies().get('theme')
  return (
    <main>
      <div className="flex justify-center">
        <div className="max-w-[1024px] w-full">
          <header className="flex items-center justify-between gap-4 py-10">
            <div>
              <a aria-label="Quasilinear Musings" href="/">
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    bandeira
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
              <Link className="hidden font-medium text-gray-900 sm:block dark:text-gray-100" href="/blog">Blog</Link>
              <Link className="hidden font-medium text-gray-900 sm:block dark:text-gray-100" href="/tags">Tags</Link>
              <Link className="hidden font-medium text-gray-900 sm:block dark:text-gray-100" href="/projects">Projects</Link>
              <Link className="hidden font-medium text-gray-900 dark:text-gray-100" href="/about">About</Link>
              <button aria-label="Search"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-gray-900 dark:text-gray-100"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg></button>
              <ThemeSwitch theme={theme?.value ? theme.value : 'light'} toggleTheme={toggleThemeCookie} />
              <button aria-label="Toggle Menu" className="sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-gray-900 dark:text-white"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></button>
              <div className="fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:opacity-[0.98] translate-x-full">
                <div className="flex justify-end"><button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-gray-900"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                </div>
                <nav className="fixed mt-8 h-full">
                  <div className="px-12 py-4">
                    <Link className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white" href="/blog">Blog</Link>
                  </div>
                  <div className="px-12 py-4">
                    <Link className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white" href="/tags">Tags</Link>
                  </div>
                  <div className="px-12 py-4">
                    <Link className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white" href="/projects">Projects</Link>
                  </div>
                  <div className="px-12 py-4">
                    <Link className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white" href="/about">About</Link>
                  </div>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="w-full mx-auto max-w-[1024px] p-4 flex justify-center">
        <Presentation />
      </div>
      <ul className="w-full mx-auto max-w-[1024px] divide-y divide-gray-200 dark:divide-gray-700 p-4">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat necessitatibus illum temporibus sit, animi nobis in labore sapiente cupiditate dolor quas vel cum earum. Deleniti perferendis dicta illum necessitatibus.
            </p>
          </div>
        </div>
        {posts.items.map(i => (
          <Card title={i.title} description={i.description} href={`${i.id}`} created_at={i.created} tags={i?.expand?.tags} key={i.id} />
        ))}
      </ul>
      <Pagination activePage={4} totalItems={90}/>
    </main>
  );
}
