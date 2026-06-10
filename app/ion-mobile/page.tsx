import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Faq } from '@/components/faq'

export const metadata: Metadata = {
  title: 'Ion Mobile — Delinternet',
  description:
    'Tarifes de mòbil Ion Mobile sense permanència amb cobertura Movistar 4G des de 5 €/mes. Distribuïdor oficial a El Perelló.',
}

const plans = [
  {
    name: 'Promo',
    data: '100 GB',
    price: '5',
    popular: true,
    features: ['100 GB de dades', 'Trucades il·limitades', 'GB Acumulables', 'GB Transferibles'],
    cta: 'Contractar',
  },
  {
    name: 'Eco',
    data: '40 GB',
    price: '7,95',
    popular: false,
    features: ['40 GB de dades', 'Trucades il·limitades', 'GB Acumulables', '5G inclòs'],
    cta: 'Més info',
  },
  {
    name: 'Pro',
    data: '250 GB',
    price: '12,95',
    popular: false,
    features: ['250 GB de dades', 'Trucades il·limitades', 'GB Acumulables', '5G inclòs'],
    cta: 'Més info',
  },
  {
    name: 'Tarifa Infinita',
    data: 'GB il·limitats',
    price: '15,95',
    popular: false,
    features: ['GB il·limitats', 'Trucades il·limitades', '5G inclòs', 'Roaming Unió Europea'],
    cta: 'Més info',
  },
]

const benefits = [
  {
    title: 'Sense permanència',
    text: 'Canvia de tarifa o cancel·la quan vulguis. Sense penalitzacions ni compromisos de mesos.',
  },
  {
    title: 'Roaming UE inclòs',
    text: 'Utilitza les teves dades i trucades a la mateixa tarifa a qualsevol país de la Unió Europea.',
  },
  {
    title: 'App de gestió',
    text: 'Controla el consum, les dades i la factura des de l\u2019app Mi Delinternet. iOS i Android.',
  },
  {
    title: 'Cobertura Movistar 4G',
    text: 'Xarxa Movistar amb 95% de cobertura al territori nacional. Les teves dades, sempre disponibles.',
  },
]

const tech = [
  {
    title: 'eSIM disponible',
    text: 'Compatible amb eSIM. Activa el teu número sense necessitat de targeta física.',
  },
  {
    title: 'Comparteix GB',
    text: 'Transfereix dades entre línies de la mateixa família o empresa sense cap cost addicional.',
  },
  {
    title: 'Dual SIM',
    text: 'Compatibilitat amb Dual SIM. Mantén el teu número actual i afegeix Ion Mobile al mateix dispositiu.',
  },
  {
    title: '5G inclòs',
    text: 'Als plans Eco, Pro i Tarifa Infinita, el 5G ja ve inclòs sense cap cost addicional.',
  },
]

const steps = [
  { n: '1', title: 'Tria el pla', text: 'Escull la tarifa que millor s\u2019adapta al teu consum i pressupost.' },
  { n: '2', title: 'Truca\u2019ns', text: 'Contacta amb nosaltres al 659 896 552 o vine a l\u2019oficina.' },
  { n: '3', title: 'Portabilitat', text: 'Si vols mantenir el teu número, te la gestionem nosaltres. Sense tràmits.' },
  { n: '4', title: 'Activació', text: 'En 24-48 hores tens el teu nou número o portabilitat activa.' },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.18" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function IonMobilePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Telefonia mòbil"
          title="Ion Mobile a El Perelló"
          description="Distribuïdor oficial · Cobertura Movistar 4G · Sense permanència · Des de 5 €/mes."
        />

        {/* Plans */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Tarifes
            </span>
            <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Plans sense permanència
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tots els plans inclouen trucades il·limitades i GB acumulables
              d&apos;un mes a l&apos;altre.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-6 ${
                  plan.popular ? 'border-accent bg-card shadow-sm' : 'border-border bg-card'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                    Més popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {plan.data}
                </p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-semibold tracking-tight text-foreground">
                    €{plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/mes</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">IVA inclòs · Sense permanència</p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacte"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    plan.popular ? 'bg-foreground text-background' : 'border border-border bg-background text-foreground'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Avantatges
              </span>
              <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Què fa especials les nostres ofertes
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Contractes Ion Mobile però gestionat per l&apos;equip local de
                Delinternet. Res de centres d&apos;atenció massius.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <div key={b.title} className="bg-card p-7">
                  <span className="font-heading text-2xl font-semibold text-accent-foreground/40">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              La darrera tecnologia
            </span>
            <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Tot el que inclou Ion Mobile
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tecnologia de primera, gestionada localment des de El Perelló.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {tech.map((t) => (
              <div key={t.title} className="rounded-3xl border border-border bg-card p-7">
                <h3 className="font-heading text-xl font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Com contractar
              </span>
              <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                En 4 passos senzills
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Et posem en marxa en menys d&apos;un dia.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="rounded-3xl border border-border bg-card p-7">
                  <span className="grid size-11 place-items-center rounded-full bg-accent font-heading text-lg font-semibold text-accent-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              FAQ
            </span>
            <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Preguntes freqüents
            </h2>
          </div>
          <Faq />
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
                  Contacta&apos;ns
                </span>
                <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                  Vols contractar Ion Mobile?
                </h2>
                <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-background/70">
                  Truca&apos;ns al 659 896 552 o vine a l&apos;oficina de El
                  Perelló. Et rebem sense cita.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:659896552"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Trucar ara
                </a>
                <Link
                  href="/contacte"
                  className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                >
                  Veure contacte
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
