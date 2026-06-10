import Image from 'next/image'
import Link from 'next/link'

const columns = [
  {
    title: 'Internet',
    links: [
      { label: 'Fibra Òptica', href: '/internet' },
      { label: 'Radioenllaç', href: '/internet' },
      { label: 'Comparar plans', href: '/internet' },
    ],
  },
  {
    title: 'Telefonia',
    links: [
      { label: 'Ion Mobile', href: '/ion-mobile' },
      { label: 'Tarifes mòbil', href: '/ion-mobile' },
      { label: 'ionmobile.es', href: 'https://www.ionmobile.es/' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Qui som', href: '/contacte' },
      { label: 'Contacte', href: '/contacte' },
      { label: 'Facturació', href: 'mailto:facturacio@pchard.cat' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-1.5" aria-label="Delinternet">
              <img src="/provadelinternet3/images/logo.png" alt="Delinternet logo" width="180" height="40" className="h-8 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Operadora local de telecomunicacions arrelada a les Terres de
              l&apos;Ebre des de fa més de 10 anys.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Delinternet · Tots els drets reservats
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:659896552" className="transition-colors hover:text-foreground">
              659 896 552
            </a>
            <a
              href="mailto:facturacio@pchard.cat"
              className="transition-colors hover:text-foreground"
            >
              facturacio@pchard.cat
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
