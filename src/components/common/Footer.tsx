import Link from '../ui/Link'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${'test@test.com'}`} size={6} />
          <SocialIcon kind="github" href={'github.com'} size={6} />
          <SocialIcon kind="facebook" href={'facebook.com'} size={6} />
          <SocialIcon kind="youtube" href={'youtube.com'} size={6} />
          <SocialIcon kind="linkedin" href={'linkedin.com'} size={6} />
          <SocialIcon kind="twitter" href={'twitter.com'} size={6} />
          <SocialIcon kind="instagram" href={'instagram.com'} size={6} />
          <SocialIcon kind="threads" href={'threads.com'} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{'Dickson Pinheiro'}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="https://github.com/Dickson-Pinheiro/">Github</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/">
            Lucas Alvez
          </Link>
        </div>
      </div>
    </footer>
  )
}
