import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { Stats } from '@/components/stats'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <WhyUs />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
