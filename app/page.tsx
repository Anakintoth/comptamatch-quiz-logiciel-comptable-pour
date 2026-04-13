'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Spotlight card mouse tracking
    const cards = document.querySelectorAll<HTMLElement>('.spotlight-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
      });
    });
  }, []);

  return (
    <main className="min-h-screen noise">

      {/* ═══ Navbar — glassmorphism ═══ */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <span className="text-xl font-bold tracking-tight">BalanceIQ</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors duration-200">Fonctionnalités</a>
            <a href="#pricing"  className="hover:text-white transition-colors duration-200">Tarifs</a>
            <a href="#faq"      className="hover:text-white transition-colors duration-200">FAQ</a>
          </div>
          <a href="#pricing" className="btn-primary !text-sm !px-5 !py-2.5 !rounded-lg !text-base font-semibold">
            <span>Commencer</span>
          </a>
        </div>
      </nav>

      {/* ═══ Hero — floating orbs + gradient mesh ═══ */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-bg absolute inset-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="badge badge-float mb-8 reveal">
            📊 Nouveau — Quiz adaptatifs par logiciel
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[1.08] tracking-tight reveal reveal-d1">
            <span className="gradient-text">Maîtrisez votre</span>
            <br />
            <span className="gradient-text">logiciel comptable</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed reveal reveal-d2">
            Des quiz interactifs pour former vos équipes sur Sage, Cegid, EBP et tous les grands logiciels comptables français.
          </p>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto reveal reveal-d2">
            Algorithme de révision espacée · Cas pratiques réels · Suivi de progression individuel
          </p>

          <div className="flex gap-4 justify-center flex-wrap reveal reveal-d3">
            <a href="#pricing" className="btn-primary">
              <span>📊 Essayer gratuitement</span>
            </a>
            <a href="#features" className="btn-secondary">Voir les fonctionnalités</a>
          </div>

          {/* Social proof stats */}
          <div className="mt-16 flex justify-center gap-10 flex-wrap reveal reveal-d4">
            <div className="stat-item">
              <span className="stat-number">2 400+</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider">Comptables formés</span>
            </div>
            <div className="w-px bg-white/5 hidden md:block" />
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider">Taux de satisfaction</span>
            </div>
            <div className="w-px bg-white/5 hidden md:block" />
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider">Logiciels couverts</span>
            </div>
            <div className="w-px bg-white/5 hidden md:block" />
            <div className="stat-item">
              <span className="stat-number">10 j</span>
              <span className="text-xs text-gray-600 uppercase tracking-wider">Maîtrise garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ UI Mockup — fake browser ═══ */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="card glow p-1 rounded-2xl reveal">
            <div className="rounded-xl overflow-hidden" style={{ background: '#080720' }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: '#4f46e515' }}>
                <div className="browser-dot-red" />
                <div className="browser-dot-amber" />
                <div className="browser-dot-green" />
                <div className="ml-4 flex-1 flex justify-center">
                  <div className="bg-black/20 rounded-md px-4 py-1 text-xs text-gray-600 w-56 text-center">
                    app.balanceiq.fr — Sage 100 · Module Saisie
                  </div>
                </div>
              </div>
              {/* Fake UI */}
              <div className="p-8">
                {/* Quiz header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="h-3 rounded-full w-40 mb-2" style={{ background: '#4f46e518' }} />
                    <div className="h-2 rounded-full w-24" style={{ background: '#4f46e510' }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: '#4f46e520', color: '#818cf8' }}>
                      Question 4 / 10
                    </div>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="progress-bar mb-6">
                  <div className="progress-fill" style={{ width: '40%' }} />
                </div>
                {/* Fake question */}
                <div className="rounded-xl p-5 mb-5" style={{ background: '#4f46e508', border: '1px solid #4f46e518' }}>
                  <div className="h-3 rounded-full w-5/6 mb-2" style={{ background: '#4f46e515' }} />
                  <div className="h-3 rounded-full w-3/4" style={{ background: '#4f46e510' }} />
                </div>
                {/* Answer choices */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { w: '80%', active: true },
                    { w: '65%', active: false },
                    { w: '70%', active: false },
                    { w: '60%', active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-3 flex items-center gap-3"
                      style={{
                        background: item.active ? '#4f46e518' : '#4f46e508',
                        border: `1px solid ${item.active ? '#6366f135' : '#4f46e512'}`,
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0"
                        style={{
                          background: item.active ? '#6366f1' : 'transparent',
                          border: `2px solid ${item.active ? '#6366f1' : '#4f46e530'}`,
                        }}
                      />
                      <div className="h-2.5 rounded-full" style={{ background: '#4f46e520', width: item.w }} />
                    </div>
                  ))}
                </div>
                {/* Next button */}
                <div className="mt-5 flex justify-end">
                  <div className="h-9 w-28 rounded-lg" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Features — bento grid ═══ */}
      <section id="features" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Fonctionnalités</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Tout ce qu&apos;il faut pour former<br />vos équipes comptables
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Une plateforme pensée pour les cabinets d&apos;expertise-comptable, DAF et équipes finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="card spotlight-card reveal reveal-d1">
              <div className="feature-emoji">🎯</div>
              <h3 className="text-lg font-bold mb-2">Quiz adaptatifs par module</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Des tests ciblés sur chaque module — saisie, rapprochement bancaire, clôture, TVA — avec difficulté progressive selon vos réponses.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#4f46e510', color: '#a5b4fc', border: '1px solid #4f46e525' }}>Sage 100</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#4f46e510', color: '#a5b4fc', border: '1px solid #4f46e525' }}>Cegid</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#4f46e510', color: '#a5b4fc', border: '1px solid #4f46e525' }}>EBP</span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: '#4f46e510', color: '#a5b4fc', border: '1px solid #4f46e525' }}>QuadraCompta</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card spotlight-card reveal reveal-d2">
              <div className="feature-emoji">🔄</div>
              <h3 className="text-lg font-bold mb-2">Révision espacée intelligente</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                L&apos;algorithme de répétition espacée (SRS) reprogramme automatiquement les points faibles. Votre équipe mémorise 3× plus vite qu&apos;avec les tutoriels vidéo classiques.
              </p>
              <div className="mt-4 progress-bar">
                <div className="progress-fill" style={{ width: '78%' }} />
              </div>
              <p className="text-xs text-gray-600 mt-1">Taux de rétention moyen après 7 jours : 78 %</p>
            </div>

            {/* Feature 3 */}
            <div className="card spotlight-card reveal reveal-d3">
              <div className="feature-emoji">📋</div>
              <h3 className="text-lg font-bold mb-2">Scénarios de comptabilité réelle</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Exercices basés sur des cas concrets : clôture annuelle, lettrage automatique, déclaration TVA, FEC. Vos collaborateurs s&apos;entraînent sur des situations qu&apos;ils rencontreront réellement.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card spotlight-card reveal reveal-d4">
              <div className="feature-emoji">📈</div>
              <h3 className="text-lg font-bold mb-2">Tableau de bord cabinet</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Suivez la progression de chaque collaborateur en temps réel. Exportez les rapports de compétences pour vos entretiens annuels et détectez les lacunes avant qu&apos;elles coûtent cher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Pricing ═══ */}
      <section id="pricing" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Tarifs</div>
            <h2 className="text-4xl font-bold mb-4">Simple et transparent</h2>
            <p className="text-gray-500">Commencez gratuitement. Évoluez quand votre cabinet grandit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Découverte */}
            <div className="card text-center reveal reveal-d1">
              <h3 className="font-bold text-lg mb-2">Découverte</h3>
              <div className="text-4xl font-extrabold mb-1">0<span className="text-lg text-gray-500">€</span></div>
              <p className="text-gray-500 text-sm mb-8">Pour toujours</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> 2 logiciels au choix
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> 10 quiz / mois
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Résultats détaillés
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Support communauté
                </li>
              </ul>
              <a href="#" className="btn-secondary w-full !text-sm !py-2.5 text-center">Commencer</a>
            </div>

            {/* Pro — gradient border populaire */}
            <div className="card gradient-border text-center relative glow reveal reveal-d2 md:-mt-5 md:pb-10">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', zIndex: 10 }}
              >
                POPULAIRE
              </div>
              <h3 className="font-bold text-lg mb-2 mt-2">Pro</h3>
              <div className="text-5xl font-extrabold mb-1">9<span className="text-2xl">,99</span><span className="text-lg text-gray-500">€</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois · par collaborateur</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Tout du plan Découverte
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> 12 logiciels — accès complet
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Quiz illimités + révision SRS
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Certificats de maîtrise PDF
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Support prioritaire sous 2h
                </li>
              </ul>
              <a href="#" className="btn-primary w-full !text-sm !py-2.5 text-center"><span>Souscrire au Pro</span></a>
            </div>

            {/* Entreprise */}
            <div className="card text-center reveal reveal-d3">
              <h3 className="font-bold text-lg mb-2">Cabinet</h3>
              <div className="text-4xl font-extrabold mb-1">29<span className="text-lg">,99</span><span className="text-lg text-gray-500">€</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois · jusqu&apos;à 20 utilisateurs</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Tout du plan Pro
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Dashboard cabinet centralisé
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Rapports RH exportables
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> Onboarding personnalisé
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#818cf8' }}>✓</span> SLA 99,9 % garanti
                </li>
              </ul>
              <a href="#" className="btn-secondary w-full !text-sm !py-2.5 text-center">Contacter le commercial</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Témoignages</div>
            <h2 className="text-4xl font-bold">Ils maîtrisent leur logiciel</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="card reveal reveal-d1">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;Grâce à BalanceIQ, j&apos;ai maîtrisé Sage 100 en deux semaines. Les quiz sont précis, les explications ultra claires. Mes clôtures mensuelles sont deux fois plus rapides qu&apos;avant.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: '#4f46e520', color: '#818cf8' }}
                >
                  PR
                </div>
                <div>
                  <p className="font-semibold text-sm">Pauline R.</p>
                  <p className="text-xs text-gray-500">Comptable senior · Cabinet Fiduciaire Lyonnais</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card reveal reveal-d2">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;J&apos;ai rendu BalanceIQ obligatoire pour tous mes collaborateurs avant toute prise en main d&apos;un nouveau logiciel. Depuis, le temps de formation a chuté de 60 %. Aucun regret.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: '#818cf820', color: '#818cf8' }}
                >
                  LM
                </div>
                <div>
                  <p className="font-semibold text-sm">Laurent M.</p>
                  <p className="text-xs text-gray-500">DAF · Groupe Merc&eacute;des Distribution</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card reveal reveal-d3">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;L&apos;algorithme de révision est bluffant. Je mémorise trois fois plus vite qu&apos;avec les tutoriels vidéo classiques. Et les cas pratiques de TVA sont exactement ce dont j&apos;avais besoin.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: '#7c3aed20', color: '#a78bfa' }}
                >
                  EC
                </div>
                <div>
                  <p className="font-semibold text-sm">Émilie C.</p>
                  <p className="text-xs text-gray-500">Expert-comptable · Cabinet Courtois &amp; Associés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-4xl font-bold">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            <details className="card cursor-pointer reveal reveal-d1">
              <summary className="font-semibold list-none flex justify-between items-center select-none">
                Quels logiciels comptables sont couverts par BalanceIQ ?
                <span className="faq-icon text-gray-500 text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                BalanceIQ couvre 12 logiciels : Sage 100, Sage 50, Cegid Quadra, Cegid Loop, EBP Compta, Pennylane, FEC Expert, Ibiza Software, Silae (paie), Coala, MyUnisoft et Dext. De nouveaux logiciels sont ajoutés chaque trimestre selon les votes de notre communauté.
              </p>
            </details>

            <details className="card cursor-pointer reveal reveal-d2">
              <summary className="font-semibold list-none flex justify-between items-center select-none">
                Les quiz sont-ils mis à jour lors des nouvelles versions des logiciels ?
                <span className="faq-icon text-gray-500 text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                Oui. Notre équipe surveille les notes de version de chaque éditeur. Dès qu&apos;une mise à jour majeure modifie une fonctionnalité couverte, nous mettons à jour les questions concernées dans les 15 jours ouvrés. Vous recevez une notification dans l&apos;application.
              </p>
            </details>

            <details className="card cursor-pointer reveal reveal-d3">
              <summary className="font-semibold list-none flex justify-between items-center select-none">
                Puis-je suivre la progression de toute mon équipe depuis un seul compte ?
                <span className="faq-icon text-gray-500 text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                Absolument. Le plan Cabinet donne accès à un tableau de bord centralisé : progression par collaborateur, scores par module, temps passé, et export PDF des rapports de compétences. Idéal pour les entretiens annuels ou les audits de formation.
              </p>
            </details>

            <details className="card cursor-pointer reveal reveal-d4">
              <summary className="font-semibold list-none flex justify-between items-center select-none">
                Existe-t-il un certificat à la fin d&apos;un parcours de formation ?
                <span className="faq-icon text-gray-500 text-xl ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                Oui. Chaque module validé à plus de 80 % génère automatiquement un certificat de maîtrise au format PDF, avec le logo BalanceIQ, la date et le score obtenu. Ces certificats sont reconnus par plusieurs éditeurs partenaires dans le cadre de leur programme de certification revendeur.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center card glow gradient-border reveal">
          <div className="py-6">
            <span className="text-5xl mb-6 block">📊</span>
            <h2 className="text-3xl font-bold mb-4">
              Prêt à transformer votre cabinet ?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
              Rejoignez 2 400+ comptables qui maîtrisent leur logiciel avec BalanceIQ. Commencez gratuitement, sans carte bancaire.
            </p>
            <a href="#pricing" className="btn-primary text-base">
              <span>📊 Essayer BalanceIQ gratuitement</span>
            </a>
            <p className="text-xs text-gray-600 mt-4">Aucune carte bancaire · Annulation à tout moment</p>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="glass py-12 px-6 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">📊</span>
            <span className="font-bold tracking-tight">BalanceIQ</span>
            <span className="text-gray-600 text-sm">— Maîtrisez votre logiciel comptable</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-600">&copy; 2026 BalanceIQ. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
