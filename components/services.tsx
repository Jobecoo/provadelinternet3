const services = [
  {
    id: '01',
    name: 'Fibra Òptica',
    tagline: '200 Mb simètrics arreu del poble',
    desc: 'Alta i router gratuïts. Instal·lació en 2–3 dies. La connexió més ràpida i estable per a casa o negoci.',
    price: '29,95',
    unit: '€/mes + IVA',
    features: ['200 Mb simètrics', 'Router WiFi inclòs', 'Sense permanència'],
    cta: 'Veure plans de fibra',
  },
  {
    id: '02',
    name: 'Radioenllaç',
    tagline: 'Allà on la fibra encara no arriba',
    desc: 'Fins a 50 Mb amb antena i instal·lació incloses. La nostra especialitat: connectar els masos i les zones rurals.',
    price: '24,90',
    unit: '€/mes + IVA',
    features: ['Fins a 50 Mb', 'Antena inclosa', 'Zones rurals'],
    cta: 'Veure radioenllaç',
  },
  {
    id: '03',
    name: 'Ion Mobile',
    tagline: 'Mòbil sense lligams ni sorpreses',
    desc: 'Tarifes de mòbil amb cobertura Movistar 4G. Combina-la amb la teva fibra i estalvia cada mes.',
    price: '5',
    unit: '€/mes',
    features: ['Cobertura Movistar 4G', 'Sense permanència', 'Combina amb fibra'],
    cta: 'Veure tarifes mòbil',
  },
]

export function Services() {
  return (
    <section id="serveis" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Els nostres serveis
            </p>
            <h2 className="mt-3 max-w-2xl font-heading text-4xl font-semibold leading-[1.0] tracking-tight text-balance md:text-5xl">
              Fibra, radioenllaç i mòbil. Triï el que li arribi.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground">
            Connexió a totes les zones de les Terres de l&apos;Ebre, amb el
            mateix tracte de poble per a tothom.
          </p>
        </div>

        <div className="mt-12 flex flex-col">
          {services.map((s) => (
            <article
              key={s.id}
              className="group grid items-center gap-6 border-t border-border py-8 last:border-b md:grid-cols-12 md:gap-8"
            >
              <div className="flex items-center gap-4 md:col-span-4">
                <span className="font-mono text-sm text-muted-foreground">{s.id}</span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
                </div>
              </div>

              <p className="text-pretty text-muted-foreground md:col-span-4">{s.desc}</p>

              <div className="md:col-span-2">
                <ul className="flex flex-wrap gap-1.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-end justify-between gap-4 md:col-span-2 md:flex-col md:items-end">
                <p className="leading-none">
                  <span className="text-xs text-muted-foreground">des de</span>
                  <br />
                  <span className="font-heading text-3xl font-semibold tracking-tight">
                    {s.price}
                  </span>
                  <span className="ml-1 text-xs text-muted-foreground">{s.unit}</span>
                </p>
                <a
                  href="#contacte"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-foreground transition-colors group-hover:text-accent-foreground group-hover:[text-decoration:none]"
                >
                  <span className="border-b-2 border-accent pb-0.5">{s.cta}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
