import { Flex } from 'antd'

import { Navbar } from '@/components/(main)/Navbar'
import { Header } from '@/components/(main)/Header'
import { Content } from '@/components/(main)/Content'
import { Footer } from '@/components/(main)/Footer'

export default function Home() {
  return (
    <Flex vertical className="min-h-screen">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </Flex>
  )
}
