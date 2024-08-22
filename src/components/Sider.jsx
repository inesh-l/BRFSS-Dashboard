import { toast } from "react-toastify";
import Switch from "@mui/material/Switch";
import DropFile from "./DropFile";
import { tableFromIPC } from "apache-arrow";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function Sider({
  fileList,
  tableList,
  llmResult,
  setFileList,
  setFileFormData,
  files,
  db,
}) {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [llmstring, setLlmString] = useState("");

  // load llm result
  useEffect(() => {
    if (!llmResult) return;
    setLlmString(llmResult);
  }, [llmResult]);

  return (
    <div className=" flex h-screen grow flex-col justify-between overflow-y-auto  bg-white px-6 pb-4">
      <div className=" flex w-full flex-col">
        <div className=" mx-auto pb-4 pt-8 text-lg">File List</div>
        <ul className=" mx-4 space-y-1 text-left text-gray-500 ">
          {fileList.map((file) => (
            <li className=" flex w-full items-center justify-between gap-1">
              <button
                onClick={(e) => {
                  const target = e.target;
                  navigator.clipboard.writeText(
                    // `media/files/${target.textContent}`,
                    `${target.textContent}`,
                  );
                  toast("Copied to clipboard");
                }}
              >
                {file}
              </button>
              <div className=" mt-1 flex gap-2"></div>
            </li>
          ))}
        </ul>
        <hr className=" mx-auto my-4 h-1 w-48 rounded bg-gray-200" />
        <div className=" mx-auto pb-4 pt-2 text-lg">Table List</div>
        <ul className=" mx-4 space-y-1 text-left text-gray-500">
          {tableList.map((table, index) => (
            <li
              className=" flex w-full items-center justify-between gap-1"
              key={index}
            >
              <button
                onClick={(e) => {
                  const target = e.target;
                  navigator.clipboard.writeText(
                    // `SELECT * FROM ${target.textContent};`,
                    `${target.textContent}`,
                  );
                  toast("Copied to clipboard");
                }}
              >
                {table}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex w-full flex-col">
        <hr className=" mx-auto my-4 h-1 w-48 rounded bg-gray-200" />
        <div className=" mx-auto pb-4 pt-2 text-lg">LLM LOG</div>
        <div className=" h-96 w-full overflow-y-scroll p-2 text-gray-500">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {llmstring}
          </ReactMarkdown>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between space-x-4 text-gray-500">
          <DropFile
            setFileFormData={setFileFormData}
            files={files}
            fileList={fileList}
            db={db}
          />
        </div>
      </div>
    </div>
  );
}
