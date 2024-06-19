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
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-500 flex">
                        <div className="flex-1 border-r border-gray-500 p-10">
                            <div className='flex flex-row justify-start items-start w-full'>
                                <h2 className="text-lg font-bold text-gray-500">TIER 1</h2>
                            </div>
                            <div className='flex flex-row justify-start items-start w-full'>
                                <h3 className="text-4xl font-bold py-4">The NFT Tier!</h3>
                            </div>
                            <div className='flex flex-row justify-start items-start w-full'>
                                <div className='flex flex-row w-fit justify-center items-center'>
                                    <Image src={dollarIcon} alt="Dollar Icon" />
                                    <p className="text-gray-600 p-1">1,000 $STYLE</p>
                                </div>
                                <div className='flex flex-row w-fit justify-center items-center pl-3'>
                                    <Image src={timeIcon} alt="Dollar Icon" />
                                    <p className="text-gray-600 p-1">LOCKED 1 MONTH</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 rounded-r-3xl bg-gray-100 p-10">
                            <div className='flex flex-col justify-center items-center w-full h-full'>
                                <p className="text-gray-800 font-bold">Get access to <span className='text-gray-500'>nft-collections</span> with usability in games. Every nft-collection will be <span className='text-gray-500'>usable for playing.</span></p>
                            </div>
                        </div>
                    </div>
                );
            case 'Tier Two':
                return (
                    <div className="flex justify-between p-6 bg-gray-50 border rounded-md">
                        <div className="text-lg">
                            <h3 className="text-xl font-bold">TIER 2</h3>
                            <p className="text-2xl font-bold mt-2">The Advanced Tier!</p>
                            <div className="flex items-center mt-2">
                                <span className="mr-2">🪙 2.000 $STYLE</span>
                                <span>⏳ LOCKED 2 MONTHS</span>
                            </div>
                        </div>
                        <div className="text-lg max-w-md">
                            Get access to more exclusive nft-collections with enhanced usability in games. More benefits and rewards.
                        </div>
                    </div>
                );
            case 'Tier Three':
                return (
                    <div className="flex justify-between p-6 bg-gray-50 border rounded-md">
                        <div className="text-lg">
                            <h3 className="text-xl font-bold">TIER 3</h3>
                            <p className="text-2xl font-bold mt-2">The Elite Tier!</p>
                            <div className="flex items-center mt-2">
                                <span className="mr-2">🪙 3.000 $STYLE</span>
                                <span>⏳ LOCKED 3 MONTHS</span>
                            </div>
                        </div>
                        <div className="text-lg max-w-md">
                            Get access to the most exclusive <span className=' text-gray-500'>nft-collections</span> with premium usability in games. Ultimate benefits and rewards.
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="p-8 bg-white text-center">
            <h2 className="text-2xl mb-4">
                <span className="font-semibold">Stake</span> <span className="font-bold text-gray-500">$STYLE</span>
            </h2>
            <p className="mb-4">Join a gaming ecosystem for usability of assets</p>
            <div className='flex flex-row justify-center items-center'>
                <div className="flex justify-center items-center w-fit border rounded-full border-gray-500 mt-4 mb-6">
                    <button
                        className={`rounded-full m-1 py-1 px-4 ${activeTab === 'Tier One' ? 'bg-gradient-to-r from-black to-gray-500 text-white ' : 'bg-white text-black '}`}
                        onClick={() => setActiveTab('Tier One')}
                    >
                        Tier One
                    </button>
                    <button
                        className={`rounded-full m-1 py-1 px-4 ${activeTab === 'Tier Two' ? 'bg-gradient-to-r from-black to-gray-500 text-white ' : 'bg-white text-black '}`}
                        onClick={() => setActiveTab('Tier Two')}
                    >
                        Tier Two
                    </button>
                    <button
                        className={`rounded-full m-1 py-1 px-4 ${activeTab === 'Tier Three' ? 'bg-gradient-to-r from-black to-gray-500 text-white ' : 'bg-white text-black '}`}
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
