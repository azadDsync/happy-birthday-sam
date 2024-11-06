// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Song from "@/app/Song";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Happy Birthday Bro!</title>
        <meta name="description" content="Birthday greeting page" />
      </Head>

      <div className="bg-[#3ec4c6] text-center">
        <div className="font-title text-[50px] sm:text-[100px] ">
          Happy Birthday Bro🍻
        </div>
        <Image
          src="/back.svg"
          alt="Background Image"
          width={1920}
          height={400}
          placeholder="blur"
          blurDataURL="/back.svg"
        />
        <div>
          <Song />
        </div>
      </div>

      <div className="bg-[#62d1c4] h-auto p-2">
        <div>
          <Image
            src="/mc.gif"
            alt="Celebration Gif"
            width={250}
            height={150}
            placeholder="blur"
            blurDataURL="/mc.gif"
          />
          <div className="p-5 pb-24 font-mansalva text-xl">
            bencho* kaha se start karu...
            <br />
            Sometimes you dont know how a little thing impacts others. A phone
            call might save ones life, or sharing a sutta might free his entire
            life.
            <br />
            Maybe its all coincidence.
            <br /> Coincidence to be selected in Navodaya,
            <br /> coincidence to have strong brotherhood,
            <br />
            coincidence to dance together,
            <br /> coincidence to experience that cycle wala kaand.
            <br />
            there are lot of things that are all connecting now Thank you for
            being that big brother to whom I can dare to cry aloud.
            <br />
            with love♥️
            <br />
            -Domendra
          </div>
        </div>
      </div>
    </div>
  );
}
