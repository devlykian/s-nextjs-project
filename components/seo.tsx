import React from 'react'
import Head from 'next/head'

type SeoProps = {
  title: string
  description: string
  canonical?: string
  css?: string
  js?: string
  image?: string
}

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  js,
  image
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      name="viewport"
      content="width=device-width,maximum-scale=1,initial-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />

    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    {js && <script type="text/javascript" src={`${js}`}></script>}
  </Head>
)
