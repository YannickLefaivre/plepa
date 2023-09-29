import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Providers } from './providers'
import { NavBar } from '@/components/templates/server/NavBar'
import clsx from 'clsx'
import Footer from '@/components/templates/server/Footer'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen gap-y-16">
            <NavBar />
            <main className="lg:container lg:mx-auto max-w-7xl px-6 flex-grow flex-col justify-start items-center gap-y-16 inline-flex">
              {children}
            </main>
            <Footer footerSections={siteConfig.footerSections}/>
          </div>
        </Providers>
      </body>
    </html>
  )
}
