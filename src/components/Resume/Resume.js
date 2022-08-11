import React from 'react'
import MyResume from './BrianAlegreResume.pdf'
import { Document } from 'react-pdf'
// https://www.npmjs.com/package/react-pdf

function Resume() {


    return (
        <div>
            <Document file={MyResume}>
            </Document>
        </div>
    )
}
export default Resume;