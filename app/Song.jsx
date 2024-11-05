"use client";
import { useEffect, useRef } from "react";

export default function Song() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const playAudio = () => {
      audio.play().catch((e) => {
        console.warn("Autoplay failed. User interaction is needed.", e);
      });
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="/ringtone.mp3" loop />
    </div>
  );
}
