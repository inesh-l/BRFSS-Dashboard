import { FaCode } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";

export default function ModeSelector({ setGUIMode }) {
  return (
    <div className="flex justify-center border-b bg-white p-4">
      <button
        className="mx-4 rounded-full p-2 hover:bg-gray-100 focus:bg-gray-300"
        onClick={() => {
          setGUIMode(false);
        }}
      >
        <FaCode />
      </button>
      <button
        className="mx-4 rounded-full p-2 hover:bg-gray-100 focus:bg-gray-300"
        onClick={() => {
          setGUIMode(true);
        }}
      >
        <FaFilter />
      </button>
    </div>
  );
}
