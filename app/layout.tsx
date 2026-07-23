import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Navigation } from '@/components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShopHub - E-Commerce Store',
  description: 'Discover our collection of premium products, read our blog, and stay updated with latest news',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        <Navigation />
        {children}
        <footer className="bg-muted border-t border-border mt-16 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">About ShopHub</h3>
                <p className="text-sm text-muted-foreground">
                  Your trusted online shopping destination for premium products
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/products" className="hover:text-foreground">Products</a></li>
                  <li><a href="/blog" className="hover:text-foreground">Blog</a></li>
                  <li><a href="/news" className="hover:text-foreground">News</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                  <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                  <li><a href="#" className="hover:text-foreground">FAQs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Rendering</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/comparison" className="hover:text-foreground">Learn More</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2026 ShopHub. All rights reserved. Built with Duy Anh 16</p>
            </div>
          </div>
        </footer>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
