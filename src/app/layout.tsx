import './globals.css'
import { UilApple } from '@iconscout/react-unicons';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
        <UilApple/>
      </body>
    </html>
  )
}
