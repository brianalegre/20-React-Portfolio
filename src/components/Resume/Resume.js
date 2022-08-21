import React, { useState } from 'react';
// import MyResume from './BrianAlegreResume.pdf'
// import MyResume from '.././assets/BrianAlegreResume.pdf'
import { Document, Page } from 'react-pdf';
// https://www.npmjs.com/package/react-pdf

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    return (
        <div className="p-100 w-max">
            <Document file='/BrianAlegreResume.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    )
}
export default Resume;