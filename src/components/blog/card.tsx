import Link from '../ui/Link'
//@ts-ignore
import { formatDate } from 'pliny/utils/formatDate'
import Tag from '../ui/Tag'

interface CardProps {
    title: string,
    description: string,
    href: string,
    created_at: string
    tags: any[]
}

const Card = ({ title, description, href, created_at, tags }: CardProps) => (
    <li className="py-12 list-none">
        <div>
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={created_at}>{formatDate(created_at)}</time>
                    </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                    href={href}
                                    target='_self'
                                    className="text-gray-900 dark:text-gray-100"
                                >
                                    {title}
                                </Link>
                            </h2>
                            
                            <div className="flex flex-wrap ">
                                {tags.map((tag) => (
                                    <Tag key={tag.tag} text={tag.tag} />
                                ))}
                            </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {description}
                        </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                        <Link
                            target='_self'
                            href={href}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read more: "${title}"`}
                        >
                            Read more &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </li>
)

export default Card