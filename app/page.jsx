"use client";
import Image from "next/image";
import { useState } from "react";
import Candle from "./Candle";
export default function Home() {
  const [output, setOutput] = useState("");
  const [get, set] = useState(false);

  const startListening = () => {
    try {
      if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = "en-US";

        const performAction = (command) => {
          command = command.toLowerCase();

          if (command.includes("background to")) {
            const color = command.split("background to ")[1];
            document.body.style.backgroundColor = color;
            setOutput(`Background changed to ${color}`);
          } else if (command.includes("show date")) {
            const date = new Date().toLocaleDateString();
            setOutput(`Today's date is ${date}`);
          } else if (["foo", "fooo", "fu", "who"].some(word => command.includes(word))) {
            setOutput("Happy birthday Bro!");
            set(true);
          } else {
            setOutput(`${command}"`);
            set(true);
          }
        };

        recognition.start();

        recognition.onresult = (event) => {
          const command = event.results[0][0].transcript;
          performAction(command);
        };

        // recognition.onerror = (event) => {
        //   console.error("Error occurred in recognition:", event.error);
        // };
      } else {
        set(true)
        alert("Sorry, your browser doesn't support the Web Speech API.");
      }
    } catch (error) {
      console.error("Speech recognition error:", error);
    }
  };

  return (
    <>
      {get ? (
        <Candle />
      ) : (
        <div className="relative w-full h-60">
          

          <Image
            src="/opening-giff.gif"
            alt="Background Image"
            layout="responsive"
            width={1900}
            height={400}
          />

          <div className="font-title absolute inset-0 flex items-center justify-center text-xl sm:text-2xl">
            <button onClick={startListening}>
              click it and say foo
            </button>
            <p>{output}</p>
          </div>
          <div className="bg-[#666466] text-center h-[400px]"></div>
        </div>
      )}
    </>
  );
}
