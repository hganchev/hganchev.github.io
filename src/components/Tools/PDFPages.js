import React, { useState, Component } from 'react';
// import { Document, Page, pdfjs } from "react-pdf";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import "./PDFPages.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const slideStyles = {
	width: "100%",
	height: "100%",
	borderRadius: "10px",
	backgroundSize: "cover",
	backgroundPosition: "center",
};
  
const rightArrowStyles = {
	position: "absolute",
	top: "50%",
	transform: "translate(0, -50%)",
	right: "32px",
	fontSize: "45px",
	color: "#fff",
	zIndex: 1,
	cursor: "pointer",
};

const leftArrowStyles = {
	position: "absolute",
	top: "50%",
	transform: "translate(0, -50%)",
	left: "32px",
	fontSize: "45px",
	color: "#fff",
	zIndex: 1,
	cursor: "pointer",
};

const sliderStyles = {
	position: "relative",
	height: "100%",
};

const containerStyles = {
	display: "flex",
	justifyContent: "center",
};

function PDFPages({fileUrl}){
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
		<div className='PDFPages' style={sliderStyles}>
			<div>
				<div onClick={goToPrevPage} style={leftArrowStyles}>
					❰
				</div>
				<div onClick={goToNextPage} style={rightArrowStyles}>
					❱
				</div>
			</div>
			<div style={containerStyles}>
				<Document
					file={fileUrl}
					onLoadSuccess={onDocumentLoadSuccess}
					onLoadError = {console.error}
					onSourceError = {console.error}
				>
					<Page pageNumber={pageNumber}/>
				</Document>
			</div>
			<p>
				Page {pageNumber} of {numPages}
			</p>
	  	</div>
	);
};

export default PDFPages;