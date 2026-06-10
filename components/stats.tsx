const stats = [
  { value: '4,9', label: 'Puntuació a Google' },
  { value: '1.568', label: 'Ressenyes de clients' },
  { value: '10+', label: 'Anys d\u2019experiència' },
  { value: '4', label: 'Oficines a les T. de l\u2019Ebre' },
]

export function Stats() {
  return (
    <section id="cobertura" className="relative overflow-hidden bg-foreground text-background">
      {/* landscape image as atmospheric backdrop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ebre-landscape.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Cobertura real
          </p>
          <h2 className="mt-3 font-heading text-4xl font-semibold leading-[1.0] tracking-tight text-balance md:text-5xl">
            Connectem el territori que els grans deixen de banda.
          </h2>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-t border-background/20 pt-5">
              <dt className="font-heading text-5xl font-semibold tracking-tight md:text-6xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm text-background/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
