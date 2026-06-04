import { WaitlistModalProvider } from '@/context/waitlist-modal'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Waitlist from '@/components/Waitlist'
import TrustStrip from '@/components/TrustStrip'
import HowItWorks from '@/components/HowItWorks'
import TheShift from '@/components/TheShift'
import Sports from '@/components/Sports'
import Safety from '@/components/Safety'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <WaitlistModalProvider>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Waitlist />
        <TrustStrip />
        <HowItWorks />
        <TheShift />
        <Sports />
        <Safety />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </WaitlistModalProvider>
  )
}
