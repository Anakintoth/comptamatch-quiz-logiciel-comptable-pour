import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'ComptaMatch — Trouvez votre logiciel comptable idéal en 2 minutes',
  description:
    'Quiz IA pour micro-entrepreneurs : trouvez le logiciel comptable parfait pour votre activité. Sage, Cegid, QuickBooks, EBP, Pennylane — matching IA personnalisé en 5 questions.',
  icons: { icon: '/favicon.svg' },
  keywords: [
    'logiciel comptable micro-entrepreneur',
    'quiz comptabilité',
    'comparatif logiciel comptable',
    'Sage',
    'Cegid',
    'QuickBooks',
    'EBP',
    'Pennylane',
    'recommandation IA',
    'ComptaMatch',
  ],
  openGraph: {
    title: 'ComptaMatch — Votre logiciel comptable, matché en 2 minutes',
    description:
      'Répondez à 5 questions. Notre IA matche votre profil de micro-entrepreneur avec le logiciel comptable idéal parmi 20+ solutions du marché.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'ComptaMatch',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComptaMatch — Matching IA de logiciel comptable',
    description: '5 questions. 1 match IA personnalisé. Gratuit et instantané.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`min-h-screen antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
