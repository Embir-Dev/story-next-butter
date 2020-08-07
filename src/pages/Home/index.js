import React from 'react'
import Head from 'next/head'
import Header from '@/src/Header'
import LinkGroup from '@/src/LinkGroup'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Story Next Butter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header
          title={<><a href="https://www.linkedin.com/in/sivli-embir-37b33784/" target="_blank" rel="noreferrer">Sivli Embir's</a> Demo</>}
          body="This demo is a tech stack that shows off Story first development using React and Storybook, hosted for free with Vercel."
        />
        <LinkGroup data={[
          {
            link: "https://github.com/Sivli-Embir/story-next-butter",
            title: "Github",
            body: "All work should be stored in version control so no progress is ever lost."
          },
          {
            link: "https://Sivli-Embir.github.io/story-next-butter/",
            title: "Storybook",
            body: "All elements of a website should be defined as stories."
          },
          {
            link: "https://buttercms.com/",
            title: "Butter CMS (Pending)",
            body: "All content should be dynamically loaded from a CMS API."
          },
          {
            link: "https://vercel.com/",
            title: "Vercel",
            body: "SEO ready, free no configuration hosting."
          }
        ]} />
      </main>
    </div>
  )
}
