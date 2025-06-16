export const metadata = {
  title: 'About Us | Globtek',
  description: 'Learn about Globtek Engineering, our history, values, and team.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
