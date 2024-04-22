import React from "react";
import { FaCloudSun } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Searchbox from "./searchbox";

type Props = {}

export default function Navbar({ }: Props) {
    return (
        <nav className="shadow-sm px-20 sticky top-0 left-0 z-50 bg-white">
            <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto">
                <div className="flex items-center justify-center gap-2 ">
                    <h2 className="text-gray-500 text-3xl">Weather</h2>
                    <FaCloudSun className="text-3xl mt-1 text-yellow-500" />
                </div>
                {/* */}
                <section className="flex gap-2 items-center">
                <MdMyLocation className="text-2xl text-gray-400 hover:opacity-70 cursor-pointer " />
                <GrLocation className="text-2xl" />
                <p className="text-slate-900/80 text-sm"> Scotland </p>
                <div>{/* SearchBox */}
                <Searchbox value={""} onChange={undefined} onSubmit={undefined} />
                </div>
                </section>
            </div>
        </nav>
    );
}