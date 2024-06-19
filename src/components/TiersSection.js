import { useState } from 'react';
import Image from 'next/image';

import dollarIcon from '../../public/assets/dollar.svg';
import timeIcon from '../../public/assets/time.svg';

const TiersSection = () => {
    const [activeTab, setActiveTab] = useState('Tier One');

    const renderContent = () => {
        switch (activeTab) {
            case 'Tier One':
                return (
                    <div className=" bg-white rounded-3xl border border-gray-200 flex flex-col md:flex-row">
                        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-10">
                            <div className='flex flex-col justify-start items-start'>
                                <h2 className="text-2xl font-bold text-gray-400">TIER 1</h2>
                                <h3 className="text-5xl font-bold py-2">The NFT Tier!</h3>
                                <div className="flex flex-col md:flex-row">
                                    <div className='flex pr-12 items-center mb-2 md:mb-0'>
                                        <Image src={dollarIcon} alt="Dollar Icon" />
                                        <p className="text-xs text-black font-semibold ml-1">1,000 $STYLE</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src={timeIcon} alt="Time Icon" />
                                        <p className="text-xs text-black font-semibold ml-1">LOCKED 1 MONTH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-gray-100 p-4 md:p-10">
                            <p className="text-lg md:text-2xl pt-4 text-gray-800 font-bold">Get access to <span className='text-gray-500'>nft-collections</span> with usability in games. Every nft-collection will be <span className='text-gray-500'>usable for playing.</span></p>
                        </div>
                    </div>
                );
            case 'Tier Two':
                return (
                    <div className=" bg-white rounded-3xl border border-gray-500 flex flex-col md:flex-row">
                        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-500 p-4 md:p-10">
                            <div className='flex flex-col justify-start items-start'>
                                <h2 className="text-lg font-bold text-gray-500">TIER 1</h2>
                                <h3 className="text-4xl font-bold py-4">The NFT Tier!</h3>
                                <div className="flex flex-col md:flex-row">
                                    <div className='flex pr-2 items-center mb-2 md:mb-0'>
                                        <Image src={dollarIcon} alt="Dollar Icon" />
                                        <p className="text-gray-600 ml-2">1,000 $STYLE</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src={timeIcon} alt="Time Icon" />
                                        <p className="text-gray-600 ml-2">LOCKED 1 MONTH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-gray-100 p-4 md:p-10">
                            <p className="pt-4 text-gray-800 font-bold">Get access to <span className='text-gray-500'>nft-collections</span> with usability in games. Every nft-collection will be <span className='text-gray-500'>usable for playing.</span></p>
                        </div>
                    </div>
                );
            case 'Tier Three':
                return (
                    <div className=" bg-white rounded-3xl border border-gray-500 flex flex-col md:flex-row">
                        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-500 p-4 md:p-10">
                            <div className='flex flex-col justify-start items-start'>
                                <h2 className="text-lg font-bold text-gray-500">TIER 1</h2>
                                <h3 className="text-4xl font-bold py-4">The NFT Tier!</h3>
                                <div className="flex flex-col md:flex-row">
                                    <div className='flex pr-2 items-center mb-2 md:mb-0'>
                                        <Image src={dollarIcon} alt="Dollar Icon" />
                                        <p className="text-gray-600 ml-2">1,000 $STYLE</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Image src={timeIcon} alt="Time Icon" />
                                        <p className="text-gray-600 ml-2">LOCKED 1 MONTH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-b-3xl md:rounded-b-none md:rounded-r-3xl bg-gray-100 p-4 md:p-10">
                            <p className="pt-4 text-gray-800 font-bold">Get access to <span className='text-gray-500'>nft-collections</span> with usability in games. Every nft-collection will be <span className='text-gray-500'>usable for playing.</span></p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="p-4 md:px-28 bg-white text-center">
            <h2 className="text-xl md:text-7xl mb-4">
                <span className="font-semibold">Stake</span> <span className="font-bold text-gray-400">$STYLE</span>
            </h2>
            <p className="text-xl md:text-3xl text-gray-400 font-semibold">Join a gaming ecosystem for usability of assets</p>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-full md:w-fit border rounded-full border-gray-500 mt-5 mb-10">
                    <button
                        className={`text-sm md:text-lg rounded-full m-1 py-1 px-4 ${activeTab === 'Tier One' ? 'bg-gradient-to-r from-black to-gray-500 text-white ' : 'bg-white text-black '}`}
                        onClick={() => setActiveTab('Tier One')}
                    >
                        Tier One
                    </button>
                    <button
                        className={`text-sm md:text-lg rounded-full m-1 py-1 px-4 ${activeTab === 'Tier Two' ? 'bg-gradient-to-r from-black to-gray-500 text-white ' : 'bg-white text-black '}`}
                        onClick={() => setActiveTab('Tier Two')}
                    >
                        Tier Two
                    </button>
                    <button
                        className={`text-sm md:text-lg rounded-full m-1 py-1 px-4 ${activeTab === 'Tier Three' ? 'bg-gradient-to-r from-black to-gray-500 text-white ' : 'bg-white text-black '}`}
                        onClick={() => setActiveTab('Tier Three')}
                    >
                        Tier Three
                    </button>
                </div>
            </div>
            {renderContent()}
        </section>
    );
};

export default TiersSection;
