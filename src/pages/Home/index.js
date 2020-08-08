import React from 'react'
import Head from 'next/head'
import Header from '@/src/Header'
import LinkGroup from '@/src/LinkGroup'
import styles from './Home.module.css'

export default function Home({header, linkgroup = {linkitem: []}}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Story Next Butter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header {...header} />
        <LinkGroup data={linkgroup.linkitem} />
      </main>
    </div>
  )
}
