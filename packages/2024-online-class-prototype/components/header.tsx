import NextLink from 'next/link'
import NextImage from 'next/image'
import Logo from '@/public/images/logo.png'
import NavList from './nav-list'
import SocialShare from './social-share'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-header md:shadow-gap lg:shadow-gap-lg">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center bg-white md:w-screen md:flex-row md:flex-wrap">
        <NextLink
          href="/"
          className="flex w-screen justify-center shadow-gap md:ml-6 md:mt-2 md:w-auto md:shadow-none lg:my-5 lg:ml-3"
        >
          <NextImage
            src={Logo}
            width={200}
            height={50}
            alt="logo"
            className="lg:hidden"
          />
          <NextImage
            src={Logo}
            width={320}
            height={80}
            alt="logo"
            className="hidden lg:flex"
          />
        </NextLink>
        <NavList />
        <SocialShare />
      </div>
    </header>
  )
}
