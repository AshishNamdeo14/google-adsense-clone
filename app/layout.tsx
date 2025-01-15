import '@/app/ui/global.css';
import { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Google Adsense Clone Dashboard',
  },
  description: 'The Dashboard, built with App Router.',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
