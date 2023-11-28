import { MainDashboardLayout } from '@/components/(dashboard)/MainDashboardLayout'
import { QueryClientProviders } from '@/lib/react-query'
import { AntDProvedireTheme } from '@/lib/theme'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProviders>
      <AntDProvedireTheme>
        <MainDashboardLayout>{children}</MainDashboardLayout>
      </AntDProvedireTheme>
    </QueryClientProviders>
  )
}
