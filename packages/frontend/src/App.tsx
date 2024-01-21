import { Provider } from "react-redux";

import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>hello</Provider>
    // <div>
    //   <div className="bg-white border-b border-[#e4e4ea] h-[50px] px-5 flex items-center justify-between">
    //     <h1 className="font-bold text-lg">
    //       KAT<span className="text-rose-500">FORM</span>
    //     </h1>
    //     <div className="flex items-center gap-3">
    //       {/* <span>My Form</span>
    //                 <span className="block">Saved 2m Ago</span> */}
    //       <span>Create</span>
    //       <span>Settings</span>
    //       <span>Publish</span>
    //     </div>
    //     <div className="flex items-center">
    //       <button>?</button>
    //       <button>D</button>
    //       <button>Publish</button>
    //       <div className="w-[30px] h-[30px] rounded-full bg-slate-300"></div>
    //     </div>
    //   </div>
    //   {/* <div className="bg-[#1ea59e] h-[40px] w-full flex items-center justify-between">
    //                 <div></div>
    //                 <div>
    //                     <span>Create</span>
    //                     <span>Settings</span>
    //                     <span>Publish</span>
    //                 </div>
    //                 <div>
    //                     <button>L</button>
    //                     <button>T</button>
    //                     <button>M</button>
    //                 </div>
    //             </div> */}
    //   <div className="bg-[#f8f8fa] flex">
    //     {/* <div className="bg-white border-r border-[#e4e4ea] h-[100vh] w-[60px]">
    //                 <div>
    //                     <IoColorPaletteOutline />
    //                     <span>Fields</span>
    //                 </div>
    //                 <div>
    //                     <IoColorPaletteOutline />
    //                     <span>Payments</span>
    //                 </div>
    //                 <div>
    //                     <IoColorPaletteOutline />
    //                     <span>Widgets</span>
    //                 </div>
    //                 <div>
    //                     <IoColorPaletteOutline />
    //                     <span>Themes</span>
    //                 </div>
    //             </div> */}
    //     <div className="bg-white border-r border-[#e4e4ea] h-[100vh] w-[280px]">
    //       <div>
    //         <input type="text" />
    //       </div>
    //       <div className="flex items-center">
    //         <span>Fields</span>
    //         <span>Payments</span>
    //         <span>Widgets</span>
    //       </div>
    //       <div className="p-2">
    //         <div className="flex items-center gap-2 py-1">
    //           <div className="w-[35px] h-[35px] rounded-full bg-[#5aa9e6] text-white flex items-center justify-center">
    //             <MdOutlineTextFields />
    //           </div>
    //           <span>Text Content</span>
    //         </div>
    //         <div className="flex items-center gap-2 py-1">
    //           <div className="w-[35px] h-[35px] rounded-full bg-[#fb6f92] text-white flex items-center justify-center">
    //             <FiPhoneCall />
    //           </div>
    //           <span>Email</span>
    //         </div>
    //         <div className="flex items-center gap-2 py-1">
    //           <div className="w-[35px] h-[35px] rounded-full bg-[#aed8ac] text-white flex items-center justify-center">
    //             <FiPhoneCall />
    //           </div>
    //           <span>Phone Number</span>
    //         </div>
    //         <div className="flex items-center gap-2 py-1">
    //           <div className="w-[35px] h-[35px] rounded-full bg-[#fec89a] text-white flex items-center justify-center">
    //             <FiPhoneCall />
    //           </div>
    //           <span>Star Rating</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <div>
    //         <label htmlFor="">Name</label>
    //         <input type="text" className="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
