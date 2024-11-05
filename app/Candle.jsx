"use client"; 

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Candle() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/whatsup");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative w-full h-60">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Mansalva&family=Miltonian+Tattoo&family=Moirai+One&family=Offside&family=Rock+3D&family=Slackey&display=swap');
      </style>
      <Image
        src="/closing-giff.gif"
        alt="Background Image"
        layout="responsive"
        width={1900}
        height={400}
        placeholder="blur"
        blurDataURL="/back.svg"
      />
      <div className="slackey-regular absolute inset-0 flex items-center justify-center text-xl sm:text-3xl">
        <button>great!</button>
      </div>
      <div className="bg-[#666466] text-center h-[400px]"></div>
    </div>
  );
}
