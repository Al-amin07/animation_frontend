'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from '@/components/loader'
import Header from '@/components/header'
import Hero from '@/components/hero'
import ServicesShowcase from '@/components/serviceShowcase/ServiceShowcase'
import DigitalPartner from '@/components/partner/Partner'
import Banner from '@/components/banner/Banner'
import Sponsour from '@/components/sponsour/Sponsour'
import Footer from '@/components/footer/Footer'
import Skills from '@/components/skills/Skills'
import Feedback from '@/components/feedback/Feedback'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Experience from '@/components/experience/experience'
import ScrollableItems from '@/components/ScrollableItems'


export default function Home() {
  const [loading, setLoading] = useState(true)
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" />
          ) : (
            <div style={{ scrollBehavior: 'smooth' }} className='mb-24  '>
              <div className='min-h-screen mb-72 bg-black'>
                <motion.div

                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 20,
                    duration: 2.5,

                  }}
                >
                  <Header />
                  <Hero />

                </motion.div>
              </div>


              <ScrollableItems />
              <ServicesShowcase />
              <DigitalPartner />
              <Banner />
              <Sponsour />
              <Experience />
              <Skills />
              <Feedback />
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </main>
    </QueryClientProvider>
  )
}

