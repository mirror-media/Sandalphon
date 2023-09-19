import Header from '~/components/layout/header'
import Footer from '~/components/layout/footer'
import ScrollToTopButton from '../scroll-to-top-button'

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}