// @ts-ignore
import perspective from "https://cdn.jsdelivr.net/npm/@finos/perspective/dist/cdn/perspective.js";
import { useEffect } from "react";

const WORKER = perspective.worker();

export default function Perspective({ arrowFile }) {
  useEffect(() => {
    if (!arrowFile) return;
    const loadPerspectiveViewer = async () => {
      // const resp = await arrowFile;
      const arrow = arrowFile;
      const viewerElement = document.querySelectorAll("perspective-viewer");

      if (viewerElement && viewerElement.length === 1) {
        const table = WORKER.table(arrow);
        // @ts-ignore
        viewerElement[0].load(table);
      } else {
        throw Error("Expected exactly one instance of `<perspective-viewer>`.");
      }
    };
    loadPerspectiveViewer().catch((error) => console.warn("error", error));
  }, [arrowFile]);

  return (
    // @ts-ignore
    <perspective-viewer style={{ height: "100%" }} settings theme="Pro Light" />
  );
}
