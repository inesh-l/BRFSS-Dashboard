import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaFileArrowUp } from "react-icons/fa6";

type DropFileProps = {
  setFileFormData: (formData: FormData) => void;
  files: File[];
};

export default function DropFile({ setFileFormData, files }: DropFileProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      let newFormData = new FormData();
      newFormData.append("file", acceptedFiles[0]);
      setFileFormData(newFormData);
      files.push(...acceptedFiles);
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
