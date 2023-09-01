export default function FbSubHeader() {
    return (
        <div className="bg-[#197BBD] h-[45px] w-full flex items-center justify-between">
            <div className="flex items-center justify-center w-full h-full">
                <button className="px-3 h-full rounded-none bg-[#439edb]">Build</button>
                <button className="px-3 h-full rounded-none">Settings</button>
                <button className="px-3 h-full rounded-none">Publish</button>
            </div>
        </div>
    );
}
