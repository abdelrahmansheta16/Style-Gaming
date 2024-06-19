import UpcomingDrops from '../components/UpcomingDrops'
import Footer from '../components/Footer'
import TiersSection from '@/components/TiersSection'
import GamingCreator from '@/components/GamingSection'

export default function Home() {
    return (
        <div>
            <GamingCreator />
            <TiersSection />
            <UpcomingDrops />
            <Footer />
        </div>
    )
}
