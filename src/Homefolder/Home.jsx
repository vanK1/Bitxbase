import React from "react";

function Home() {
  return (
    <div className="h-[100vh] bg-[#161616] text-white">
      <div className="grid grid-cols-[37%_63%]">
        <div className="bg-blue-500 h-screen sticky top-0">
          <div className="h-[70px] w-[138px] bg-green-500 mt-[70px]"></div>
          <div>
            <nav>
              <ul className="flex flex-col">
                <a href="">Home</a>
                <a href="">Create Event</a>
                <a href="">Event Details</a>
                <a href="">About</a>
              </ul>
            </nav>
          </div>
          <div>
            <span>
              <input type="text" />
            </span>
          </div>
          <div>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="bg-red-500 h-full overflow-y-auto">
          <div className="h-[190vh] w-[80%] bg-yellow-300 mt-[70px]">
            <div className="flex h-[50px] w-[100%] bg-pink-500 justify-between items-center">
              <section className="text-[26px] font-bold font-serif">
                Latest events
              </section>
              <nav>
                <ul className="h-10 w-36 bg-[black] text-[17px] flex justify-evenly items-center font-mono border-white border-1">
                  <a href="">
                    MORE EVENTS
                    <span className="text-[20px] font-serif">→</span>
                  </a>
                </ul>
              </nav>
            </div>
            <div className="h-[104vh] bg-red-950 flex flex-col justify-evenly">
              <div className="h-[190px] w-full bg-black"></div>
              <div className="h-[190px] w-full bg-black"></div>
              <div className="h-[190px] w-full bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
