import React, { useState } from "react";
import { Row, Col, Button, Badge } from "antd";
import { useReactMediaRecorder } from "react-media-recorder";
import Text from "antd/lib/typography/Text";
const ScreenRecording = ({
  screen,
  audio,
  video,
  downloadRecordingPath,
  downloadRecordingType,
  emailToSupport
}) => {
  const [recordingNumber, setRecordingNumber] = useState(0);
  const RecordView = () => {
    const {
      status,
      startRecording: startRecord,
      stopRecording: stopRecord,
      mediaBlobUrl
    } = useReactMediaRecorder({ screen, audio, video });
const startRecording = () => {
      return startRecord();
    };
const stopRecording = () => {
      const currentTimeSatmp = new Date().getTime();
      setRecordingNumber(currentTimeSatmp);
      return stopRecord();
    };
const viewRecording = () => {
      window.open(mediaBlobUrl, "_blank").focus();
    };
const downloadRecording = () => {
      const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;
      try {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          // for IE
          window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
        } else {
          // for Chrome
          const link = document.createElement("a");
          link.href = mediaBlobUrl;
          link.download = pathName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (err) {
        console.error(err);
      }
    };
return (
      <Row>
        <Col span="12" style={{ lineHeight: "24px" }}>
          {status && status !== "stopped" && (
            <Text>
              Status: {status && status.toUpperCase()}
            </Text>
          )}
          {status && status === "recording" && (
            <Badge
              className="screen-recording-badge"
              color="#faad14"
              status="processing"
              offset={[2, 0]}
              style={{
                marginLeft: "5px"
              }}
            />
          )}
        </Col>
        <Col span="12" style={{ textAlign: "right" }}>
          {status && status !== "recording" && (
            <button onClick={startRecord} className="p-2">
              {mediaBlobUrl ? <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/record.png" alt="record"/> : <img className="mt-2" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/record.png" alt="record"/>}
            </button>
            
          )}
          
          {status && status === "recording" && (
            <button onClick={stopRecording} className="p-2">
              <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/filled-circle.png" alt="filled-circle"/>
            </button>
          )}
          
          {mediaBlobUrl && status && status === "stopped" && (
            <button onClick={viewRecording} className="p-2">
              View
            </button>
          )}
        
          {downloadRecordingType &&
            mediaBlobUrl &&
            status &&
            status === "stopped" && (
              <button onClick={downloadRecording} className="p-2">
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/download--v1.png" alt="download--v1"/>
              </button>
            )}          
        </Col>
      </Row>
    );
  };
return (
    <div className="Scren-Record-Wrapper" style={{ padding: "5px 20px" }}>
      {RecordView()}
    </div>
  );
};
export default ScreenRecording;