import Footer from '@/components/Footer';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';

const roboto_slab = Roboto_Slab({ weight: ["300", "400", "600"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aztek Converter',
  description: 'Straight forward converter for consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto_slab.className}>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
