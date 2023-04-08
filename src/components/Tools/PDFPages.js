import React, { useState, Component } from 'react';
// import { Document, Page, pdfjs } from "react-pdf";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import "./PDFPages.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFPages({fileUrl = "", title = ""}){
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

	return (
		<div id="pdf-pages">
			<div style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<h1 className='titleStyle'>
					{title}
				</h1>
			</div>
			<div className="containerStyles">
				<Document
					file={fileUrl}
					onLoadSuccess={onDocumentLoadSuccess}
					onLoadError = {console.error}
					onSourceError = {console.error}
				>
					<Page pageNumber={pageNumber}
						height={300}/>
				</Document>
				<p className="pageNumStyles">
					Page {pageNumber} of {numPages}
				</p>
				<div onClick={goToPrevPage} className="leftArrowStyles">
					❰
				</div>
				<div onClick={goToNextPage} className="rightArrowStyles">
					❱
				</div>
			</div>
	  	</div>
	);
};

export default PDFPages;