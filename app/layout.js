import './globals.css'

export const metadata = {
  title: 'Onboarding Form',
  description: 'Onboarding formulär för Eontyre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
