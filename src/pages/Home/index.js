import Head from 'next/head'
import Header from '@/src/Header'
import LinkItem from '@/src/LinkItem'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header
          title={<><a href="https://www.linkedin.com/in/sivli-embir-37b33784/" target="_blank">Sivli Embir's</a> Demo</>}
          body="This demo is a tech stack that shows off how to convert wireframes to specs, stories, and final deployment."
        />

        <div className={styles.grid}>
          <LinkItem
            link="https://nextjs.org/docs"
            title="Documentation"
            body="Find in-depth information about Next.js features and API."
          />
          <LinkItem
            link="https://nextjs.org/docs"
            title="Documentation"
            body="Find in-depth information about Next.js features and API."
          />
          <LinkItem
            link="https://nextjs.org/docs"
            title="Documentation"
            body="Find in-depth information about Next.js features and API."
          />
          <LinkItem
            link="https://nextjs.org/docs"
            title="Documentation"
            body="Find in-depth information about Next.js features and API."
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
