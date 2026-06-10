export function Contact() {
  return (
    <section id="contacte" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-3xl border border-border bg-accent px-6 py-12 text-accent-foreground md:px-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground/70">
                Contacta&apos;ns
              </p>
              <h2 className="mt-3 font-heading text-4xl font-semibold leading-[0.98] tracking-tight text-balance md:text-6xl">
                Truca&apos;ns al 659 896 552
              </h2>
              <p className="mt-5 max-w-md text-pretty text-lg text-accent-foreground/80">
                O vine a veure&apos;ns al Carrer Salmerón 44, El Perelló. Et
                rebem sense cita prèvia, com sempre.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:659896552"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-foreground px-6 py-3.5 text-base font-semibold text-accent transition-transform hover:-translate-y-0.5"
                >
                  Trucar ara
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="mailto:facturacio@pchard.cat"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-foreground/30 px-6 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-foreground/10"
                >
                  Escriu-nos un correu
                </a>
              </div>
            </div>

            <dl className="grid gap-px overflow-hidden rounded-2xl border border-accent-foreground/15 bg-accent-foreground/15">
              {[
                { k: 'Telèfon', v: '659 896 552' },
                { k: 'Adreça', v: 'C/ Salmerón 44, El Perelló' },
                { k: 'Horari', v: 'Dill–Div · 9:00–18:00' },
                { k: 'Correu', v: 'facturacio@pchard.cat' },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between gap-4 bg-accent px-5 py-4"
                >
                  <dt className="text-sm font-medium text-accent-foreground/70">{row.k}</dt>
                  <dd className="text-right text-sm font-semibold text-accent-foreground">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
