import './globals.css';
export const metadata = { title: 'comptamatch-quiz-logiciel-comptable-pour', description: 'ComptaMatch — Quiz Logiciel Comptable pour Micro-Entrepreneu' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-950 text-white min-h-screen">{children}</body>
    </html>
  );
}
