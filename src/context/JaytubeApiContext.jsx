import { createContext, useContext } from "react";
import Youtube from "../api/jaytube";

export const JaytubeApiContext = createContext();

const youtube = new Youtube();
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
