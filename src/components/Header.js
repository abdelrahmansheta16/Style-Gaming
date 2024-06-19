import Image from "next/image"
import logo from '../../public/assets/logo.svg'
const Header = () => {
    return (
        <header className="flex justify-between py-2 px-6 bg-white shadow-md">
            <Image src={logo} alt="Style"/>
            <div className="flex space-x-4">
                <button className="border-l-2 border-r-2 border-gray-300 bg-gray-200 text-black font-semibold py-2 px-4 rounded-3xl">
                    Log In
                </button>
                <button className=" border-l-2 border-r-2 border-gray-300 text-black font-semibold py-2 px-4 rounded-3xl hover:bg-gray-100">
                    Register
                </button>
            </div>
        </header>
    )
}

export default Header
