
import MainSection from '../components/MainSection'
import UpcomingDrops from '../components/UpcomingDrops'
import Footer from '../components/Footer'
import TiersSection from '@/components/TiersSection'
import NFTCreator from '@/components/NFTSection'

export default function Home() {
    return (
        <div>

            <NFTCreator />
            <TiersSection />
            <UpcomingDrops />
            <Footer />
        </div>
    )
}
