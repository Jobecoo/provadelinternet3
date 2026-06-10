'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Puc mantenir el meu número de telèfon actual?',
    a: 'Sí. Gestionem nosaltres la portabilitat sense cap cost addicional. El procés sol trigar entre 24 i 48 hores. Durant la transició el teu número continua actiu.',
  },
  {
    q: 'Hi ha permanència als plans Ion Mobile?',
    a: 'No. Cap dels plans té permanència. Pots canviar de tarifa o cancel·lar el servei quan vulguis sense cap penalització.',
  },
  {
    q: 'Funciona el mòbil a l\u2019estranger?',
    a: 'Sí, tots els plans inclouen roaming a la Unió Europea. Pots fer trucades i usar les teves dades als mateixos preus que a Espanya en qualsevol país de la UE.',
  },
  {
    q: 'Quina cobertura té Ion Mobile?',
    a: 'Ion Mobile utilitza la xarxa de Movistar, que cobreix el 95% del territori nacional. És una de les xarxes amb major cobertura a Espanya, especialment en zones rurals com les Terres de l\u2019Ebre.',
  },
  {
    q: 'Puc contractar Ion Mobile sense contractar internet?',
    a: 'Sí. Ion Mobile és completament independent del servei d\u2019internet. Pots contractar-lo sols o combinat amb fibra o radioenllaç de Delinternet.',
  },
  {
    q: 'Què passa si consumeixo tots els GB del meu pla?',
    a: 'Un cop esgotats els GB del pla, la connexió de dades es redueix a velocitat baixa (64 kbps) fins al proper cicle. Les trucades sempre continuen actives. En els plans que ho permeten, pots transferir GB acumulats d\u2019un mes anterior.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mt-10 flex flex-col gap-3">
      {faqs.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-lg font-medium text-foreground">
                {item.q}
              </span>
              <span
                className={`grid size-7 shrink-0 place-items-center rounded-full border border-border transition-transform ${
                  isOpen ? 'rotate-45 bg-accent text-accent-foreground' : 'text-foreground'
                }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 16 16" className="size-3.5" fill="none">
                  <path
                    d="M8 1v14M1 8h14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p className="px-6 pb-6 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
