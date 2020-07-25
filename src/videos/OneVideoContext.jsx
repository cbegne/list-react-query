import React, { useState } from "react";
export const VideoIdContext = React.createContext();

export const OneVideoProvider = ({ children }) => {
  const [videoId, setVideoId] = useState(null);

  return (
    <VideoIdContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </VideoIdContext.Provider>
  );
};
