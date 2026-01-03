import React from 'react'
import Hero from '@/components/Home/Hero'
import People from '@/components/Home/People'
import Features from '@/components/Home/Features'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Paidin',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <People />
      <Features />
    </main>
  )
}
