import React from "react"; 
import { IoMdSearch } from "react-icons/io"; 
import { cn } from "../utils/cn";


type Props = {
    className?: string 
    value: string; 
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined; 
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined; 
}

export default function Searchbox(props: Props) { 
    return (
        <form onSubmit={props.onSubmit}
        className={cn("flex relative items-center justify-center h-10",
            props.className
        )}> 
      
        <input 
            type="text" 
            defaultValue={props.value} 
            onChange={props.onChange} 
            placeholder="Search location.."
            className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none
            focus:border-green-600 h-full" 
        />
        <button className="px-4 py-[9px] bg-customColor text-white rounded-r-md 
        focus:outline-none hover:bg-green-500 h-full">
        <IoMdSearch />
        </button>
    </form>
);
}

