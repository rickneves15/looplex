'use client'

import { Layout } from 'antd'

import { Sidebar } from '@/components/(dashboard)/Sidebar'

const { Content } = Layout

export function MainDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout className="min-h-screen overflow-hidden">
      <Sidebar />
      <Layout>
        <Content className="p-6">{children}</Content>
      </Layout>
    </Layout>
  )
}
