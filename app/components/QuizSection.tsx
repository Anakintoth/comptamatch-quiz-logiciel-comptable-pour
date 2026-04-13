'use client';

import { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: 'company_size',
    question: "Quelle est la taille de votre entreprise ?",
    options: [
      { label: "Auto-entrepreneur / Freelance", value: "auto-entrepreneur ou freelance" },
      { label: "TPE (2–10 salariés)", value: "TPE de 2 à 10 salariés" },
      { label: "PME (11–250 salariés)", value: "PME de 11 à 250 salariés" },
      { label: "Grande entreprise (250+)", value: "grande entreprise de plus de 250 salariés" },
    ],
  },
  {
    id: 'sector',
    question: "Quel est votre secteur d'activité ?",
    options: [
      { label: "Commerce / E-commerce", value: "commerce ou e-commerce" },
      { label: "Services / Conseil", value: "services ou conseil" },
      { label: "Bâtiment / BTP", value: "bâtiment ou BTP" },
      { label: "Professions libérales", value: "profession libérale (médecin, avocat, architecte...)" },
    ],
  },
  {
    id: 'features',
    question: "Quelle fonctionnalité est la plus importante pour vous ?",
    options: [
      { label: "Facturation & devis", value: "facturation et création de devis" },
      { label: "Gestion de la paie & DSN", value: "gestion de la paie et déclarations DSN" },
      { label: "Déclarations TVA automatiques", value: "déclarations TVA automatisées" },
      { label: "Pilotage & tableaux de bord", value: "pilotage financier et tableaux de bord en temps réel" },
    ],
  },
  {
    id: 'budget',
    question: "Quel est votre budget mensuel ?",
    options: [
      { label: "Gratuit (open source)", value: "gratuit ou open source uniquement" },
      { label: "Moins de 30€ / mois", value: "moins de 30€ par mois" },
      { label: "30€ – 100€ / mois", value: "entre 30 et 100€ par mois" },
      { label: "Plus de 100€ / mois", value: "plus de 100€ par mois" },
    ],
  },
  {
    id: 'preference',
    question: "Quelle est votre préférence technique ?",
    options: [
      { label: "100% en ligne (SaaS)", value: "logiciel 100% en ligne de type SaaS" },
      { label: "Installé sur poste local", value: "logiciel installé en local sur poste de travail" },
      { label: "Hybride (cloud + local)", value: "solution hybride alliant cloud et installation locale" },
      { label: "Peu importe", value: "sans préférence technique particulière" },
    ],
  },
];

function buildPrompt(answers: Record<string, string>): string {
  return `Je cherche un logiciel de comptabilité adapté à mon profil. Voici mes critères :
- Taille d'entreprise : ${answers.company_size}
- Secteur d'activité : ${answers.sector}
- Fonctionnalité prioritaire : ${answers.features}
- Budget mensuel : ${answers.budget}
- Préférence technique : ${answers.preference}

Recommande-moi les 3 meilleurs logiciels comptables disponibles sur le marché français (parmi Sage, Cegid, Pennylane, QuickBooks, EBP, Ciel, Freebe, Evoliz, Axonaut, Indy, Tiime, Zefyr, et autres).

Pour chaque logiciel recommandé, structure ta réponse ainsi :
1. **Nom du logiciel** — tarif mensuel indicatif
   - ✅ Points forts pour mon profil (2-3 points)
   - ⚠️ Limites éventuelles
   - 🎯 Note de compatibilité : X/10

Termine par une **Recommandation principale** claire en 2 phrases.`;
}

export default function QuizSection() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState('');

  const total = questions.length;
  const progress = step === 0 ? 0 : (step / total) * 100;
  const currentQ = step >= 1 && step <= total ? questions[step - 1] : null;

  const handleNext = async () => {
    if (!selected || !currentQ) return;
    const newAnswers = { ...answers, [currentQ.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);

    if (step < total) {
      setStep(step + 1);
    } else {
      setStep(total + 1);
      setLoading(true);
      setResult('');
      setError('');

      try {
        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: buildPrompt(newAnswers) }),
        });

        if (!res.ok || !res.body) {
          setError("Une erreur est survenue. Veuillez réessayer.");
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let text = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          text += decoder.decode(value, { stream: true });
          setResult(text);
        }
      } catch {
        setError("Impossible de contacter l'API. Vérifiez votre connexion.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult('');
    setSelected(null);
    setLoading(false);
    setError('');
  };

  /* ── Start screen ── */
  if (step === 0) {
    return (
      <div className="text-center py-4">
        <div
          className="feature-emoji mx-auto"
          style={{ width: 64, height: 64, fontSize: '1.75rem', marginBottom: '1.5rem' }}
        >
          📊
        </div>
        <h3 className="text-2xl font-bold mb-3">Quel logiciel comptable vous convient ?</h3>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed max-w-xs mx-auto">
          5 questions · 2 minutes · Recommandation personnalisée par intelligence artificielle
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs text-gray-500 mb-8">
          <span style={{ color: '#10b981' }}>✓</span>&nbsp;Gratuit&nbsp;&nbsp;
          <span style={{ color: '#10b981' }}>✓</span>&nbsp;Sans inscription&nbsp;&nbsp;
          <span style={{ color: '#10b981' }}>✓</span>&nbsp;Résultat immédiat
        </div>
        <button onClick={() => setStep(1)} className="btn-primary">
          <span>Démarrer le quiz →</span>
        </button>
      </div>
    );
  }

  /* ── Result screen ── */
  if (step === total + 1) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg">Vos recommandations personnalisées</h3>
          <button
            onClick={handleReset}
            className="text-xs text-gray-500 hover:text-white transition-colors underline underline-offset-2"
          >
            Recommencer
          </button>
        </div>

        {loading && !result && (
          <div className="flex items-center gap-3 text-gray-400 py-4">
            <div
              className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-t-transparent"
              style={{ borderColor: '#10b981', borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite' }}
            />
            <span className="text-sm">L&apos;IA analyse votre profil et compare les logiciels…</span>
          </div>
        )}

        {error && (
          <div className="text-red-400 text-sm py-3 px-4 rounded-lg bg-red-500/10 border border-red-500/20">
            {error}
          </div>
        )}

        {result && (
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
            {result}
            {loading && (
              <span
                className="inline-block w-1.5 h-4 ml-0.5 align-middle"
                style={{ background: '#10b981', animation: 'pulse 1s ease-in-out infinite' }}
              />
            )}
          </div>
        )}

        {!loading && result && (
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="btn-primary text-center !text-sm !py-3 !px-6">
              <span>Obtenir le rapport PDF complet</span>
            </a>
            <button onClick={handleReset} className="btn-secondary !text-sm !py-3 !px-6">
              Refaire le quiz
            </button>
          </div>
        )}
      </div>
    );
  }

  /* ── Question screen ── */
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 font-medium">
          Question {step} sur {total}
        </span>
        <span className="text-xs font-semibold" style={{ color: '#10b981' }}>
          {Math.round(progress)}%
        </span>
      </div>
      <div className="progress-bar mb-7">
        <div className="progress-fill" style={{ width: `${progress}%`, transition: 'width 0.4s ease' }} />
      </div>

      <h3 className="text-xl font-bold mb-6">{currentQ?.question}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
        {currentQ?.options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setSelected(opt.value)}
              className="p-4 rounded-xl text-left transition-all duration-200 text-sm font-medium"
              style={{
                border: `1px solid ${isSelected ? '#10b981' : 'rgba(255,255,255,0.08)'}`,
                background: isSelected ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.02)',
                color: isSelected ? '#fff' : '#9ca3af',
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        disabled={!selected}
        className="btn-primary w-full text-center"
        style={{ opacity: selected ? 1 : 0.4, cursor: selected ? 'pointer' : 'not-allowed' }}
      >
        <span>
          {step === total ? '🎯 Obtenir mes recommandations' : 'Question suivante →'}
        </span>
      </button>
    </div>
  );
}
