import { useEffect, useState } from "react";
import Perspective from "./components/Perspective";
import SQLEditor from "./components/SQLEditor";
import Sider from "./components/Sider";
import SideSelector from "./components/SideSelector";
import ModeSelector from "./components/ModeSelector";
import { useDuckDb } from 'duckdb-wasm-kit';

import { execute_query, updateTableList } from "./lib/db/dbconn";

import { RiDragMove2Line } from "react-icons/ri";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GUIView from "./components/GUIView";

function App() {
  const [arrowFile, setArrowFile] = useState<any[] | null>(null);
  const [llmResult, setLlmResult] = useState<string | null>(null);
  const [fileList, setFileList] = useState<string[]>([]);
  const [tableList, setTableList] = useState<string[]>([]);
  const [selectedCode, setSelectedCode] = useState<string>("");
  const [fileFormData, setFileFormData] = useState<FormData | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [GUIMode, setGUIMode] = useState<boolean>(true); // false for SQL input, true for GUI

  const { db, loading, error } = useDuckDb();
  if (db) {
    console.log(db);
  }


  // excuteQuery & updateTableList when send selectedCode
  useEffect(() => {
    if (!selectedCode) return;
    toast
      .promise(
        execute_query(db, selectedCode, setArrowFile, setLlmResult),
        {
          pending: "Excuting ...",
          success: "Excuted 👌",
          error: "Failed 🤯",
        },
      )
      .then(() => {
        console.log("selectedCode", selectedCode);
        if (
          selectedCode.toLowerCase().includes("create") ||
          selectedCode.toLowerCase().includes("drop")
        ) {
          toast.promise(updateTableList(db, setTableList), {
            pending: "Updating Table List ...",
            success: "Table List Updated 👌",
            error: "Failed 🤯",
          });
        }
      });
  }, [selectedCode]);



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        // transition:Bounce
      />
      <PanelGroup direction="horizontal">
        <SideSelector />
        <Panel defaultSize={20} minSize={5}>
          <Sider
            fileList={fileList}
            tableList={tableList}
            llmResult={llmResult}
            setFileList={setFileList}
            setFileFormData={setFileFormData}
            files={files}
            db={db}
          />
        </Panel>
        <PanelResizeHandle className=" border-x text-sm">
          <RiDragMove2Line className=" h-full items-center justify-center text-gray-500" />
        </PanelResizeHandle>
        <Panel>
          <PanelGroup direction="vertical">
            <ModeSelector setGUIMode={setGUIMode}/>
            <Panel defaultSize={55} minSize={5}>
              {GUIMode ? <GUIView setSelectedCode={setSelectedCode} /> : <SQLEditor setSelectedCode={setSelectedCode} />}
            </Panel>
            <PanelResizeHandle className=" border-y text-sm">
              <RiDragMove2Line className=" w-full items-center justify-center text-gray-500" />
            </PanelResizeHandle>
            <Panel defaultSize={35} minSize={5}>
              <Perspective arrowFile={arrowFile} />
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </>
  );
}

export default App;
