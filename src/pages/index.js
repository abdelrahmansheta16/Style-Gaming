import { useState } from 'react';
import Image from 'next/image';

import Logo from '../../public/assets/logo.gif';
import MainSection from '../components/MainSection';
import UpcomingDrops from '../components/UpcomingDrops';
import Footer from '../components/Footer';
import TiersSection from '@/components/TiersSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle navigation/loading triggered from child components
  const handleLoading = (isLoading) => {
    setIsLoading(isLoading);
  }

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Image src={Logo} alt="Loading" height={200} />
        </div>
      )}
      <MainSection onLoading={handleLoading} />
      <TiersSection />
      <UpcomingDrops />
      <Footer />
    </>
  );
}
