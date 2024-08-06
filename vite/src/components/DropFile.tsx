import { AsyncDuckDB } from "duckdb-wasm-kit";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaFileArrowUp } from "react-icons/fa6";

type DropFileProps = {
  setFileFormData: (formData: FormData) => void;
  files: File[];
  fileList: string[];
  db: AsyncDuckDB;
};

export default function DropFile({ setFileFormData, files, fileList, db }: DropFileProps) {
  const onDrop = useCallback(
     async (acceptedFiles: File[]) => {
      for (let i = 0; i < acceptedFiles.length; i++) {
        console.log(acceptedFiles[i]);
        const fileText = await acceptedFiles[i].text();
        fileList.push(acceptedFiles[i].name);
        db.registerFileText(acceptedFiles[i].name, fileText);
      }
    },
    [setFileFormData],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className=" text-gray-500 hover:cursor-pointer" {...getRootProps()}>
      <input {...getInputProps()} />
      <FaFileArrowUp />
    </div>
  );
}
