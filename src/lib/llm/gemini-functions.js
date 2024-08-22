import { GoogleAIFileManager } from "@google/generative-ai/files";
import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiKey = import.meta.env.GEMINI_KEY ?? "";
const genAI = new GoogleGenerativeAI(geminiKey);

let uploadResult;

export async function getOrUploadFile() {
  const fileManager = new GoogleAIFileManager(geminiKey);
  uploadResult = await fileManager.uploadFile("../db/info.md", {
    mimeType: "text/markdown",
    displayName: "DB Info File",
  });
  console.log(
    `Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`,
  );

  // const getFile = await fileManager.getFile("info.md");
  //     console.log(getFile);
}

export async function generateContent() {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-latest",
  });
  const result = await model.generateContent([
    { text: "Describe the image with a creative description." },
    {
      fileData: {
        mimeType: uploadResult.file.mimeType,
        fileUri: uploadResult.file.uri,
      },
    },
  ]);
  return result;
}
