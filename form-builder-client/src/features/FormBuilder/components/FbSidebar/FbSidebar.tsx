import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

export default function FbSidebar() {
    return (
        <div className="h-[calc(100vh-110px)] border-r w-[17em] fixed top-[110px] left-0">
            <div className="w-full h-full relative">
                <button className="p-0 h-[30px] w-[30px] absolute top-[10px] right-[-15px] rounded-full text-[#111] bg-[#C2B8B2] flex items-center justify-center text-lg">
                    <MdOutlineKeyboardDoubleArrowLeft />
                </button>
                <div className="p-4">
                    <h3 className="font-medium">Form Filds</h3>
                    <div className="mt-2">
                        <input type="text" placeholder="Search Fields" />
                    </div>
                </div>

                <div>
                    <div className="border">
                        <span>Short Text</span>
                    </div>
                    <div className="border">
                        <span>Long Text</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
