import React, { useState } from "react";

type InfoPopupProps = {
    isOpen: boolean;
    onClose: () => void;
};

const InfoPopup: React.FC<InfoPopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Blurry background */}
            <div className="absolute inset-0 bg-gray-900 opacity-50 backdrop-blur-md"></div>

            {/* Actual popup content */}
            <div className="relative p-4 w-full max-w-lg bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Privacy info</h3>
                <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400 overflow-y-auto max-h-96">
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                    <p>
                        The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured
                        location.
                    </p>
                </div>
                <div className="flex justify-end items-center pt-0">
                    <button
                        onClick={onClose}
                        className="py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoPopup;
