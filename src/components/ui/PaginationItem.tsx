import { twMerge } from "tailwind-merge"

export default function PaginationItem({ active, label }: { active: boolean, label: number }) {

    return (
        <a href="#" aria-current="page" className={twMerge('',
         active
        ? 'relative z-10 inline-flex items-center bg-primary-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"' 
        : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
        )}>{label}</a>
    )
}
