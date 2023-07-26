import { createContext, useContext } from "react";
import Youtube from "../api/jaytube";
import YoutubeClient from "../api/jaytubeClient";

export const JaytubeApiContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);
export function JaytubeApiProvider({ children }) {
  return (
    <JaytubeApiContext.Provider value={{ youtube }}>
      {children}
    </JaytubeApiContext.Provider>
  );
}

export function useJaytubeApi() {
  return useContext(JaytubeApiContext);
}
