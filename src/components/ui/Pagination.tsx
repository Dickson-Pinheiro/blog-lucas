"use client"
import Link from './Link'

interface PaginationProps {
    totalPages: number
    currentPage: number
  }

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
    const prevPage = currentPage - 1 > 0
    const nextPage = currentPage + 1 <= totalPages
  
    return (
      <div className="space-y-2 pb-8 pt-6 md:space-y-5 flex justify-center">
        <nav className="flex justify-between max-w-[1024px] w-full">
          {!prevPage && (
            <button className="cursor-auto disabled:opacity-50 dark:text-gray-400" disabled={!prevPage}>
              Previous
            </button>
          )}
          {prevPage && (
            <Link
              href={currentPage - 1 === 1 ? `/blog` : `?page=${currentPage - 1}`}
              rel="prev"
              target='_self'
              className='dark:text-gray-400'
            >
              Previous
            </Link>
          )}
          <span className='dark:text-gray-400'>
            {currentPage} of {totalPages}
          </span>
          {!nextPage && (
            <button className="cursor-auto disabled:opacity-50 dark:text-gray-400" disabled={!nextPage}>
              Next
            </button>
          )}
          {nextPage && (
            <Link href={`?page=${currentPage + 1}`} className='dark:text-gray-400' target='_self' rel="next">
              Next
            </Link>
          )}
        </nav>
      </div>
    )
  }