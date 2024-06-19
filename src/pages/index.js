
import MainSection from '../components/MainSection'
import UpcomingDrops from '../components/UpcomingDrops'
import Footer from '../components/Footer'
import TiersSection from '@/components/TiersSection'

export default function Home() {
  return (
    <div >
      <MainSection />
      <div className='p-4 md:p-13 bg-white'>
        <TiersSection />
        <UpcomingDrops />
      </div>
      <Footer />
    </div>
  )
}
