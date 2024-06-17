import { FaCode } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";

type setGUIModeProps = {
    setGUIMode: (GUIMode: boolean) => void;
  };


export default function ModeSelector({setGUIMode}: setGUIModeProps) {
    return (
    <div className="flex justify-center bg-white p-4 border-b">
        <button className="mx-4 p-2 focus:bg-gray-300 hover:bg-gray-100 rounded-full" onClick = {() => {setGUIMode(false)}}>
            <FaCode />
        </button>
        <button className="mx-4 p-2 focus:bg-gray-300 hover:bg-gray-100 rounded-full" onClick = {() => {setGUIMode(true)}}>
            <FaFilter />
        </button>
    </div>
    );
}