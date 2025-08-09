import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'METATOPIA (MTP) - 融合AI、电竞与链上经济的GameFi平台',
  description: 'METATOPIA是全球首个融合AI、电竞与链上经济的下一代GameFi平台，打造去中心化电竞生态。',
  keywords: 'METATOPIA, MTP, GameFi, 电竞, AI, 区块链, NFT, 代币',
  authors: [{ name: 'METATOPIA Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'METATOPIA (MTP) - 融合AI、电竞与链上经济的GameFi平台',
    description: 'METATOPIA是全球首个融合AI、电竞与链上经济的下一代GameFi平台，打造去中心化电竞生态。',
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'METATOPIA (MTP) - 融合AI、电竞与链上经济的GameFi平台',
    description: 'METATOPIA是全球首个融合AI、电竞与链上经济的下一代GameFi平台，打造去中心化电竞生态。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="dark">
      <body className={`${inter.className} bg-slate-900 text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}