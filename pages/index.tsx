import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import BrandInfo from '@/components/BrandInfo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <BrandInfo />
    </>
  )
}
