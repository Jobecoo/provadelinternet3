const reasons = [
  {
    title: 'Preus justos',
    desc: 'Sense lletra petita ni pujades sorpresa. El que contractes és el que pagues cada mes, sempre.',
  },
  {
    title: 'Atenció local real',
    desc: 'Parles directament amb l\u2019equip d\u2019El Perelló. Sense centres externalitzats ni esperes interminables.',
  },
  {
    title: 'Instal·lació en 2–3 dies',
    desc: 'Des que contractes fins que tens internet a casa, en menys d\u2019una setmana. Alta i router inclosos.',
  },
  {
    title: 'Sense permanència',
    desc: 'Cap compromís de mesos ni penalitzacions. Canvia de pla o cancel·la quan vulguis, sense cost extra.',
  },
]

export function WhyUs() {
  return (
    <section id="perque" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Per què nosaltres
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold leading-[1.0] tracking-tight text-balance md:text-5xl">
              No som una gran corporació. Som l&apos;equip del teu poble.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-muted-foreground">
              Una operadora local i arrelada a les Terres de l&apos;Ebre des de
              fa més de 10 anys. Quan truques, contesta algú que coneix el teu
              carrer.
            </p>


          </div>

          <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex flex-col gap-3 bg-card p-7">
                <span className="font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <dt className="font-heading text-xl font-semibold tracking-tight">
                  {r.title}
                </dt>
                <dd className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
