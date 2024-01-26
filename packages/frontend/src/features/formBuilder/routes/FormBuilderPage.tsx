import { FBSidebar } from "../components/FBSidebar";
import { FBForm } from "../components/FBForm";

export const FormBuilderPage = () => {
  return (
    <div>
      <div className="bg-white border-b border-[#e4e4ea] h-[50px] px-5 flex items-center justify-between">
        <h1 className="font-bold text-lg">
          KAT<span className="text-rose-500">FORM</span>
        </h1>
        <div className="flex items-center gap-3">
          <span>Create</span>
          <span>Settings</span>
          <span>Publish</span>
        </div>
        <div className="flex items-center">
          <button>?</button>
          <button>D</button>
          <button>Publish</button>
          <div className="w-[30px] h-[30px] rounded-full bg-slate-300"></div>
        </div>
      </div>
      <div className="bg-[#f8f8fa] flex">
        <FBSidebar />
        <div className="mx-auto">
          <FBForm />
        </div>
      </div>
    </div>
  );
};
