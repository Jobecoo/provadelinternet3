import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Fibra i Radioenllaç — Delinternet',
  description:
    'Fibra òptica de 200 Mb simètrics i radioenllaç de fins a 50 Mb a les Terres de l\u2019Ebre. Sense permanència, alta i router inclosos.',
}

const plans = [
  {
    name: 'Fibra Òptica',
    tag: '200 Mb simètrics',
    price: '29,95',
    note: '+ IVA · Sense permanència',
    featured: true,
    features: [
      '200 Mb descàrrega simètrica',
      'Alta gratuïta',
      'Router Wi-Fi inclòs',
      'Instal·lació en 2-3 dies',
      'Sense permanència',
      'Suport tècnic local',
    ],
    cta: 'Contractar ara',
  },
  {
    name: 'Radioenllaç',
    tag: 'Fins a 50 Mb',
    price: '24,90',
    note: '+ IVA · Sense permanència',
    featured: false,
    features: [
      'Fins a 50 Mb simètrics',
      'Antena exterior inclosa',
      'Instal·lació professional',
      'Per zones sense cobertura fibra',
      'Sense permanència',
      'Cost antena: 210 € + IVA (únic)',
    ],
    cta: 'Consultar disponibilitat',
  },
]

const comparison = [
  ['Velocitat màxima', '200 Mb simètrics', '50 Mb simètrics'],
  ['Preu mensual', '29,95 €/mes + IVA', '24,90 €/mes + IVA'],
  ['Alta i router', 'Gratuïts', 'Antena 210 € + IVA'],
  ['Permanència', 'Cap', 'Cap'],
  ['Instal·lació', '2-3 dies hàbils', '2-3 dies hàbils'],
  ['Disponibilitat', 'Zones amb xarxa fibra', 'Totes les zones cobertes'],
]

const benefits = [
  {
    title: 'Sense permanència',
    text: 'Canvia de pla o cancel·la quan vulguis. Sense penalitzacions ni compromisos de mesos.',
  },
  {
    title: 'Instal·lació en 2-3 dies',
    text: 'Des que contractes fins que tens internet operatiu, en menys d\u2019una setmana.',
  },
  {
    title: 'Atenció local',
    text: 'Parles directament amb el nostre equip de El Perelló. Sense centraletes ni tercers.',
  },
  {
    title: 'Preus justos',
    text: 'El que veus és el que pagues. Sense pujades sorpresa ni costos ocults al rebut.',
  },
]

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 size-4 shrink-0 text-accent-foreground"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.18" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function InternetPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Internet per a casa i empresa"
          title="Fibra i radioenllaç"
          description="Fibra òptica on hi ha cobertura, radioenllaç on no hi arriba ningú més. Sempre sense permanència."
        />

        {/* Plans */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Plans disponibles
            </span>
            <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Tria el teu pla
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tots els plans inclouen alta gratuïta, router inclòs i instal·lació
              en 2-3 dies hàbils.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  plan.featured
                    ? 'border-accent bg-card shadow-sm'
                    : 'border-border bg-card'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                    Recomanat
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {plan.tag}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-6xl font-semibold tracking-tight text-foreground">
                    €{plan.price}
                  </span>
                  <span className="text-base text-muted-foreground">/mes</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{plan.note}</p>

                <ul className="mt-8 flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacte"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    plan.featured
                      ? 'bg-foreground text-background'
                      : 'border border-border bg-background text-foreground'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Comparativa
              </span>
              <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Fibra vs Radioenllaç
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Les dues opcions sense permanència. La diferència: la fibra
                utilitza cable, el radioenllaç antena sense fils.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-5 py-4 font-semibold text-muted-foreground md:px-8">
                      Característica
                    </th>
                    <th className="px-5 py-4 font-heading text-base font-semibold text-foreground md:px-8">
                      Fibra Òptica
                    </th>
                    <th className="px-5 py-4 font-heading text-base font-semibold text-foreground md:px-8">
                      Radioenllaç
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row[0]}
                      className={i !== comparison.length - 1 ? 'border-b border-border' : ''}
                    >
                      <td className="px-5 py-4 font-medium text-muted-foreground md:px-8">
                        {row[0]}
                      </td>
                      <td className="px-5 py-4 text-foreground md:px-8">{row[1]}</td>
                      <td className="px-5 py-4 text-foreground md:px-8">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Avantatges
            </span>
            <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Què inclou el teu servei
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Independentment del pla que triïs, sempre obtens el mateix nivell
              d&apos;atenció i qualitat.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div key={b.title} className="bg-card p-7">
                <span className="font-heading text-2xl font-semibold text-accent-foreground/40">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage CTA */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
                  Comprova la cobertura
                </span>
                <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                  Truca&apos;ns al 659 896 552
                </h2>
                <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-background/70">
                  Et confirmem en minuts si la fibra o el radioenllaç arriba al
                  teu domicili.
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
