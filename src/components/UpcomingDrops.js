import Image from 'next/image';
import third from '../../public/assets/3.jpg';
import fourth from '../../public/assets/4.jpg';
import timeIcon from '../../public/assets/time.svg';

const UpcomingDrops = () => {
    return (
        <section className="p-4 md:px-20 bg-white">
            <h2 className="text-start text-2xl mb-4 text-gray-500 font-semibold">Upcoming Drops</h2>
            <div className="flex flex-col md:flex-row justify-stretch">
                <div className="w-full mb-4 md:mb-0 md:pr-2">
                    <div className="w-full rounded-3xl overflow-hidden shadow-lg">
                        <Image src={third} alt='Space Cowboys' layout="responsive" />
                    </div>
                    <div className="flex justify-between items-center bg-white px-4 py-2">
                        <div className="flex flex-col items-start pb-1">
                            <span className="text-gray-400 font-bold text-xl">Space Cowboys</span>
                            <div className='flex flex-row w-fit justify-center items-center'>
                                <Image src={timeIcon} alt="Time Icon" />
                                <span className="text-black text-sm pl-1 font-semibold">30 MIN</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase">Chain</div>
                            <span className="text-black text-sm font-semibold">ETH</span>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase">Quantity</div>
                            <span className="text-black text-sm font-semibold">1000s</span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:pl-2">
                    <div className="w-full rounded-3xl overflow-hidden shadow-lg">
                        <Image src={fourth} alt='On Chain Orcs' layout="responsive" />
                    </div>
                    <div className="flex justify-between items-center bg-white px-4 py-2">
                        <div className="flex flex-col items-start pb-1">
                            <span className="text-gray-400 font-bold text-xl">On Chain Orcs</span>
                            <div className='flex flex-row w-fit justify-center items-center'>
                                <Image src={timeIcon} alt="Time Icon" />
                                <span className="text-black text-xs pl-1 font-semibold">3 DAYS</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase">Chain</div>
                            <span className="text-black text-xs font-semibold">ARBITRUM</span>
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 uppercase">Quantity</div>
                            <span className="text-black text-xs font-semibold">1000s</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingDrops;
