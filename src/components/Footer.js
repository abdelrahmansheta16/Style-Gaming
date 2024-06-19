import Image from "next/image";
import uniswapLogo from '../../public/assets/uniswap.svg';
import mexcLogo from '../../public/assets/mexc.svg';
import bitgetLogo from '../../public/assets/bitget.svg';
import copyIcon from '../../public/assets/copy.svg';
import { useState } from "react";

const Footer = () => {
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const platforms = {
        Uniswap: { ERC20: '0xUniswapERC20...', ARB: '0xUniswapARB...' },
        MEXC: { ERC20: '0xMEXCERC20...', ARB: '0xMEXCARB...' },
        Bitget: { ERC20: '0xBitgetERC20...', ARB: '0xBitgetARB...' }
    };

    const handleCopyAddress = (address) => {
        navigator.clipboard.writeText(address);
        alert(`Copied: ${address}`);
    };

    return (
        <footer className="bg-gray-200 px-14 pt-10">
            <div className="bg-white pt-5 border rounded-t-xl">
                <div className="max-w-7xl mx-auto p-12">
                    <div className="flex flex-col items-start">
                        <div className="flex-1">
                            <div className=" bg-gray-200 flex items-center justify-between rounded-full px-4 py-1">
                                <span className="text-gray-800 text-xs font-semibold px-4">
                                    GET $STYLE TO ACCESS THE ECOSYSTEM
                                </span>
                                <button className=" text-xs bg-gradient-to-r from-black to-gray-500 text-white rounded-full px-6 py-1 flex items-center transition duration-300 ease-in-out hover:bg-gray-700">
                                    Get $Style
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold py-4">
                            <span className="text-black">Unlock </span>
                            <span className="text-gray-500">Gaming Usability</span>
                        </h1>
                        <div className="flex-1" /> {/* Maintaining the balance */}
                    </div>
                    <div className="flex items-start justify-between py-2">
                        <div>
                            <h2 className="font-bold text-lg">$STYLE Contracts</h2>
                            <div className="flex gap-2">
                                <div className={'flex items-center justify-between py-2  border-l-2 border-r-2 border-gray-300 text-black font-semibold px-4 rounded-3xl hover:bg-gray-100'}>
                                    <span>On ERC20</span>
                                    <button onClick={() => selectedPlatform ? handleCopyAddress(platforms[selectedPlatform]['ERC20']) : alert('Please select a platform first')} className="ml-2">
                                        <Image src={copyIcon} alt="Copy" width={14} height={14} />
                                    </button>
                                </div>
                                <div className={'flex items-center justify-between py-2 border-l-2 border-r-2 border-gray-300 bg-gray-200 text-black font-semibold px-4 rounded-3xl'}>
                                    <span>On ARB</span>
                                    <button onClick={() => selectedPlatform ? handleCopyAddress(platforms[selectedPlatform]['ARB']) : alert('Please select a platform first')} className="ml-2">
                                        <Image src={copyIcon} alt="Copy" width={14} height={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">

                            <button
                                className={`flex items-center space-x-2 ${selectedPlatform === 'Uniswap' ? 'bg-gray-300' : ''} p-4`}
                                onClick={() => setSelectedPlatform('Uniswap')}
                            >
                                <Image src={uniswapLogo} alt={'Uniswap'} />
                            </button>
                            <button
                                className={`flex items-center space-x-2 ${selectedPlatform === 'MEXC' ? 'bg-gray-300' : ''} p-4`}
                                onClick={() => setSelectedPlatform('MEXC')}
                            >
                                <Image src={mexcLogo} alt={'MEXC'} />
                            </button>
                            <button
                                className={`flex items-center space-x-2 ${selectedPlatform === 'Bitget' ? 'bg-gray-300' : ''} p-4`}
                                onClick={() => setSelectedPlatform('Bitget')}
                            >
                                <Image src={bitgetLogo} alt={'Bitget'} />
                            </button>
                        </div>
                    </div>
                    <p className=" text-start text-xs mt-6">Powered by Style Protocol © 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
