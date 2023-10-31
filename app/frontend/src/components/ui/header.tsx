import React from "react";
import { useAuth } from "./authContext";
import { RiUserSettingsFill } from "react-icons/ri";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
    const authContext = useAuth();
    const currentUser = authContext ? authContext.currentUser : null;

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            window.location.href = "/";
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <header className="bg-black z-50 relative">
            <div className="mx-auto px-4 lg:px-8">
                {" "}
                <nav className="grid grid-cols-3 items-center border-gray-200 py-2.5">
                    <div className="flex justify-start items-center">
                        <a href="/" className="flex items-center">
                            <img src="/main_icon_white.png" className="mr-3 h-[40px] w-auto" alt="Your Logo" />
                            <span className="self-center text-xl font-semibold text-white whitespace-nowrap">Template project</span>
                        </a>
                    </div>
                    <div className="hidden lg:flex justify-center items-center space-x-8" id="navigation-menu">
                        <ul className="flex flex-row">
                            <li>
                                <a href="/prices" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Prices
                                </a>
                            </li>
                            <li>
                                <a href="/demo" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Demo
                                </a>
                            </li>
                            <li>
                                <a href="/contributing" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contributing
                                </a>
                            </li>
                            <li>
                                <a href="/updates" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Updates
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-end items-center">
                        {!currentUser ? (
                            <>
                                <a
                                    href="/login"
                                    className="text-white hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-transparent"
                                >
                                    Login
                                </a>
                                <a
                                    href="/signup"
                                    className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                                >
                                    Sign up
                                </a>
                            </>
                        ) : (
                            <div className="relative group inline-block">
                                <button
                                    id="dropdownHoverButton"
                                    data-dropdown-toggle="dropdownHover"
                                    data-dropdown-trigger="hover"
                                    className="text-white bg-purple-600 hover:bg-purple-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hbg-purple-700"
                                    type="button"
                                >
                                    <RiUserSettingsFill className="text-white" size={18} />
                                </button>

                                <div
                                    id="dropdownHover"
                                    className="absolute right-0 z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                >
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={handleLogout}
                                            >
                                                Log out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
