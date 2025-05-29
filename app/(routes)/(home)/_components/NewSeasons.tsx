import Image from "next/image";
import React from "react";

const NewSeasons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="bg-gray-200 w-full p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-2xl font-semibold">YENİ SEZON</h1>
              <h1 className="font-mono">Marka</h1>
              <label>Gözlüklerimizi Keşfedin</label>
              <div className="border-2 border-gray-900 px-6 py-2 mt-5 cursor-pointer hover:bg-gray-300 transition">
                İNCELE
              </div>
            </div>
          </div>
          <div className="p-2 shadow-md bg-white">
            <Image
              src="/bannerseason.webp"
              alt="bannerseason"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex flex-col items-center justify-center md:items-start text-center md:text-left">
              <h1 className="text-2xl font-semibold">YENİ SEZON</h1>
              <h1 className="font-mono">Marka</h1>
              <label>Gözlüklerimizi Keşfedin</label>
              <div className="border-2 border-gray-900 px-6 py-2 mt-5 cursor-pointer hover:bg-gray-300 transition">
                İNCELE
              </div>
            </div>
          </div>
          <div className="p-2 shadow-md bg-white">
            <Image
              src="/seaseon.png"
              alt="seaseon.png"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSeasons;
