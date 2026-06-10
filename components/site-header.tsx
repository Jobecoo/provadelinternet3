'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Inici', href: '/' },
  { label: 'Internet', href: '/internet' },
  { label: 'Ion Mobile', href: '/ion-mobile' },
  { label: 'Contacte', href: '/contacte' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-baseline gap-1.5" aria-label="Delinternet, inici">
          <span className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            del
          </span>
          <span className="rounded bg-accent px-1.5 font-heading text-2xl font-semibold tracking-tight text-accent-foreground">
            internet
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  active ? 'text-foreground' : 'text-muted-foreground'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:659896552"
            className="hidden text-sm font-medium text-foreground sm:block"
          >
            659 896 552
          </a>
          <Link
            href="/contacte"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Et truquem?
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-md border border-border md:hidden"
            aria-label="Obrir menú"
            aria-expanded={open}
          >
            <span className="sr-only">Menú</span>
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-4 bg-foreground" />
              <span className="h-0.5 w-4 bg-foreground" />
              <span className="h-0.5 w-4 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mòbil">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
