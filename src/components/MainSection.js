import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import first from '../../public/assets/1.jpg';
import second from '../../public/assets/2.jpg';

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
        <section className=" bg-white relative w-full h-64 md:h-screen md:flex-3 flex items-center justify-center">
            {isLoading ?
                <>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="loaderMain ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                    </div>
                </>
                :
                <>
                    <div className="" onClick={(e) => handleImageClick(e, "/TextToGaming")}>
                        <Image src={first} alt="Text to gaming creator" />
                    </div>
                    <div className="" onClick={(e) => handleImageClick(e, "/TextToNFT")}>
                        <Image src={second} alt="NFT/2D to gaming asset" />
                    </div>
                </>
            }
        </section>
    );
}

export default MainSection;
