import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

function About() {
  return (
    <>
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
          <div className="h-screen overflow-y-auto bg-[#161616]">
            <div className="h-[320vh] bg-[#161616] mt-[70px] flex flex-col justify-between">
              <h1 className="text-3xl font-serif bg-blue font-semibold">About Us</h1>
              <div className="h-[350px]">
                <img className="h-[350px] w-full" src="Tech2.png" alt="" />
              </div>

              <div className="h-[420px] w-[80%] bg-green flex flex-col justify-between">
                <div className="bg-amber h-[250px]">
                  <p className="text-[15px] font-mono">
                    Discover a vibrant student event hub offering diverse
                    activities including tech talks, AI innovation workshops,
                    career fairs, and networking sessions. Connect, learn, and
                    grow with peers through cutting-edge events designed to
                    inspire creativity, foster collaboration, and empower the
                    next generation of innovators and leaders. Our platform
                    brings students together to explore emerging technologies
                    and trends, featuring expert speakers and hands-on sessions.
                    Whether you're passionate about AI, software development, or
                    entrepreneurship, our events provide the perfect opportunity
                    to expand your skills, share ideas, and build lasting
                    connections in a supportive community.
                  </p>
                </div>
                <div className=" h-[160px]">
                  <p className="text-[15px] font-mono">
                    To empower students by creating an inclusive, innovative
                    community where knowledge, creativity, and collaboration
                    thrive—fueling passion for technology, AI, and
                    entrepreneurship—while shaping future leaders ready to drive
                    positive change and breakthrough advancements worldwide.
                    Inspiring students to innovate, collaborate, and lead,
                    driving technology and AI breakthroughs that transform
                    communities and the future.
                  </p>
                </div>
              </div>

              <div className="h-[550px] w-[80%] bg-purple flex flex-col gap-10">
                <div className="h-[170px] bg-rose flex flex-col justify-between">
                  <h1 className="font-serif text-3xl font-semibold">Our Team</h1>
                  <div className="h-[110px] bg-emerald flex justify-center items-center ">
                    <p className="font-mono text-[15px]">
                      Our team is a diverse group of passionate individuals
                      dedicated to creating a positive impact. We come from
                      various backgrounds, bringing unique skills and
                      perspectives to the table. Together, we collaborate to
                      develop innovative solutions and foster a supportive
                      community.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 ">
                  <h1 className="font-serif text-3xl font-bold">Management</h1>
                  <div className="h-[250px] grid grid-cols-3  bg-violet gap-3 ">
                    <div className="flex justify-between flex-col items-center">
                      <div className="bg-fuchsia-400">
                        <img className="h-[250px]" src="Tech2.png" alt="" />
                      </div>
                      <div className="h-[22px] w-[150px] bg-fuchsia mt-2">
                        <p className="text-center bb text-gray-300">
                          Evans Chiedozie
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between flex-col items-center">
                      <div className="bg-fuchsia-200">
                        <img className="h-[250px]" src="Tech1.png" alt="" />
                      </div>
                      <div className="h-[22px] w-[150px] bg-fuchsia mt-2">
                        <p className="text-center bb text-gray-300">Ayomide</p>
                      </div>
                    </div>
                    <div className="flex justify-between flex-col items-center">
                      <div className="bg-fuchsia">
                        <img className="h-[250px]" src="Tech2.png" alt="" />
                      </div>
                      <div className="h-[22px] w-[150px] bg-fuchsia">
                        <p className="text-center bb text-gray-200">
                          Ebuka Ezeh
                        </p>
                      </div>
                    </div>
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
                    <p>
                      ©2025 BITXBASE — All Rights Reserved. — Privacy Policy
                    </p>
                  </section>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
