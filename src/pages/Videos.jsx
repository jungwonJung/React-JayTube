import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { useJaytubeApi } from "../context/JaytubeApiContext";

function Videos() {
  const { keyword } = useParams();
  const { youtube } = useJaytubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));
  return (
    <>
      <div>Videos {keyword ? "true" : "false"}</div>;
      {isLoading && <p>Loading ...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Videos;
