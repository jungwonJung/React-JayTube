import React from "react";
import { useJaytubeApi } from "../context/JaytubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

function RelatedVideos({ id }) {
  const { youtube } = useJaytubeApi();
  const {
    isLoading,
    errors,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {errors && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}

export default RelatedVideos;
