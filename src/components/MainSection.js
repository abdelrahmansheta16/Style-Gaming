import Image from 'next/image';
import Link from 'next/link';

import first from '../../public/assets/1.jpg';
import second from '../../public/assets/2.jpg';
import { useState } from 'react';

const MainSection = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleImageClick = (e, href) => {
        e.preventDefault(); // Prevent the default link behavior
        setIsLoading(true); // Set loading state

        // Simulate loading process
        setTimeout(() => {
            setIsLoading(false); // Reset loading state
            window.location.href = href; // Proceed with navigation after a delay
        }, 2000); // Simulate a loading time of 2 seconds
    };
    return (
        <section className="flex justify-around">
            {isLoading ?
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="loaderMain ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
                :
                <>
                    <div onClick={(e) => handleImageClick(e, "/TextToGaming")}>
                        <Image src={first} alt="Text to gaming creator" />
                    </div>
                    <div onClick={(e) => handleImageClick(e, "/TextToNFT")}>
                        <Image src={second} alt="NFT/2D to gaming asset" />
                    </div>
                </>
            }
        </section>
    )
}

export default MainSection
