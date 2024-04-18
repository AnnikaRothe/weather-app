import React from "react";
import { FaCloudSun } from "react-icons/fa";

type Props = {}

export default function navbar({ }: Props) {
    return (
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
                <div className="flex items-center justify-center gap-2 ">
                    <h2 className="text-gray-500 text-3xl">Weather</h2>
                    <FaCloudSun className="text-3xl mt-1 text-yellow-500" />
                </div>
                {/* */}
            </div>
        </nav>
    );
}