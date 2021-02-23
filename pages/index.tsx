import { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'

const IndexPage: React.FC<{}> = () => {
  useEffect(() => {
    Router.replace('/homepage')
  })
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default IndexPage
