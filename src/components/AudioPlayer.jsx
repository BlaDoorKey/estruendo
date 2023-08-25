import React, { useRef } from "react";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
    audioRef.current.loop = true;
  };

  return (
    <div>
      <button onClick={playAudio}>Play Audio</button>
      <audio ref={audioRef}>
        <source
          src={audioSrc}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
