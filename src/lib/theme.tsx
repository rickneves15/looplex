import { ConfigProvider, type ThemeConfig } from 'antd'

import StyledComponentsRegistry from './AntdRegistry'

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
  },
}

export function AntDProvedireTheme({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConfigProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ConfigProvider>
  )
}
