'use client'
import { Flex, Typography, Button } from 'antd'

const { Title } = Typography

export function Navbar() {
  return (
    <nav className="z-10 bg-transparent absolute w-full">
      <Flex justify="space-between" align="center" className="p-6">
        <Flex flex="1">
          <Title className="uppercase">looplex</Title>
        </Flex>
        <div className="col-12 col-md-6 px-4">
          <Button ghost>Dashboard</Button>
        </div>
      </Flex>
    </nav>
  )
}
