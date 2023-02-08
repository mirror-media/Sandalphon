import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#04295e" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="msapplication-TileColor"
          content="#04295e"
          key="msapplication-TileColor"
        />
        <meta name="theme-color" content="#04295e" key="theme-color" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
