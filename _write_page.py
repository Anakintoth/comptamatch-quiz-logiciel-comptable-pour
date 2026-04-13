import os

path = r"C:\Users\Skusku\Desktop\claude_work\projects\comptamatch-quiz-logiciel-comptable-pour\app\page.tsx"

content = """\
'use client';

export default function Home() {
  return (
    <main className="min-h-screen noise">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">\u2696\ufe0f</span>
            <span className="text-xl font-bold tracking-tight">ComptaMatch</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#fonctionnement" className="hover:text-white transition-colors duration-200">Comment \u00e7a marche</a>
            <a href="#features" className="hover:text-white transition-colors duration-200">Fonctionnalit\u00e9s</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Tarifs</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
          </div>
          <a href="#pricing" className="btn-primary !text-sm !px-5 !py-2.5 !rounded-lg"><span>Commencer le quiz</span></a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-bg absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="badge mb-8 reveal">\u2728 2 400+ entreprises match\u00e9es</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight reveal reveal-d1">
            Votre logiciel comptable<br />
            <span className="gradient-text">id\u00e9al en 5 minutes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-3 max-w-2xl mx-auto leading-relaxed reveal reveal-d2">
            R\u00e9pondez \u00e0 notre quiz intelligent et d\u00e9couvrez parmi{' '}
            <strong className="text-white">50+ logiciels comptables</strong> celui qui correspond exactement \u00e0 votre activit\u00e9.
          </p>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto reveal reveal-d2">
            Sage, EBP, Pennylane, QuickBooks, Ciel\u2026 fini les heures de comparatifs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap reveal reveal-d3">
            <a href="#pricing" className="btn-primary"><span>\u2696\ufe0f D\u00e9marrer le quiz gratuitement</span></a>
            <a href="#fonctionnement" className="btn-secondary">Comment \u00e7a marche</a>
          </div>
          <div className="mt-14 flex justify-center gap-10 reveal reveal-d4 flex-wrap">
            <div className="stat-item">
              <span className="stat-number">2 400+</span>
              <span className="text-gray-500 text-xs">Entreprises match\u00e9es</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="text-gray-500 text-xs">Logiciels r\u00e9f\u00e9renc\u00e9s</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9/5</span>
              <span className="text-gray-500 text-xs">Satisfaction client</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5 min</span>
              <span className="text-gray-500 text-xs">Pour votre rapport</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup Quiz UI */}
      <section className="py-16 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="card glow p-1 rounded-2xl reveal">
            <div className="rounded-xl overflow-hidden" style={{ background: '#0d0d1a' }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: '#4f46e515' }}>
                <div className="w-3 h-3 rounded-full" style={{ background: '#f85149' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#d29922' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#3fb950' }} />
                <span className="ml-3 text-xs text-gray-600">comptamatch.fr/quiz</span>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 font-medium">Question 3 / 8</span>
                  <span className="text-xs" style={{ color: '#818cf8' }}>60% compl\u00e9t\u00e9</span>
                </div>
                <div className="h-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full" style={{ width: '60%', background: 'linear-gradient(90deg, #4f46e5, #10b981)' }} />
                </div>
                <p className="font-semibold text-lg text-white mb-5">Combien de transactions traitez-vous par mois\u00a0?</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl text-sm" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#94a3b8' }}>
                    <div className="font-semibold">Moins de 50</div>
                    <div className="text-xs opacity-70 mt-0.5">Micro-entreprise</div>
                  </div>
                  <div className="p-3 rounded-xl text-sm" style={{ background: '#4f46e520', border: '1px solid #4f46e560', color: '#a5b4fc' }}>
                    <div className="font-semibold">50 \u00e0 500</div>
                    <div className="text-xs opacity-70 mt-0.5">TPE / PME \u2713</div>
                  </div>
                  <div className="p-3 rounded-xl text-sm" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#94a3b8' }}>
                    <div className="font-semibold">500 \u00e0 5 000</div>
                    <div className="text-xs opacity-70 mt-0.5">ETI</div>
                  </div>
                  <div className="p-3 rounded-xl text-sm" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#94a3b8' }}>
                    <div className="font-semibold">Plus de 5 000</div>
                    <div className="text-xs opacity-70 mt-0.5">Grande entreprise</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-xs text-gray-600 hover:text-gray-400 transition-colors">\u2190 Pr\u00e9c\u00e9dent</button>
                  <div className="px-5 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>Suivant \u2192</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ca marche */}
      <section id="fonctionnement" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="badge mb-4">Processus</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">En 3 \u00e9tapes simples</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Un algorithme de matching pr\u00e9cis, con\u00e7u par des experts-comptables.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="spotlight-card p-7 reveal reveal-d1"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
                e.currentTarget.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="step-dot">1</div>
                <span className="text-2xl">\U0001f4cb</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">R\u00e9pondez au quiz</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Taille de structure, volume de transactions, besoins sp\u00e9cifiques (paie, TVA, stock, multi-devises). 8 questions cibl\u00e9es, 5 minutes maximum.</p>
            </div>
            <div
              className="spotlight-card p-7 reveal reveal-d2"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
                e.currentTarget.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="step-dot">2</div>
                <span className="text-2xl">\U0001f9e0</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">{"L\u2019algorithme analyse"}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Notre moteur compare vos r\u00e9ponses \u00e0 la base de 50+ logiciels\u00a0: fonctionnalit\u00e9s, prix, complexit\u00e9 et avis utilisateurs v\u00e9rifi\u00e9s.</p>
            </div>
            <div
              className="spotlight-card p-7 reveal reveal-d3"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
                e.currentTarget.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="step-dot">3</div>
                <span className="text-2xl">\U0001f4ca</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Recevez votre rapport</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Un rapport personnalis\u00e9 avec le TOP 3 des logiciels adapt\u00e9s, leurs scores d\u00e9taill\u00e9s, les points forts et les tarifs pratiqu\u00e9s.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="badge mb-4">Fonctionnalit\u00e9s</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Tout pour trouver le bon logiciel</h2>
            <p className="text-gray-500 max-w-xl mx-auto">ComptaMatch va bien au-del\u00e0 d&apos;un simple comparatif statique.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card reveal reveal-d1">
              <div className="feature-icon">\U0001f3af</div>
              <h3 className="font-bold text-lg mb-2 text-white">Quiz adaptatif intelligent</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Les questions s&apos;adaptent en temps r\u00e9el \u00e0 votre profil. Micro-entrepreneur, PME, cabinet ou grande entreprise\u00a0: chaque parcours est unique et cibl\u00e9 sur vos vrais besoins.</p>
            </div>
            <div className="card reveal reveal-d2">
              <div className="feature-icon">\U0001f504</div>
              <h3 className="font-bold text-lg mb-2 text-white">Comparaison multi-crit\u00e8res</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Analysez jusqu&apos;\u00e0 10 logiciels en parall\u00e8le sur 30+ crit\u00e8res\u00a0: gestion de TVA, facturation \u00e9lectronique, connecteurs bancaires, support technique et rapport qualit\u00e9-prix.</p>
            </div>
            <div className="card reveal reveal-d3">
              <div className="feature-icon">\U0001f4c8</div>
              <h3 className="font-bold text-lg mb-2 text-white">Rapport personnalis\u00e9 PDF</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Recevez un rapport complet avec les scores de compatibilit\u00e9, les forces et faiblesses de chaque solution, les tarifs actualis\u00e9s et les liens vers les offres d&apos;essai gratuit.</p>
            </div>
            <div className="card reveal reveal-d4">
              <div className="feature-icon">\U0001f3c6</div>
              <h3 className="font-bold text-lg mb-2 text-white">Base de 50+ logiciels \u00e0 jour</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Sage, EBP, Ciel, Pennylane, QuickBooks, Evoliz, Indy, Tiime, Axonaut\u2026 Chaque fiche est mise \u00e0 jour mensuellement par nos experts-comptables partenaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="badge mb-4">Tarifs</div>
            <h2 className="text-4xl font-extrabold mb-4">Simple et transparent</h2>
            <p className="text-gray-500">Commencez gratuitement. Acc\u00e9dez au rapport complet en quelques secondes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="card text-center reveal reveal-d1">
              <h3 className="font-bold text-lg mb-1">D\u00e9couverte</h3>
              <div className="text-4xl font-extrabold mb-1 text-white">0 <span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">Pour toujours</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Quiz complet (8 questions)</li>
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Top 1 logiciel recommand\u00e9</li>
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Score de compatibilit\u00e9</li>
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Lien vers l&apos;offre d&apos;essai</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Commencer</a>
            </div>
            <div className="card gradient-border text-center relative glow reveal reveal-d2 md:-mt-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', color: 'white' }}>POPULAIRE</div>
              <h3 className="font-bold text-lg mb-1 mt-2 text-white">Pro</h3>
              <div className="text-5xl font-extrabold mb-1 text-white">9<span className="text-2xl">.99</span> <span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: '#10b981' }}>\u2713</span> Tout du plan D\u00e9couverte</li>
                <li className="flex items-center gap-2"><span style={{ color: '#10b981' }}>\u2713</span> Top 5 logiciels + comparatif</li>
                <li className="flex items-center gap-2"><span style={{ color: '#10b981' }}>\u2713</span> Rapport PDF t\u00e9l\u00e9chargeable</li>
                <li className="flex items-center gap-2"><span style={{ color: '#10b981' }}>\u2713</span> Comparaison multi-crit\u00e8res</li>
                <li className="flex items-center gap-2"><span style={{ color: '#10b981' }}>\u2713</span> Quiz illimit\u00e9s</li>
                <li className="flex items-center gap-2"><span style={{ color: '#10b981' }}>\u2713</span> Support par email</li>
              </ul>
              <a href="#" className="btn-primary w-full block text-center !text-sm"><span>Souscrire maintenant</span></a>
            </div>
            <div className="card text-center reveal reveal-d3">
              <h3 className="font-bold text-lg mb-1">Entreprise</h3>
              <div className="text-4xl font-extrabold mb-1 text-white">29<span className="text-xl">.99</span> <span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Tout du plan Pro</li>
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Acc\u00e8s multi-utilisateurs</li>
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Quiz sur-mesure (API)</li>
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Rapport en marque blanche</li>
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Support d\u00e9di\u00e9 + SLA</li>
                <li className="flex items-center gap-2"><span style={{ color: '#818cf8' }}>\u2713</span> Int\u00e9gration CRM / cabinet</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Nous contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="badge mb-4">T\u00e9moignages</div>
            <h2 className="text-4xl font-extrabold">Ils ont trouv\u00e9 leur logiciel</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card reveal reveal-d1">
              <div className="stars text-sm mb-4">\u2605\u2605\u2605\u2605\u2605</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;J&rsquo;h\u00e9sitais entre Sage et Pennylane depuis des mois. ComptaMatch a tranch\u00e9 en 5 minutes avec un rapport clair. J&rsquo;ai choisi Pennylane et je ne regrette pas.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: '#4f46e520', color: '#818cf8' }}>ML</div>
                <div>
                  <p className="font-semibold text-sm text-white">Marc Lefebvre</p>
                  <p className="text-xs text-gray-500">Directeur Financier, PME 30 salari\u00e9s</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d2">
              <div className="stars text-sm mb-4">\u2605\u2605\u2605\u2605\u2605</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;En tant qu&rsquo;expert-comptable, je recommande ComptaMatch \u00e0 tous mes nouveaux clients. \u00c7a me fait \u00e9conomiser une consultation enti\u00e8re et les recommandations sont pertinentes.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: '#7c3aed20', color: '#a78bfa' }}>CM</div>
                <div>
                  <p className="font-semibold text-sm text-white">Claire Moreau</p>
                  <p className="text-xs text-gray-500">Expert-Comptable, Cabinet CM Associ\u00e9s</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d3">
              <div className="stars text-sm mb-4">\u2605\u2605\u2605\u2605\u2605</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;J&rsquo;ai cr\u00e9\u00e9 mon auto-entreprise il y a 3 mois. Le quiz m&rsquo;a orient\u00e9 vers Indy en quelques minutes \u2014 parfait pour mon profil et mon budget.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: '#10b98120', color: '#34d399' }}>SB</div>
                <div>
                  <p className="font-semibold text-sm text-white">Sophie Bertin</p>
                  <p className="text-xs text-gray-500">Auto-entrepreneuse, Graphiste</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-4xl font-extrabold">Questions fr\u00e9quentes</h2>
          </div>
          <div className="space-y-4">
            <details className="card cursor-pointer reveal reveal-d1">
              <summary className="font-semibold list-none flex justify-between items-center cursor-pointer">
                Comment fonctionne l&apos;algorithme de matching\u00a0?
                <span className="faq-icon text-gray-500 text-xl font-light">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">Notre algorithme compare vos r\u00e9ponses \u00e0 une matrice de 30+ crit\u00e8res pour chacun des 50+ logiciels r\u00e9f\u00e9renc\u00e9s. Chaque crit\u00e8re est pond\u00e9r\u00e9 selon votre type de structure. Le score final refl\u00e8te le taux de compatibilit\u00e9 r\u00e9el avec votre activit\u00e9.</p>
            </details>
            <details className="card cursor-pointer reveal reveal-d2">
              <summary className="font-semibold list-none flex justify-between items-center cursor-pointer">
                Les recommandations sont-elles objectives et ind\u00e9pendantes\u00a0?
                <span className="faq-icon text-gray-500 text-xl font-light">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">Absolument. ComptaMatch ne per\u00e7oit aucune commission des \u00e9diteurs r\u00e9f\u00e9renc\u00e9s. Nos fiches sont r\u00e9dig\u00e9es par des experts-comptables ind\u00e9pendants. Notre seul objectif est de vous orienter vers la solution objectivement la plus adapt\u00e9e.</p>
            </details>
            <details className="card cursor-pointer reveal reveal-d3">
              <summary className="font-semibold list-none flex justify-between items-center cursor-pointer">
                Puis-je refaire le quiz si mes besoins \u00e9voluent\u00a0?
                <span className="faq-icon text-gray-500 text-xl font-light">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">Oui, les quiz sont illimit\u00e9s pour les abonn\u00e9s Pro et Entreprise. Si vous passez de micro-entrepreneur \u00e0 SAS ou si vous recrutez et avez besoin de la gestion de paie, refaites le quiz pour une recommandation actualis\u00e9e.</p>
            </details>
            <details className="card cursor-pointer reveal reveal-d4">
              <summary className="font-semibold list-none flex justify-between items-center cursor-pointer">
                Quels logiciels sont r\u00e9f\u00e9renc\u00e9s dans ComptaMatch\u00a0?
                <span className="faq-icon text-gray-500 text-xl font-light">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">Plus de 50 solutions\u00a0: Sage 50, Sage 100, EBP Compta, Ciel Compta, Pennylane, QuickBooks, Indy, Tiime, Evoliz, Axonaut, MyUnisoft, Cegid, Divalto, et bien d&apos;autres. La base est mise \u00e0 jour chaque mois.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center card glow gradient-border reveal">
          <div className="py-6">
            <span className="text-5xl mb-5 block">\u2696\ufe0f</span>
            <h2 className="text-3xl font-extrabold mb-4 text-white">Pr\u00eat \u00e0 trouver votre logiciel comptable\u00a0?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
              Rejoignez 2\u202f400+ entreprises qui ont fait le bon choix gr\u00e2ce \u00e0 ComptaMatch. Quiz gratuit, r\u00e9sultat imm\u00e9diat.
            </p>
            <a href="#pricing" className="btn-primary text-base"><span>\u2696\ufe0f Faire le quiz gratuitement</span></a>
            <p className="text-xs text-gray-600 mt-4">Sans inscription \u00b7 Sans carte bancaire \u00b7 R\u00e9sultat en 5 minutes</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass py-12 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">\u2696\ufe0f</span>
                <span className="font-bold tracking-tight text-white">ComptaMatch</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">Votre logiciel comptable id\u00e9al en 5 minutes. Le matching intelligent pour trouver la solution parfaite.</p>
            </div>
            <div className="flex gap-12 text-sm">
              <div>
                <p className="text-white font-semibold mb-3">Produit</p>
                <div className="space-y-2 text-gray-500">
                  <a href="#fonctionnement" className="block hover:text-white transition-colors">Comment \u00e7a marche</a>
                  <a href="#features" className="block hover:text-white transition-colors">Fonctionnalit\u00e9s</a>
                  <a href="#pricing" className="block hover:text-white transition-colors">Tarifs</a>
                </div>
              </div>
              <div>
                <p className="text-white font-semibold mb-3">L\u00e9gal</p>
                <div className="space-y-2 text-gray-500">
                  <a href="#" className="block hover:text-white transition-colors">Confidentialit\u00e9</a>
                  <a href="#" className="block hover:text-white transition-colors">CGU</a>
                  <a href="#" className="block hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="text-sm text-gray-600">\u00a9 2026 ComptaMatch. Tous droits r\u00e9serv\u00e9s.</p>
            <p className="text-xs text-gray-700">Recommandations ind\u00e9pendantes \u00b7 Donn\u00e9es h\u00e9berg\u00e9es en France</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
"""

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Written successfully")
