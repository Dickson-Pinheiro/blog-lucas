import Card from '@/components/projects/CardProject'
import { getProjects } from '../actions'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default async function Projects() {
    const projects = await getProjects()
    console.log(projects[0])
  return (
    <>
    <Header />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 max-w-[1024px] mx-auto mt-4 p-4">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Esses são alguns dos projetos que faço parte
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects.map((d) => {
               return <Card
                 key={d.title}
                 title={d.title}
                 description={d.Description}
                 imgSrc={`${process.env.POCKETBASE_URL}/api/files/projects/${d.id}/${d.image}`}
                 href={d.link}
               />
            } 
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
