import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
// import Event from "../Eventfolder/Event";





function Home() {
  return (
    <div className="h-[100vh] bg-[#161616] text-white">
      <div className="grid grid-cols-[37%_63%]">
        <div className="bg-blue h-screen sticky top-0 flex flex-col items-center">
          <div className="h-[100vh] w-[50%] bg-teal flex flex-col items-center justify-evenly font-serif gap-2">
            <div className="h-[70px] w-[150px] mt-8 bg-green aa">
              <img className="mt-[-37px] p-4 " src="Mylogo.png" alt="" />
            </div>
            <div className="h-[250px] text-center bg-blue flex flex-col items-center gap-5">
              <nav className="h-[200px] w-[100%] bg-red flex justify-center">
                <ul className="flex flex-col aa gap-6">
                  <a
                    className="h-[50px] hover:text-[#f23c02] hover:border-b-2"
                    href="/"
                  >
                    HOME
                  </a>
                  <a
                    className="h-[50px] hover:text-[#f23c02] hover:border-b-2"
                    href="create"
                  >
                    CREATE EVENT
                  </a>
                  <a
                    className="h-[50px] hover:text-[#f23c02] hover:border-b-2"
                    href="event"
                  >
                    EVENT DETAILS
                  </a>
                  <a
                    className="h-[50px] hover:text-[#f23c02] hover:border-b-2"
                    href="about"
                  >
                    ABOUT
                  </a>
                </ul>
              </nav>
              <span className=" h-8 flex justify-center mr-3">
                <button className="text-2xl hover:text-[#f23c02]">
                  <IoMdSearch />
                </button>
                <input
                  className="bg-[#0005] w-[60%] text-[15px] aa"
                  type="text"
                  placeholder="SEARCH..."
                />
              </span>
            </div>
            <div className="h-[50px] w-[50%] gap-2 flex items-center justify-center">
              <button className="border-2 border-[#f23c02] text-[#f23c02] text-3xl">
                <FaFacebook />
              </button>
              <button className="border-2 border-[#f23c02] text-[#f23c02] text-3xl">
                <FaYoutube />
              </button>
              <button className="border-2 border-[#f23c02] text-[#f23c02] text-3xl">
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-red h-screen overflow-y-auto">
          <div className="h-[143vh] w-[80%] bg-yellow mt-[70px]">
            <div className="flex h-[50px] w-[100%] bg-pink justify-between items-center">
              <section className="text-[26px] font-medium font-serif bg-red">
                Latest events
              </section>
              <nav>
                <ul className="h-10 w-[160px] bg-[black] text-[17px] font-mono border-white border-1 hover:bg-gray-500 text-center">
                  <a href="/event">
                    MORE EVENTS
                    <span className="font-serif text-2xl font-bold ml-3">
                      →
                    </span>
                  </a>
                </ul>
              </nav>
            </div>
            <div className="h-[104vh] bg-red flex flex-col justify-evenly">
            
              <div className="h-[190px] w-full bg-black"></div>
              <div className="h-[190px] w-full bg-black"></div>
              <div className="h-[190px] w-full bg-black"></div>

            </div>
            <div className="bg-blue h-[177px] flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="h-[40px] w-[42%] text-[25px] font-serif bg-pink ">
                  Sponsors & Partners
                </div>
                <nav>
                  <ul className="h-10 w-[160px] bg-[black] text-[17px] font-mono border-white border-1 hover:bg-gray-500 text-center">
                    <a href="/event">
                      MORE DETAILS
                      <span className="font-serif text-2xl font-bold ml-3">
                        →
                      </span>
                    </a>
                  </ul>
                </nav>
              </div>
              <div className="flex bg-red">
                <p>
                  <img src="event.svg" alt="" />
                </p>
                <p>
                  <img src="event1.svg" alt="" />
                </p>
                <p>
                  <img src="event2.svg" alt="" />
                </p>
                <p>
                  <img src="event3.svg" alt="" />
                </p>
              </div>
            </div>
          </div>
          <footer className="h-[400px] bg-[black] flex pl-9 items-center">
            <div className="h-[350px] w-[70%] bg-purple flex flex-col justify-between">
              <section className="h-[40px] w-[50%] text-[20px] bg-indigo flex items-center font-serif">
                <p>BITXBASE EVENTS HUB</p>
              </section>
              <section className="h-[40px] w-[100%] bg-amber flex items-center font-serif font-bold">
                <p>Raising a new generation of IT profesionals</p>
              </section>
              <section className="font-mono">
                <p className="text-[15px]">
                  A: Shop 10 Petro-cam plaza, satellite town, LAG 100001
                </p>
                <p>P: 0811 255 1244</p>
                <p>E: info(at)BITXBASE.COM</p>
              </section>
              <section className="flex h-[40px]">
                <input
                  className="font-mono pl-3"
                  type="text"
                  placeholder="Email address.."
                />
                <p className="h-[40px] w-[170px] flex justify-center items-center p- font-mono bg-[#f23c02] ">
                  SUBSCRIBE NOW
                </p>
              </section>
              <section className="h-[40px] w-[80%] flex bg-pink justify-between items-center">
                <a href="">Home</a>
                <a href="/event">Event Details</a>
                <a href="/create">Create Event</a>
                <a href="/about">About</a>
              </section>
              <section className="h-[40px] w-[100%] flex text-[15px] bg-green justify-between items-center font-mono">
                <p>©2025 BITXBASE — All Rights Reserved. — Privacy Policy</p>
              </section>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
