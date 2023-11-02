import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Pricing from "@/components/homepage/pricingsection";
import RootLayout from "@/app/layout";

const HomePage: React.FC = () => {
    return (
        <RootLayout>
            <div className="max-w-4xl mx-auto px-4">
                {" "}
                {/* This is your inner content container */}
                <div className="pt-52 pb-6">
                    <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full px-8 py-2 inline-flex items-center space-x-2 shadow-inner shadow-purple-400">
                        <span>Go directly to the demo</span>
                        <BsChevronRight className="w-5 h-5" />
                    </button>
                </div>
                <div className="text-left max-w-2xl">
                    <h1 className="text-white text-7xl">Template Project</h1>
                    <h2 className="pb-20 mt-4 pl-2 text-gray-400 text-4xl">
                        Your first step in the template world. This template can be modified according to your needs.
                    </h2>
                </div>
                <Pricing />
            </div>
        </RootLayout>
    );
};

export default HomePage;
