const items = [
  'Sense permanència',
  'Preus justos',
  'Atenció local real',
  'Alta i router gratuïts',
  'Instal·lació en 2–3 dies',
  'Cobertura Movistar 4G',
  'Fibra simètrica',
]

export function Marquee() {
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden border-b border-border bg-foreground py-4">
      <div className="flex w-max animate-marquee items-center gap-8">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-heading text-lg font-medium text-background">
              {item}
            </span>
            <span aria-hidden="true" className="text-accent">
              ✳
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
