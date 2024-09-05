import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
import PagesHeader from "../components/PagesHeader";
import "../styles/pages/legal.scss";
import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import tcs from "../assets/ninefive termsandconditions.pdf";

const TermsAndConditions = () => {
  /* const [tc, setTc] = useState(''); */
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
      setContainerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculatePageHeight = () => {
    const pageWidth = containerWidth * 0.6;
    const aspectRatio = 8.5 / 11; // A4 paper aspect ratio (width / height)
    const pageHeight = pageWidth / aspectRatio;

    return Math.min(pageHeight, containerHeight * 0.8);
  };
  return (
    <>
      {/* HEADER */}

      <PagesHeader />

      {/* CONTENT */}

      <section className="termsandconditions">
        <div className="tc-content pdf-div ">
          <Document file={tcs} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => {
                return (
                  <Page
                    key={page}
                    pageNumber={page}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={containerWidth * 0.65}
                    height={calculatePageHeight()} // Use the calculated height
                    // Adjust the height as needed
                  />
                );
              })}
          </Document>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
