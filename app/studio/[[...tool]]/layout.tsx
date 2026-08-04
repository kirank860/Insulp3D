export const metadata = {
  title: 'Sanity Studio',
  description: 'Manage content for InSculp 3D',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
