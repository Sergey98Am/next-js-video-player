"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

//video path
let videosrc = "https://bucket-viewer.s3.amazonaws.com/viewer1664370329252.mp4";

const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer
        url={videosrc}
        controls={true}
        pip={true}
        playing={true}
        muted={true}
      />
    </div>
  );
};

export default VideoPlayer;
