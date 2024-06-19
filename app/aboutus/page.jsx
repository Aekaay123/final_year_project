import Image from "next/image";
import React from "react";

const Aboutus = () => {
  
  return (
    
      <div className="content text-center w-full h-screen  bg-opacity-10 bg-center bg-no-repeat bg-cover bg-[url('/bg.png')] rounded-lg shadow-lg">
         <div className="w-full h-screen bg-black/60">
         <h1 className="text-3xl font-bold mb-4 pt-10">
          Welcome to Smart Attendance Manager of 4IT
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto text-white">
          We are a team of passionate individuals dedicated to revolutionizing
          attendance management. Our mission is to provide innovative solutions
          that simplify processes and enhance productivity.
        </p>
        <h2 className="text-3xl text-white font-bold mb-4">Meet Our Team</h2>
        <div class="flex  items-center justify-center">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 max-w-7xl">
            <div class="group rounded-full relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <Image
                  width={300}
                  height={500}
                  class=" object-cover  hover:rounded-none  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/kezang.png"
                  alt="david"
                />
              
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class=" text-2xl font-bold text-white">
                  Kezang Dema
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Project Guide
                </p>
              </div>
            </div>
            
            <div class="group rounded-full relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <Image
                  width={300}
                  height={500}
                  class=" object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/david.png"
                  alt="david"
                />
              
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[75%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class=" text-3xl font-bold text-white">
                  Salim Pradhan
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Team leader
                </p>
              </div>
            </div>
            
            <div class="group rounded-full relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <Image
                  width={300}
                  height={500}
                  class=" object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/david.png"
                  alt="david"
                />
              
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class=" text-3xl font-bold text-white">
                  Tenzin Jamtsho
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Developer
                </p>
              </div>
            </div>
            
            <div class="group relative rounded-full cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <Image
                  width={300}
                  height={500}
                  class=" object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/david.png"
                  alt="david"
                />
              
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class=" text-3xl font-bold text-white">
                  Ugyen Thinley Dorji
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Developer
                </p>
              </div>
            </div>
            
            <div class="group relative rounded-full cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <Image
                  width={300}
                  height={500}
                  class=" object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/david.png"
                  alt="david"
                />
              
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[75%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class=" text-3xl font-bold text-white">
                  Kencho Wangdi
                </h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Developer
                </p>
              </div>
            </div>
            
            
           
          </div>

        </div>
         </div>
      </div>
    
  );
};

export default Aboutus;
