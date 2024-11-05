// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Song from "@/app/Song";

export default function Home() {
  return (
    <div>
      <div className="bg-[#3ec4c6] text-center">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Mansalva&family=Miltonian+Tattoo&family=Moirai+One&family=Offside&family=Rock+3D&family=Slackey&display=swap');
        </style>
        <div className="rock-3d-regular text-[50px] sm:text-[100px] ">
          Happy Birthday Bro !
        </div>
        <Image
          src="/back.svg"
          alt="Description"
          layout="responsive"
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
          <div>
            <Image
              src="/mc.gif"
              alt="Description"
              width={250}
              height={150}
              placeholder="blur"
              blurDataURL="/mc.gif"
            />
          </div>
          <div className="p-5 pb-24 mansalva-regular text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat unde optio quos commodi nisi, et ab quasi cum? Dolore quibusdam distinctio reprehenderit iure quisquam quaerat in vitae mollitia quidem beatae?

            
            <br />with love
            <br />
            -Domendra 
          </div>
        </div>
      </div>
    </div>
  );
}
