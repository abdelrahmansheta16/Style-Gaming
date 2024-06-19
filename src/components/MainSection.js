// Example update for MainSection component
import Image from 'next/image';
import { useState } from 'react';

import first from '../../public/assets/1.jpg';
import second from '../../public/assets/2.jpg';

const MainSection = ({ onLoading }) => {
    const handleImageClick = (e, href) => {
        e.preventDefault();
        onLoading(true);  // Trigger loading state in the Home component

        setTimeout(() => {
            onLoading(false);
            window.location.href = href;
        }, 2000);
    };

    return (
        <div className="flex justify-around">
            <div className="" onClick={(e) => handleImageClick(e, "/TextToGaming")}>
                <Image src={first} alt="Text to gaming creator" />
            </div>
            <div className="" onClick={(e) => handleImageClick(e, "/TextToNFT")}>
                <Image src={second} alt="NFT/2D to gaming asset" />
            </div>
        </div>
    );
};

export default MainSection;
