import headerNavLinks from '@/data/headerNavLinks'
import Logo from './Logo'
import Link from '@/components/ui/Link'
import MobileNav from '@/components/common/MobileNav'
import ThemeSwitch from '@/components/ui/SwitchTheme'
import { toggleThemeCookie } from '@/app/actions'
import { cookies } from 'next/headers'

const Header = () => {
  const theme = cookies().get('theme')
  return (
    <header className="flex items-center justify-between py-4 md:py-10 px-4 max-w-[1024px] mx-auto">
      <div>
        <Link href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <ThemeSwitch toggleTheme={toggleThemeCookie} theme={theme?.value ? theme.value : 'light'}/>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header