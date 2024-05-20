import { FaCode } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";

export default function ModeSelector() {
    return (
    <div className="flex justify-center bg-white p-4 border-b">
        <button className="mx-4 p-2 focus:bg-gray-300 hover:bg-gray-100 rounded-full">
            <FaCode />
        </button>
        <button className="mx-4 p-2 focus:bg-gray-300 hover:bg-gray-100 rounded-full">
            <FaFilter />
        </button>
    </div>
    );
}