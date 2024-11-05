"use client";
import Image from "next/image";
import { useState ,useEffect} from "react";
import Candle from "./Candle";
export default function Home() {
  const [output, setOutput] = useState("");
  const [get, set] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(true)
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const startListening = () => {
    try {
      if (
        "webkitSpeechRecognition" in window ||
        "SpeechRecognition" in window
      ) {
        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
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
          } else if (command.includes("foo" || "fooo" || "fu" || "who")) {
            setOutput(`happy birthday Bro! `);
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
        alert("Sorry, your browser doesn't support the Web Speech API.");
      }
    } catch (error) {}
  };

  return (
    <>
      {get ? (
        <Candle />
      ) : (
        <div className="relative w-full h-60">
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Mansalva&family=Miltonian+Tattoo&family=Moirai+One&family=Offside&family=Rock+3D&family=Slackey&display=swap');
          </style>

          <Image
            src="/opening-giff.gif"
            alt="Background Image"
            layout="responsive"
            width={1900}
            height={400}
            placeholder="blur"
            blurDataURL="/back.svg"
          />

          <div className="slackey-regular absolute inset-0 flex items-center justify-center text-xl sm:text-3xl">
            <button onClick={startListening}>
              click it <br />
              and "fooo" <br />
              {/* {output} */}
            </button>
          </div>
          <div className="bg-[#666466] text-center h-[400px]"></div>
        </div>
      )}
    </>
  );
}
