import React, { useEffect, useState } from 'react';
import { Stack, Pagination, CircularProgress, Button } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import DownloadIcon from '@mui/icons-material/Download';
import Spacer from '../../styled-components/Spacer';
import resume from './Joseph Palma Resume.pdf';
import '../../../styles/resume.css';

function DesktopResume({ width }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [displayWidth, setDisplayWidth] = useState(600);

  useEffect(() => {
    if (width > 1300) {
      setDisplayWidth(800);
    }
    if (width < 1300) {
      setDisplayWidth(700);
    }
    if (width < 800) {
      setDisplayWidth(600);
    }
  });

  const onDocumentLoadSuccess = ({ numPages }) => {
    setLoaded(true);
    setNumPages(numPages);
  };

  const handleChange = (e, v) => {
    setPageNumber(v);
  };

  return (
    <div id="_resume">
      <Spacer axis="vertical" size={20} />
      <div className="resume-grid">
        {loaded
          ? (
            <div>
              <div className="top-content_item download">
                <Button color="primary" aria-label="download resume">
                  <a href={resume} download>
                    <div className="download">
                      Download
                      <DownloadIcon className="download-icon" />
                    </div>
                  </a>
                </Button>
              </div>
              {numPages > 1 ?
                <Stack spacing={2} className="top-content_item pagination">
                  <Pagination count={numPages} color="primary" page={pageNumber} onChange={handleChange} />
                </Stack> :
                <></>
              }
            </div>
          ) : <></>}
        <div className="resume-wrapper">
          <Document
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={(
              <div className="spinner">
                <CircularProgress color="primary" />
              </div>
            )}
          >
            <Page
              key={`page_${pageNumber}`}
              pageNumber={pageNumber}
              width={displayWidth}
              className="page-pdf"
              loading={(
                <div className="spinner">
                  <CircularProgress color="primary" />
                </div>
            )}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default DesktopResume;
