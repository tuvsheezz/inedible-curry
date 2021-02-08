import React from 'react';
import { Button } from '@material-ui/core';

import Link from 'next/link'
import Head from 'next/head'
type LayoutProps = {
  title?: string
}
const layoutStyle = {
  margin: 20,
  padding: 20
}
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>
    <header>
      <nav>
        <Button variant="outlined" color="primary">hi</Button>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/sign_in">
          <a>Sign in</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
  </div>
)
export default Layout
