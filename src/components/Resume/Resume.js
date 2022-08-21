import React, { useState } from 'react';
// import MyResume from './BrianAlegreResume.pdf'
// import MyResume from '.././assets/BrianAlegreResume.pdf'
import { Document, Page } from 'react-pdf';
// https://www.npmjs.com/package/react-pdf

function Resume() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }


    // return (
    //     <div className="p-100 w-max">
    //         <Document file='/BrianAlegreResume.pdf' onLoadSuccess={onDocumentLoadSuccess}>
    //             <Page pageNumber={pageNumber} />
    //         </Document>
    //         <p>
    //             Page {pageNumber} of {numPages}
    //         </p>
    //     </div>
    // )

    return (
        <div>
            <iframe className='mx-auto min-h-full'
                src="https://docs.google.com/document/d/1ib_oK6OZG6353VS7CuBLe0iwJxh_PSiM/edit?usp=sharing&ouid=100305447258009104354&rtpof=true&sd=true"
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="75%"
            ></iframe>
        </div>
    )
}
export default Resume;