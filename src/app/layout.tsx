// Este layout raíz ya no se usa directamente
// El layout real está en [locale]/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
