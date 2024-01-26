import clsx from "clsx";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextFields } from "react-icons/md";
import { useDispatch } from "react-redux";

import { FBSidebarField } from "../../types";
import { addFieldToCurrentForm } from "../../slices/formBuilderSlice";

const fbFields: FBSidebarField[] = [
  {
    name: "Short Text",
    icon: MdOutlineTextFields,
    type: "short-text",
    bgColor: "#5aa9e6",
  },
  {
    name: "Long Text",
    icon: MdOutlineTextFields,
    type: "long-text",
    bgColor: "#5aa9e6",
  },
  {
    name: "Email",
    icon: MdOutlineTextFields,
    type: "email",
    bgColor: "#fb6f92",
  },
  {
    name: "Phone Number",
    icon: FiPhoneCall,
    type: "phone-number",
    bgColor: "#aed8ac",
  },
  {
    name: "Star Rating",
    icon: FiPhoneCall,
    type: "star-rating",
    bgColor: "#fec89a",
  },
];

export const FBSidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border-r border-[#e4e4ea] h-[100vh] w-[280px]">
      <div>
        <input type="text" />
      </div>
      <div className="flex items-center">
        <span>Fields</span>
        <span>Payments</span>
        <span>Widgets</span>
      </div>
      <div className="p-2">
        {fbFields?.map((field, index) => {
          let IconCombonent = field.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-2 py-1"
              onClick={() => dispatch(addFieldToCurrentForm({ ref: "", type: field.type }))}
            >
              <div
                className={
                  "w-[35px] h-[35px] rounded-full text-white flex items-center justify-center"
                }
                style={{ backgroundColor: field.bgColor }}
              >
                <IconCombonent />
              </div>
              <span className="capitalize">{field.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
