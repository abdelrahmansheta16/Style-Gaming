import Image from "next/image";
import first from '../../public/assets/1.jpg'
const Card = ({ image, title, duration, chain, quantity }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <Image src={first} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">⏳ {duration}</p>
                <p className="text-gray-700 text-base">🔗 {chain}</p>
                <p className="text-gray-700 text-base">📦 {quantity}</p>
            </div>
        </div>
    );
};

export default Card;
