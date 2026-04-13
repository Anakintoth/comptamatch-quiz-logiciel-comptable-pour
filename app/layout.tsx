import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'BalanceIQ — Maîtrisez votre logiciel comptable',
  description: 'Des quiz adaptatifs pour former vos équipes sur Sage, Cegid, EBP et tous les grands logiciels comptables français. Algorithme de révision espacée, cas pratiques réels, suivi de progression individuel.',
  icons: { icon: '/favicon.svg' },
  keywords: ['quiz comptable', 'formation sage 100', 'formation cegid', 'logiciel comptable', 'formation comptabilité', 'EBP formation'],
  authors: [{ name: 'BalanceIQ' }],
  openGraph: {
    title: 'BalanceIQ — Maîtrisez votre logiciel comptable',
    description: 'Des quiz adaptatifs pour former vos équipes sur Sage, Cegid, EBP et tous les grands logiciels comptables français.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'BalanceIQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BalanceIQ — Maîtrisez votre logiciel comptable',
    description: 'Des quiz adaptatifs pour former vos équipes comptables.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`${inter.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
