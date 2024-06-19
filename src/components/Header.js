import Image from "next/image";
import { useState } from "react";
import logo from '../../public/assets/logo.svg';

const Header = () => {
    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <header className="flex justify-between items-center py-2 px-4 sm:px-20 bg-white shadow-md">
            <div className="shrink-0">
                <Image src={logo} alt="Style" />
            </div>
            <div className="hidden sm:flex space-x-4">
                <button className="border-l-2 border-r-2 border-gray-300 bg-gray-200 text-black font-semibold py-1 sm:py-2 px-3 sm:px-4 rounded-3xl">
                    Log In
                </button>
                <button className="border-l-2 border-r-2 border-gray-300 text-black font-semibold py-1 sm:py-2 px-3 sm:px-4 rounded-3xl hover:bg-gray-100">
                    Register
                </button>
            </div>
            {/* Mobile menu button */}
            <button onClick={toggleDropdown} className="sm:hidden border border-gray-300 text-black font-semibold py-1 px-3 rounded-3xl hover:bg-gray-100">
                Menu
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute right-4 mt-12 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                    <button onClick={toggleDropdown} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log In</button>
                    <button onClick={toggleDropdown} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Register</button>
                </div>
            )}
        </header>
    );
};

export default Header;
