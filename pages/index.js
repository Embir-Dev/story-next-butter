import React, { useState, useEffect } from 'react'
import Butter from 'buttercms';

import Home from '@/src/pages/Home'

const butter = Butter('a2e9ba6a2be818011e8ad27122400647d2907e77');

export default function HomePage() {
  const [cms, setCms] = useState()
  useEffect(() => {
    butter.page.retrieve('*', 'homepage').then(res => {
      if (res && res.data) setCms(res.data.data)
    })
  }, [])
  if (!(cms && cms.fields)) return <div />
  console.log(cms.fields);
  return <Home {...cms.fields} />
}
