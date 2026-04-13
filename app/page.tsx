'use client';

import { useState, useEffect, useRef } from 'react';

/* ══════════════════════════════════
   Quiz data
══════════════════════════════════ */
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Quelle est la taille de votre structure ?',
    emoji: '🏢',
    options: [
      { label: 'Indépendant / Freelance', icon: '👤' },
      { label: 'TPE (1–9 salariés)', icon: '🏪' },
      { label: 'PME (10–250 salariés)', icon: '🏗️' },
      { label: 'Grande entreprise / Cabinet', icon: '🏦' },
    ],
  },
  {
    id: 2,
    question: "Quel est votre secteur d'activité ?",
    emoji: '🎯',
    options: [
      { label: 'Commerce / Distribution', icon: '🛒' },
      { label: 'Services / Conseil', icon: '💼' },
      { label: 'Industrie / Production', icon: '⚙️' },
      { label: 'BTP / Artisanat', icon: '🔨' },
    ],
  },
  {
    id: 3,
    question: 'Quel est votre budget mensuel ?',
    emoji: '💶',
    options: [
      { label: 'Gratuit uniquement', icon: '🆓' },
      { label: 'Moins de 50 €/mois', icon: '💰' },
      { label: '50 – 200 €/mois', icon: '💳' },
      { label: 'Plus de 200 €/mois', icon: '🏆' },
    ],
  },
  {
    id: 4,
    question: 'Quelle est votre priorité absolue ?',
    emoji: '⭐',
    options: [
      { label: "Facilité d'utilisation", icon: '🎈' },
      { label: 'Fonctionnalités avancées', icon: '🔬' },
      { label: 'Intégrations (e-commerce, CRM…)', icon: '🔗' },
      { label: 'Support et accompagnement', icon: '🤝' },
    ],
  },
  {
    id: 5,
    question: 'Qui gère la comptabilité chez vous ?',
    emoji: '👩‍💼',
    options: [
      { label: 'Moi-même, sans expertise comptable', icon: '🙋' },
      { label: 'Un comptable interne', icon: '📊' },
      { label: 'Un cabinet expert-comptable', icon: '🏛️' },
      { label: 'Une équipe dédiée', icon: '👥' },
    ],
  },
];

/* ══════════════════════════════════
   QuizSection component
══════════════════════════════════ */
function QuizSection() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'loading' | 'result'>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const progress = ((currentQ + (selected !== null ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100;

  function handleSelect(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, QUIZ_QUESTIONS[currentQ].options[selected].label];

    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setSelected(null);
      setCurrentQ(currentQ + 1);
    } else {
      // Submit
      setAnswers(newAnswers);
      submitQuiz(newAnswers);
    }
  }

  async function submitQuiz(finalAnswers: string[]) {
    setStep('loading');
    setResult('');

    const prompt = QUIZ_QUESTIONS.map((q, i) =>
      `${q.question}\nRéponse : ${finalAnswers[i]}`
    ).join('\n\n') +
      '\n\nEn te basant sur ces réponses, recommande le ou les logiciels comptables français les plus adaptés. Explique pourquoi chaque logiciel correspond au profil, mentionne 1-2 points forts clés et le tarif approximatif. Sois précis, structuré et pratique (3-4 paragraphes max).';

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok || !res.body) throw new Error('API error');

      setStep('result');
      setIsStreaming(true);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setResult(text);
        if (resultRef.current) {
          resultRef.current.scrollTop = resultRef.current.scrollHeight;
        }
      }
      setIsStreaming(false);
    } catch {
      setStep('result');
      setResult("Une erreur est survenue. Veuillez réessayer dans quelques instants.");
      setIsStreaming(false);
    }
  }

  function reset() {
    setStep('intro');
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setResult('');
    setIsStreaming(false);
  }

  if (step === 'intro') {
    return (
      <div className="text-center">
        <div className="feature-icon mx-auto" style={{ width: 72, height: 72, fontSize: '2rem', borderRadius: 20 }}>🎯</div>
        <h3 className="text-2xl font-bold mt-4 mb-3">Trouvez votre logiciel idéal en 2 minutes</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
          Répondez à 5 questions sur votre activité et notre IA analyse votre profil pour vous recommander le logiciel comptable parfait.
        </p>
        <div className="flex gap-3 justify-center flex-wrap text-sm text-gray-500 mb-8">
          <span className="flex items-center gap-1.5"><span style={{ color: '#2E9E72' }}>✓</span> 5 questions seulement</span>
          <span className="flex items-center gap-1.5"><span style={{ color: '#2E9E72' }}>✓</span> Recommandation IA personnalisée</span>
          <span className="flex items-center gap-1.5"><span style={{ color: '#2E9E72' }}>✓</span> 100% gratuit</span>
        </div>
        <button onClick={() => setStep('quiz')} className="btn-primary">
          <span>Démarrer le quiz</span>
        </button>
      </div>
    );
  }

  if (step === 'quiz') {
    const q = QUIZ_QUESTIONS[currentQ];
    return (
      <div>
        {/* Progress */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500 font-medium">Question {currentQ + 1} / {QUIZ_QUESTIONS.length}</span>
          <span className="text-xs font-semibold" style={{ color: '#2E9E72' }}>{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar mb-8">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Question */}
        <div className="mb-7">
          <span className="text-2xl">{q.emoji}</span>
          <h3 className="text-xl font-bold mt-2">{q.question}</h3>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`quiz-option w-full text-left${selected === i ? ' selected' : ''}`}
              onClick={() => handleSelect(i)}
            >
              <span className="text-xl">{opt.icon}</span>
              <span className="font-medium text-sm">{opt.label}</span>
              {selected === i && (
                <span className="ml-auto text-xs font-bold" style={{ color: '#2E9E72' }}>✓</span>
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          {currentQ > 0 && (
            <button
              onClick={() => { setCurrentQ(currentQ - 1); setSelected(null); }}
              className="btn-secondary !px-5 !py-3 !text-sm"
            >
              ← Retour
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="btn-primary flex-1"
            style={{ opacity: selected === null ? 0.45 : 1, cursor: selected === null ? 'not-allowed' : 'pointer' }}
          >
            <span>{currentQ === QUIZ_QUESTIONS.length - 1 ? 'Obtenir ma recommandation IA →' : 'Suivant →'}</span>
          </button>
        </div>
      </div>
    );
  }

  if (step === 'loading') {
    return (
      <div className="text-center py-8">
        <div className="spinner mx-auto mb-6" />
        <p className="text-gray-300 font-semibold mb-2">Analyse de votre profil en cours…</p>
        <p className="text-gray-500 text-sm">Notre IA compare votre profil avec 20+ logiciels du marché</p>
      </div>
    );
  }

  // Result
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: 'rgba(46,158,114,0.15)', border: '1px solid rgba(46,158,114,0.3)' }}>✨</div>
        <div>
          <p className="font-bold">Votre recommandation personnalisée</p>
          <p className="text-xs text-gray-500">Générée par IA · Basée sur votre profil</p>
        </div>
      </div>

      <div
        ref={resultRef}
        className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto pr-2 mb-6"
        style={{ scrollbarWidth: 'thin' }}
      >
        {result}
        {isStreaming && <span className="stream-cursor" />}
      </div>

      {!isStreaming && (
        <div className="flex gap-3 flex-wrap">
          <button onClick={reset} className="btn-secondary !text-sm !px-5 !py-2.5">
            ↺ Recommencer
          </button>
          <a href="#pricing" className="btn-primary !text-sm !px-5 !py-2.5">
            <span>Voir les offres →</span>
          </a>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════
   Main page
══════════════════════════════════ */
export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen noise">

      {/* ══ NAVBAR ══ */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${navScrolled ? 'glass-strong py-3' : 'py-5'}`}
        style={{ borderBottom: navScrolled ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black" style={{ background: 'linear-gradient(135deg,#1A6B4A,#2E9E72)' }}>C</div>
            <span className="text-lg font-extrabold tracking-tight">ComptaQuiz</span>
          </div>
          <div className="hidden md:flex gap-7 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors duration-200 font-medium">Fonctionnalités</a>
            <a href="#quiz" className="hover:text-white transition-colors duration-200 font-medium">Quiz IA</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200 font-medium">Tarifs</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200 font-medium">FAQ</a>
          </div>
          <a href="#quiz" className="btn-primary !px-5 !py-2 !text-sm !rounded-xl">
            <span>Essayer gratuitement</span>
          </a>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="badge float-badge mb-8 reveal">
            🚀 Recommandation IA en temps réel
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[1.05] tracking-tighter reveal reveal-d1">
            <span className="gradient-text">Le quiz qui trouve</span>
            <br />
            <span className="text-white">votre logiciel parfait</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-3 max-w-2xl mx-auto leading-relaxed reveal reveal-d2">
            Répondez à 5 questions. Notre IA analyse votre profil et vous recommande
            le logiciel comptable idéal parmi Sage, Cegid, QuickBooks, EBP et bien d&apos;autres.
          </p>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto text-sm reveal reveal-d2">
            Des certifications reconnues. Un tableau de bord de progression. Pour les professionnels et les étudiants.
          </p>

          <div className="flex gap-4 justify-center flex-wrap reveal reveal-d3">
            <a href="#quiz" className="btn-primary !text-base">
              <span>🎯 Démarrer le quiz IA</span>
            </a>
            <a href="#features" className="btn-secondary !text-base">Découvrir →</a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex justify-center gap-10 reveal reveal-d4">
            <div className="stat-item">
              <span className="stat-number">2 500+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">utilisateurs</span>
            </div>
            <div className="w-px bg-white opacity-5 self-stretch" />
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">satisfaction</span>
            </div>
            <div className="w-px bg-white opacity-5 self-stretch" />
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">logiciels couverts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MOCKUP BROWSER ══ */}
      <section className="py-12 px-6 relative">
        <div className="max-w-3xl mx-auto reveal">
          <div className="browser-chrome glow-sm">
            <div className="browser-bar">
              <div className="browser-dot" style={{ background: '#f85149' }} />
              <div className="browser-dot" style={{ background: '#d29922' }} />
              <div className="browser-dot" style={{ background: '#3fb950' }} />
              <div className="browser-url">comptaquiz.app/quiz</div>
            </div>
            <div className="p-8" style={{ background: 'linear-gradient(180deg, #0A1810 0%, #080F0C 100%)' }}>
              {/* Fake quiz UI */}
              <div className="mb-5">
                <div className="flex justify-between text-xs text-gray-600 mb-2">
                  <span>Question 3 / 5</span>
                  <span style={{ color: '#2E9E72' }}>60%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '60%' }} />
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-4">💶 Quel est votre budget mensuel ?</div>
              <div className="space-y-2.5">
                {['Gratuit uniquement', 'Moins de 50 €/mois', '50 – 200 €/mois', 'Plus de 200 €/mois'].map((opt, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs"
                    style={{
                      border: i === 2 ? '1px solid #2E9E72' : '1px solid rgba(255,255,255,0.06)',
                      background: i === 2 ? 'rgba(46,158,114,0.1)' : 'rgba(255,255,255,0.02)',
                      color: i === 2 ? '#e2e8f0' : '#6B7280',
                    }}
                  >
                    <span>{['🆓','💰','💳','🏆'][i]}</span>
                    <span>{opt}</span>
                    {i === 2 && <span className="ml-auto" style={{ color: '#2E9E72' }}>✓</span>}
                  </div>
                ))}
              </div>
              <div className="mt-5 h-8 w-36 rounded-xl" style={{ background: 'linear-gradient(135deg,#1A6B4A,#2E9E72)', opacity: 0.85 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="features" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Fonctionnalités</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Conçu pour les pros de la compta
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">Des outils précis, des contenus vérifiés par des experts-comptables certifiés.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="card reveal reveal-d1">
              <div className="feature-icon">📋</div>
              <h3 className="font-bold text-lg mb-2">Quiz adaptatifs multi-logiciels</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Sage 50/100, Cegid Quadratus, QuickBooks, EBP, Pennylane — 500+ questions élaborées avec des experts-comptables pour coller à la réalité terrain.</p>
            </div>
            <div className="card reveal reveal-d2">
              <div className="feature-icon">🤖</div>
              <h3 className="font-bold text-lg mb-2">Recommandation IA personnalisée</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Notre IA analyse votre secteur, votre taille d&apos;entreprise et votre budget pour vous orienter vers les logiciels les mieux adaptés à votre situation.</p>
            </div>
            <div className="card reveal reveal-d3">
              <div className="feature-icon">🏆</div>
              <h3 className="font-bold text-lg mb-2">Certifications valorisantes</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Décrochez des certifications reconnues par un réseau de 300+ cabinets partenaires. Ajoutez-les directement à votre profil LinkedIn.</p>
            </div>
            <div className="card reveal reveal-d4">
              <div className="feature-icon">📈</div>
              <h3 className="font-bold text-lg mb-2">Tableau de bord de progression</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Suivez vos scores par logiciel, identifiez vos lacunes, et recevez des recommandations de révision ciblées pour progresser efficacement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTERACTIVE QUIZ ══ */}
      <section id="quiz" className="py-28 px-6 relative">
        <div className="grid-bg absolute inset-0 pointer-events-none opacity-40" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="badge badge-accent mb-4">Quiz IA</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Votre recommandation <span className="gradient-text">en temps réel</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">5 questions. Une recommandation IA précise. Gratuit et instantané.</p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="card glow gradient-border reveal">
              <QuizSection />
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section id="pricing" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Tarifs</div>
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Simple et transparent</h2>
            <p className="text-gray-500">Commencez gratuitement. Évoluez quand vous êtes prêt.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            {/* Découverte */}
            <div className="card text-center reveal reveal-d1">
              <h3 className="font-bold text-lg mb-2">Découverte</h3>
              <div className="text-4xl font-black mb-1 mt-4">
                0<span className="text-lg font-normal text-gray-500"> €</span>
              </div>
              <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">Pour toujours</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                {['Quiz gratuits illimités', '5 recommandations IA / mois', 'Tableau de bord basique', 'Support communautaire'].map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-xs" style={{ color: '#2E9E72' }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#quiz" className="btn-secondary w-full !text-sm !py-3">Commencer</a>
            </div>

            {/* Pro */}
            <div className="card gradient-border text-center relative glow reveal reveal-d2 md:-mt-5 md:pb-12">
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase"
                style={{ background: 'linear-gradient(135deg,#1A6B4A,#2E9E72)', color: 'white' }}
              >
                ⭐ Populaire
              </div>
              <h3 className="font-bold text-lg mb-2 mt-4">Expert</h3>
              <div className="text-5xl font-black mb-1 mt-4" style={{ background: 'linear-gradient(135deg,#2E9E72,#06D6A0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                9.99
              </div>
              <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">€ / mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                {['Tout du plan Découverte', 'Recommandations IA illimitées', 'Certifications premium', 'Export PDF & partage LinkedIn', 'Support prioritaire 24h'].map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-xs" style={{ color: '#2E9E72' }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-primary w-full !text-sm !py-3"><span>Souscrire maintenant</span></a>
            </div>

            {/* Cabinet */}
            <div className="card text-center reveal reveal-d3">
              <h3 className="font-bold text-lg mb-2">Cabinet</h3>
              <div className="text-4xl font-black mb-1 mt-4">
                29.99<span className="text-lg font-normal text-gray-500"> €</span>
              </div>
              <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">€ / mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                {['Tout du plan Expert', 'Jusqu\'à 20 utilisateurs', 'Tableau de bord équipe', 'Évaluation candidats (RH)', 'SLA & intégration sur mesure'].map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-xs" style={{ color: '#2E9E72' }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-secondary w-full !text-sm !py-3">Contacter l&apos;équipe</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Témoignages</div>
            <h2 className="text-4xl font-extrabold tracking-tight">Ils ont trouvé leur logiciel</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                text: "\"Le quiz ComptaQuiz m'a orientée vers Pennylane en 2 minutes. Un conseil que j'aurais mis des heures à trouver seule. Et la recommandation était parfaite pour mon profil freelance.\"",
                name: 'Sophie Marchand',
                role: 'Consultante indépendante, Paris',
                init: 'S',
              },
              {
                text: '"On utilise ComptaQuiz pour pré-qualifier nos candidats en entretien. Le score sur Cegid et Sage nous donne un indicateur objectif et fiable. Gain de temps énorme pour notre cabinet."',
                name: 'Julien Perrot',
                role: 'Directeur associé, Cabinet BDM',
                init: 'J',
              },
              {
                text: "\"J'ai passé la certification Sage 100 grâce aux quiz. Les questions sont vraiment représentatives de ce qu'on retrouve sur le logiciel. Ça m'a aidé à décrocher mon poste.\"",
                name: 'Amina Belkadi',
                role: 'Étudiante DCG, Lyon',
                init: 'A',
              },
            ].map((t, i) => (
              <div key={i} className={`card reveal reveal-d${i + 1}`}>
                <div className="stars text-sm mb-4">★★★★★</div>
                <p className="text-gray-300 text-sm italic mb-6 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: 'rgba(26,107,74,0.18)', color: '#2E9E72', border: '1px solid rgba(46,158,114,0.25)' }}
                  >
                    {t.init}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-4xl font-extrabold tracking-tight">Questions fréquentes</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'Quels logiciels comptables le quiz couvre-t-il ?',
                a: 'ComptaQuiz couvre 20+ logiciels dont Sage 50/100, Cegid Quadratus, QuickBooks, EBP Comptabilité, Pennylane, Evoliz, Indy et bien d\'autres. Notre catalogue s\'enrichit chaque trimestre en partenariat avec les éditeurs.',
              },
              {
                q: 'Comment fonctionne la recommandation IA ?',
                a: 'Notre IA analyse vos 5 réponses (taille, secteur, budget, priorité, équipe) et les compare avec les caractéristiques de chaque logiciel. Elle génère une recommandation personnalisée en temps réel, avec des justifications claires et des tarifs indicatifs.',
              },
              {
                q: 'Les certifications ComptaQuiz sont-elles reconnues ?',
                a: 'Nos certifications sont reconnues par un réseau de 300+ cabinets et entreprises partenaires. Elles sont intégrables directement sur LinkedIn et constituent un atout concret lors d\'entretiens ou d\'évaluations de candidats.',
              },
              {
                q: 'Puis-je utiliser ComptaQuiz pour évaluer mes collaborateurs ?',
                a: 'Oui, l\'offre Cabinet (à partir de 29.99 €/mois) permet de gérer jusqu\'à 20 utilisateurs, de consulter leurs scores par logiciel et de générer des rapports d\'équipe. Idéal pour les cabinets d\'expertise et les DAF.',
              },
            ].map((item, i) => (
              <details key={i} className={`card-flat group cursor-pointer reveal reveal-d${i + 1}`} style={{ transition: 'all 0.3s ease' }}>
                <summary className="font-semibold list-none flex justify-between items-center gap-4 py-1">
                  <span className="text-sm">{item.q}</span>
                  <span
                    className="text-xl flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                    style={{ color: '#2E9E72' }}
                  >+</span>
                </summary>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center card glow gradient-border reveal">
          <div className="py-6">
            <span className="text-5xl mb-6 block float-badge">📊</span>
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
              Prêt à trouver votre logiciel parfait ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed text-sm">
              Rejoignez 2 500+ professionnels qui ont déjà trouvé leur logiciel comptable idéal grâce à l&apos;IA de ComptaQuiz.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#quiz" className="btn-primary">
                <span>🎯 Lancer le quiz IA — c&apos;est gratuit</span>
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-6">Aucune carte bancaire requise · Résultat immédiat · 2 minutes chrono</p>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="glass py-12 px-6">
        <div className="divider mb-12" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: 'linear-gradient(135deg,#1A6B4A,#2E9E72)' }}>C</div>
            <span className="font-extrabold tracking-tight">ComptaQuiz</span>
            <span className="text-gray-600 text-xs ml-1">— Trouvez votre logiciel parfait</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 ComptaQuiz. Tous droits réservés.</p>
        </div>
      </footer>

    </main>
  );
}
