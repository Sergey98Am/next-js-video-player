"use client";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

//video path
let videosrc = "/videos/flyingToArmenia.mp4";

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
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
