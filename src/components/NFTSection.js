import Image from 'next/image';
import NFTCreatorImage from '../../public/assets/6.png';
import nftBox from '../../public/assets/nftBox.svg';
import headToIcon from '../../public/assets/tryNow.svg';
import chatIcon from '../../public/assets/chatIcon.svg';
import Link from 'next/link';

const NFTCreator = () => {
    return (
        <div className='flex flex-row justify-center items-center bg-white'>
            <div className='px-10'>
                <Link href="/TextToGaming">
                    <Image src={chatIcon} alt='Gaming Box' />
                </Link>
            </div>
            <div className="flex-3 relative w-full h-screen flex items-center justify-center">
                <Image
                    src={NFTCreatorImage}
                    alt="Text to gaming creator"
                    layout="fill"
                    objectFit="cover" // Ensures the image covers the available space without distorting aspect ratio
                    quality={100}
                />
                <div className="absolute flex items-center justify-center w-full px-8">
                    <div className="flex flex-col justify-center items-center p-4 rounded">
                        <Image src={nftBox} alt='chat' />
                        <button className="bg-gray-500 bg-opacity-40 text-white py-2 px-4 flex items-center justify-center rounded-full">
                            <span className='pr-2'>Try now</span>
                            <Image src={headToIcon} alt='head to' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTCreator;
