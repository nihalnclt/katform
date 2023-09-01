import { BsEye } from "react-icons/bs";

import { FbSubHeader } from ".";

export default function FbHeader() {
    return (
        <div>
            <div className="w-full px-5 h-[65px] flex items-center justify-between">
                <div>
                    <h1 className="font-[700] text-2xl">
                        <span className="text-[#197BBD]">Kat</span>Form
                    </h1>
                </div>
                <div className="text-center">
                    <span className="block font-medium text-lg">Test Form</span>
                    <span className="block text-sm text-green-600 font-medium">
                        Last saved at 10:46 PM
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="text-gray-500 px-3 border border-[#ced4da] flex items-center gap-2">
                        <BsEye /> Preview
                    </button>
                    <button className="bg-[#197BBD] px-3">Publish</button>
                    <div className="border-r h-[35px] px-1"></div>
                    <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                        <img
                            src="https://avatars.dicebear.com/api/initials/Nihal%20Nihal.svg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <FbSubHeader />
        </div>
    );
}
