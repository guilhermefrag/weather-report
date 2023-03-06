import '../styles/globals.css'
import Header from './Header'
import { UilApple } from '@iconscout/react-unicons';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Header/>
        {children}
        <UilApple/>
      </body>
    </html>
  )
}