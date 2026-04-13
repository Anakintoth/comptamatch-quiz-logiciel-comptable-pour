export default function Home() {
  return (
    <main className="min-h-screen noise">
      {/* ═══ Navbar — glassmorphism ═══ */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <span className="text-xl font-bold tracking-tight">ComptaQuiz</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors duration-200">Fonctionnalites</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Tarifs</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
          </div>
          <a href="#pricing" className="btn-primary !text-sm !px-5 !py-2.5 !rounded-lg"><span>Commencer</span></a>
        </div>
      </nav>

      {/* ═══ Hero — floating orbs + gradient mesh ═══ */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center px-6">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="badge mb-8 reveal">
            📊 Disponible maintenant
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight reveal reveal-d1">
            <span className="gradient-text">ComptaQuiz</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed reveal reveal-d2">Maîtrisez la comptabilité, question par question</p>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto reveal reveal-d2">ComptaQuiz aide les comptables et étudiants à maîtriser les logiciels comptables grâce à des quiz interactifs ciblés et progressifs.</p>

          <div className="flex gap-4 justify-center flex-wrap reveal reveal-d3">
            <a href="#pricing" className="btn-primary"><span>📊 Commencer gratuitement</span></a>
            <a href="#features" className="btn-secondary">Decouvrir</a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-sm text-gray-600 reveal reveal-d4">
            <div className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#9679;</span> 500+ utilisateurs</div>
            <div className="flex items-center gap-2"><span style={{ color: "#2E86C1" }}>&#9679;</span> 4.9/5 satisfaction</div>
            <div className="flex items-center gap-2"><span style={{ color: "#27AE60" }}>&#9679;</span> Support 24/7</div>
          </div>
        </div>
      </section>

      {/* ═══ UI Mockup showcase ═══ */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="card glow p-1 rounded-2xl reveal">
            <div className="rounded-xl overflow-hidden" style={{ background: "#152B3C" }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "#1B4F7215" }}>
                <div className="w-3 h-3 rounded-full" style={{ background: "#f85149" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#d29922" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#3fb950" }} />
                <span className="ml-3 text-xs text-gray-600">comptaquiz.app</span>
              </div>
              <div className="p-8 space-y-4">
                <div className="h-4 rounded-full w-3/4" style={{ background: "#1B4F7215" }} />
                <div className="h-4 rounded-full w-1/2" style={{ background: "#1B4F7210" }} />
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="h-24 rounded-lg" style={{ background: "#1B4F7208", border: "1px solid #1B4F7215" }} />
                  <div className="h-24 rounded-lg" style={{ background: "#2E86C108", border: "1px solid #2E86C115" }} />
                  <div className="h-24 rounded-lg" style={{ background: "#27AE6008", border: "1px solid #27AE6015" }} />
                </div>
                <div className="h-4 rounded-full w-2/3 mt-4" style={{ background: "#1B4F7210" }} />
                <div className="h-4 rounded-full w-1/3" style={{ background: "#1B4F7208" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Features — bento grid ═══ */}
      <section id="features" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Fonctionnalites</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Tout ce qu&apos;il vous faut</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Des outils puissants, une experience fluide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card reveal reveal-d1">
              <p className="text-lg font-medium leading-relaxed">📝 Quiz adaptatifs sur tous les logiciels comptables majeurs</p>
            </div>
            <div className="card reveal reveal-d2">
              <p className="text-lg font-medium leading-relaxed">📈 Suivi de progression et tableau de bord personnalisé</p>
            </div>
            <div className="card reveal reveal-d3">
              <p className="text-lg font-medium leading-relaxed">🏆 Certifications et badges de compétences reconnus</p>
            </div>
            <div className="card reveal reveal-d4">
              <p className="text-lg font-medium leading-relaxed">🤝 Mode collaboratif pour équipes et cabinets comptables</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Pricing — animated gradient border on Pro ═══ */}
      <section id="pricing" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Tarifs</div>
            <h2 className="text-4xl font-bold mb-4">Simple et transparent</h2>
            <p className="text-gray-500">Commencez gratuitement. Evoluez quand vous etes pret.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Free */}
            <div className="card text-center reveal reveal-d1">
              <h3 className="font-bold text-lg mb-2">Découverte</h3>
              <div className="text-4xl font-extrabold mb-1">0<span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">Pour toujours</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Fonctions de base</li>
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> 5 utilisations / jour</li>
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Support communautaire</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Commencer</a>
            </div>
            {/* Pro — gradient border */}
            <div className="card gradient-border text-center relative glow reveal reveal-d2 md:-mt-4 md:pb-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg, #1B4F72, #2E86C1)", color: "white" }}>POPULAIRE</div>
              <h3 className="font-bold text-lg mb-2 mt-2">Expert</h3>
              <div className="text-5xl font-extrabold mb-1">9.99<span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Tout du plan Découverte</li>
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Utilisations illimitees</li>
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Support prioritaire</li>
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Export PDF / API</li>
              </ul>
              <a href="#" className="btn-primary w-full block text-center !text-sm"><span>Souscrire</span></a>
            </div>
            {/* Enterprise */}
            <div className="card text-center reveal reveal-d3">
              <h3 className="font-bold text-lg mb-2">Cabinet</h3>
              <div className="text-4xl font-extrabold mb-1">39.99<span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Tout du plan Expert</li>
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Multi-utilisateurs</li>
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> SLA garanti</li>
                <li className="flex items-center gap-2"><span style={{ color: "#1B4F72" }}>&#10003;</span> Integration sur mesure</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Testimonials — glass cards with avatars ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Temoignages</div>
            <h2 className="text-4xl font-bold">Ils nous font confiance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card reveal reveal-d1">
              <div className="flex gap-1 mb-4" style={{ color: "#27AE60" }}>*****</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"ComptaQuiz m'a permis de former mon équipe sur Sage en deux semaines. Un outil indispensable pour tout cabinet moderne."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#1B4F7220", color: "#1B4F72" }}>S</div>
                <div>
                  <p className="font-semibold text-sm">Sophie Marchand</p>
                  <p className="text-xs text-gray-500">Expert-comptable, Paris</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d2">
              <div className="flex gap-1 mb-4" style={{ color: "#27AE60" }}>*****</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"Grâce aux quiz progressifs, j'ai validé mes compétences sur QuickBooks avant mon stage. Je me suis senti vraiment préparé."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#1B4F7220", color: "#1B4F72" }}>T</div>
                <div>
                  <p className="font-semibold text-sm">Thomas Lebrun</p>
                  <p className="text-xs text-gray-500">Étudiant DCG, Lyon</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d3">
              <div className="flex gap-1 mb-4" style={{ color: "#27AE60" }}>*****</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"Le suivi de progression en temps réel nous a changé la vie. On sait exactement où chaque collaborateur en est dans sa montée en compétences."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#1B4F7220", color: "#1B4F72" }}>I</div>
                <div>
                  <p className="font-semibold text-sm">Isabelle Fontaine</p>
                  <p className="text-xs text-gray-500">Responsable formation, Bordeaux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — expandable glass cards ═══ */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-4xl font-bold">Questions frequentes</h2>
          </div>
          <div className="space-y-4">
            <details className="card group cursor-pointer reveal reveal-d1">
              <summary className="font-semibold list-none flex justify-between items-center">
                Quels logiciels comptables sont couverts par ComptaQuiz ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">ComptaQuiz couvre les principaux logiciels du marché français : Sage, Ciel, EBP, QuickBooks, Pennylane, et bien d'autres. Notre bibliothèque s'enrichit régulièrement.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d2">
              <summary className="font-semibold list-none flex justify-between items-center">
                Les certifications ComptaQuiz sont-elles reconnues par les employeurs ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Nos badges de compétences sont reconnus par un réseau croissant de cabinets partenaires. Ils attestent d'une maîtrise opérationnelle vérifiée des logiciels comptables.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d3">
              <summary className="font-semibold list-none flex justify-between items-center">
                Puis-je tester ComptaQuiz avant de m'abonner ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Oui, l'offre Découverte est gratuite et sans limite de durée. Elle vous donne accès à un large catalogue de quiz pour évaluer la plateforme à votre rythme.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA — glow card ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center card glow gradient-border reveal">
          <div className="py-4">
            <span className="text-4xl mb-6 block">📊</span>
            <h2 className="text-3xl font-bold mb-4">Pret a commencer ?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Maîtrisez la comptabilité, question par question</p>
            <a href="#pricing" className="btn-primary"><span>Essayer ComptaQuiz gratuitement</span></a>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="glass py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">📊</span>
            <span className="font-bold tracking-tight">ComptaQuiz</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Confidentialite</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-600">&copy; 2026 ComptaQuiz. Tous droits reserves.</p>
        </div>
      </footer>
    </main>
  );
}
