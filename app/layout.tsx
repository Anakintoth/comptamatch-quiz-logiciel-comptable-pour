import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'ComptaQuiz — Trouvez votre logiciel comptable idéal grâce à l\'IA',
  description: 'Quiz intelligent pour trouver le logiciel comptable parfait pour votre entreprise. Sage, Cegid, QuickBooks, EBP et 20+ logiciels analysés par IA en 2 minutes.',
  icons: { icon: '/favicon.svg' },
  keywords: ['logiciel comptable', 'quiz comptabilité', 'Sage', 'Cegid', 'QuickBooks', 'EBP', 'recommandation IA'],
  openGraph: {
    title: 'ComptaQuiz — Trouvez votre logiciel comptable idéal',
    description: 'Répondez à 5 questions. Notre IA analyse votre profil et vous recommande le logiciel comptable parfait parmi 20+ solutions du marché.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComptaQuiz — Recommandation IA de logiciel comptable',
    description: '5 questions. 1 recommandation IA personnalisée. Gratuit.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`min-h-screen antialiased ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
