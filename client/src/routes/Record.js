import {ReactMediaRecorder} from "react-media-recorder";
import React from "react";


const RecordView = () => (
    <div>
        <ReactMediaRecorder
            video
            render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                <div>
                    <p>{status}</p>
                    <button onClick={startRecording}>Start Recording</button>
                    <button onClick={stopRecording}>Stop Recording</button>
                    <video src={mediaBlobUrl} controls autoplay loop />
                </div>
            )}
        />
    </div>
);

export default RecordView;