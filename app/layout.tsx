import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { SiteHeader } from '@/components/ui/site-header'
import { SiteFooter } from '@/components/ui/site-footer'

// Elegant serif font for headings
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

// Clean sans-serif for body text
const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Celebrate & Remember | Beautiful Celebration & Memorial Websites',
  description: 'Create beautiful, personalized websites to celebrate life\'s milestones and honor loved ones',
  keywords: 'celebration, wedding, birthday, anniversary, memorial, tribute, remembrance, celebration of life, funeral, obituary, legacy, guestbook, rsvp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
          <Toaster position="top-right" closeButton richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}