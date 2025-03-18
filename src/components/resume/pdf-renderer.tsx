import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export function PdfRenderer() {
  const docs = [
    { uri: "/resume.pdf" }, // Local File
  ];

  return (
    <DocViewer
      style={{ width: 900, height: 1200 }}
      documents={docs}
      pluginRenderers={DocViewerRenderers}
      config={{
        header: {
          disableHeader: true,
          disableFileName: true,
          retainURLParams: false,
        },
        csvDelimiter: ",", // "," as default,
        pdfZoom: {
          defaultZoom: 1, // 1 as default,
          zoomJump: 0.1, // 0.1 as default,
        },
        pdfVerticalScrollByDefault: false, // false as default
      }}
    />
  );
}
