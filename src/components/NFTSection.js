import Image from 'next/image';
import NFTCreatorImage from '../../public/assets/6.png';
import nftBox from '../../public/assets/nftBox.svg';
import headToIcon from '../../public/assets/tryNow.svg';
import chatIcon from '../../public/assets/chatIcon.svg';
import Link from 'next/link';
import { useState } from 'react';

const GamingCreator = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleNavigation = (e, href) => {
        e.preventDefault(); // Prevent the default link behavior
        setIsLoading(true); // Set loading state

        // Simulate loading process
        setTimeout(() => {
            setIsLoading(false); // Reset loading state
            window.location.href = href; // Proceed with navigation after a delay
        }, 2000); // Simulate a loading time of 2 seconds
    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center bg-white'>
            <div className='flex justify-center items-center p-4 md:px-10 w-full md:w-auto'>
                <a onClick={(e) => handleNavigation(e, "/TextToGaming")}>
                    <Image src={chatIcon} alt='Gaming Box' layout="intrinsic" />
                </a>
            </div>
            <div className="relative w-full h-64 md:h-screen md:flex-3 flex items-center justify-center">
                <Image
                    src={NFTCreatorImage}
                    alt="Text to gaming creator"
                    layout="fill"
                    objectFit="cover" // Ensures the image covers the available space without distorting aspect ratio
                    quality={100}
                />
                <div className="absolute flex items-center justify-center w-full px-8">
                    {isLoading ? (
                        <div className="loader"></div> // Placeholder for a loading spinner
                    ) : (
                        <div className="flex flex-col justify-center items-center p-4 ">
                            <Image src={nftBox} alt='chat' />
                            <button className="bg-gray-200 bg-opacity-50 text-white py-2 px-4 flex items-center justify-center rounded-full mt-4">
                                <span className='pr-2'>Try now</span>
                                <Image src={headToIcon} alt='head to' width={20} height={20} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GamingCreator;
