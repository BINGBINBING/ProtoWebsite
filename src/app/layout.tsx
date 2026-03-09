import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartSidebar from '@/components/shop/CartSidebar'
import { CartProvider } from '@/context/CartContext'

export const metadata: Metadata = {
  title: {
    default: '智云咨询 - 专业企业管理咨询服务',
    template: '%s | 智云咨询',
  },
  description:
    '智云咨询提供战略规划、管理效能、数字化转型、财务顾问、人才发展等全方位企业管理咨询服务，助力企业实现可持续增长。',
  keywords: ['管理咨询', '战略规划', '数字化转型', '企业咨询', '咨询公司'],
  authors: [{ name: '智云咨询' }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '智云咨询',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
