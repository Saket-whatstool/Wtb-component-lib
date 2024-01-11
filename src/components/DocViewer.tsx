import React from 'react';

export interface PdfViewerProps extends React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    pdfUrl: string;
}

export const PdfViewer: React.FunctionComponent<PdfViewerProps> = (props) => {
    const { pdfUrl, ...rest } = props;

    return <iframe title="PDF Viewer" src={pdfUrl} width="100%" height="500px" {...rest}></iframe>;
};
