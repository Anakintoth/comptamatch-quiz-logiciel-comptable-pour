import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ComptaQuiz — Maîtrisez la comptabilité, testez vos compétences.',
  description: 'Maîtrisez la comptabilité, testez vos compétences.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'ComptaQuiz',
    description: 'Maîtrisez la comptabilité, testez vos compétences.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
