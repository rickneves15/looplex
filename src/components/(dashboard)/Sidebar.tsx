'use client'

import { Layout, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Link from 'next/link'

const { Sider } = Layout

export function Sidebar() {
  return (
    <Sider width={200} theme="dark">
      <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
        <Link href="/dashboard/users">
          <Menu.Item key="2" title="Usuários" icon={<UserOutlined />}>
            Usuários
          </Menu.Item>
        </Link>
      </Menu>
    </Sider>
  )
}
