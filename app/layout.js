import Header from '@/comps/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/comps/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LIGHT STUDIO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200" style={{
        '@media (min-width: 768px)': {
          fontSize: "10%"
        },
      }}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
