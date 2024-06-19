import Image from 'next/image';
import Link from 'next/link';

import first from '../../public/assets/1.jpg';
import second from '../../public/assets/2.jpg';

const MainSection = () => {
    return (
        <section className="flex justify-around">
            <Link href="/TextToGaming" className="text-center">
                <Image src={first} alt="Text to gaming creator" />
            </Link>
            <Link href="/TextToNFT" className="text-center">
                <Image src={second} alt="NFT/2D to gaming asset" />
            </Link>
        </section>
    )
}

export default MainSection
