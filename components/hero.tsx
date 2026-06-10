export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* faint grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-accent animate-signal" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            L&apos;internet de la gent
          </span>
          <span aria-hidden="true" className="text-border">·</span>
          <span>Terres de l&apos;Ebre</span>
        </div>

        <h1 className="mt-6 max-w-5xl font-heading text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-balance">
          Internet honest,
          <br />
          fet al{' '}
          <span className="relative inline-block">
            <span className="relative z-10">teu poble</span>
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-1 z-0 h-4 bg-accent md:bottom-2 md:h-6"
            />
          </span>
          .
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Fibra, radioenllaç i mòbil arreu de les Terres de l&apos;Ebre — fins
            i tot allà on cap altra operadora arriba. Sense permanència, sense
            lletra petita, sense centres de trucada llunyans.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="#serveis"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-base font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              Veure serveis
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contacte"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Parla amb nosaltres
            </a>
          </div>
        </div>

        {/* rating strip */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
          <div className="flex items-center gap-2">
            <span className="text-accent" aria-hidden="true">
              ★★★★★
            </span>
            <span className="text-sm font-semibold text-foreground">4,9</span>
            <span className="text-sm text-muted-foreground">· 1.568 ressenyes a Google</span>
          </div>
          <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
          <p className="text-sm text-muted-foreground">
            4 oficines · Alta i router gratuïts · Instal·lació en 2–3 dies
          </p>
        </div>
      </div>
    </section>
  )
}
