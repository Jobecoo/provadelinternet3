import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Contacte — Delinternet',
  description:
    'Truca\u2019ns al 659 896 552, escriu a facturacio@pchard.cat o vine a Carrer Salmerón 44, El Perelló. T\u2019atenem sense esperes.',
}

const channels = [
  {
    label: 'Telèfon',
    value: '659 896 552',
    note: 'La manera més ràpida d\u2019arribar-nos',
    href: 'tel:659896552',
    icon: (
      <path
        d="M5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: 'Correu electrònic',
    value: 'facturacio@pchard.cat',
    note: 'Per consultes de facturació i contractació',
    href: 'mailto:facturacio@pchard.cat',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: 'Adreça',
    value: 'Carrer Salmerón 44, El Perelló',
    note: 'Vine en horari d\u2019oficina, et rebem sense cita',
    href: 'https://maps.google.com/?q=Carrer+Salmeron+44+El+Perello',
    icon: (
      <>
        <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    label: 'Horari d\u2019atenció',
    value: 'Dilluns – Divendres',
    note: '9:00 – 18:00 · Fora d\u2019horari, envia\u2019ns un correu',
    href: null,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

export default function ContactePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contacte"
          title="Estem a El Perelló"
          description="Truca'ns, envia'ns un correu o vine directament a l'oficina. T'atenem sense esperes."
        />

        {/* Channels */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Com contactar-nos
            </span>
            <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Truca, escriu o vine
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="grid size-11 place-items-center rounded-full bg-accent/20 text-accent-foreground">
                    <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                      {c.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {c.label}
                  </h3>
                  <p className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground">
                    {c.value}
                  </p>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {c.note}
                  </p>
                </>
              )
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="group bg-card p-8 transition-colors hover:bg-secondary/60"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="bg-card p-8">
                  {inner}
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
                  Comença ara
                </span>
                <h2 className="mt-3 text-balance font-heading text-4xl font-semibold tracking-tight md:text-5xl">
                  Contracta avui mateix
                </h2>
                <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-background/70">
                  Truca al 659 896 552 i t&apos;ho posem en marxa el mateix dia.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:659896552"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  659 896 552
                </a>
                <a
                  href="mailto:facturacio@pchard.cat"
                  className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                >
                  Envia&apos;ns un correu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
