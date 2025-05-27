import React, { useState } from "react";

function Event() {
  let [Event1, setEvent1] = useState([
    {
      title: "Hackathon Kickoff",
      date: "June, 2025",
      time: "9:00 AM",
      venue: "Tech Lab",
      num: "10",
      description:
        "Kickstart the hackathon with keynote speakers, team introductions.",
    },
  ]);

  let [Event2, setEvent2] = useState([
    {
      title: "Fd Workshop",
      date: "June, 2025",
      time: "2:00 PM",
      venue: "Room A204",
      num: "12",
      description:
        "Hands-on session covering the fundamentals of mod frontend dev.",
    },
  ]);

  let [Event3, setEvent3] = useState([
    {
      title: "Python Bootcamp",
      date: "June, 2025",
      time: "10:00 AM",
      venue: "Online(Zoom)",
      num: "15",
      description: "An intensive crash course on Python programming.",
    },
  ]);

  let [Event4, setEvent4] = useState([
    {
      title: "AI Club",
      date: "June, 2025",
      time: "4:00 PM",
      venue: "2nd Floor",
      num: "18",
      description: "A casual meetup for AI enthusiasts to discuss trends.",
    },
  ]);

  let [Event5, setEvent5] = useState([
    {
      title: "Exam Seminar",
      date: "June, 2025",
      time: "11:00 AM",
      venue: "Library Room",
      num: "20",
      description:
        "Academic coaches will walk you through strategies to prepare.",
    },
  ]);

  let [Event6, setEvent6] = useState([
    {
      title: "Tech Talk",
      date: "June, 2025",
      time: "1:00 PM",
      venue: "Auditorium",
      num: "22",
      description:
        "Hear from industry professionals about what it takes to succeed.",
    },
  ]);

  let [Event7, setEvent7] = useState([
    {
      title: "Game Night",
      date: "June, 2025",
      time: "6:00 PM",
      venue: "Lab 3,",
      num: "25",
      description: "Compete in or watch others code browser games live using.",
    },
  ]);

  let [Event8, setEvent8] = useState([
    {
      title: "Linux Fest",
      date: "June, 2025",
      time: "12:00 PM",
      venue: "Tech Lab",
      num: "27",
      description:
        "Get help installing and configuring Linux on your machine fest!",
    },
  ]);

  let [Event9, setEvent9] = useState([
    {
      title: "Data Jam",
      date: "June, 2025",
      time: "3:00 PM",
      venue: "Engineering Hub",
      num: "29",
      description:
        "Team up and solve fun problems using trees, graphs, and other data .",
    },
  ]);

  let [Event0, setEvent0] = useState([
    {
      title: "Portfolio Review",
      date: "July, 2025",
      time: "5:00 PM",
      venue: "Room B101",
      num: "11",
      description:
        "Experts give live feedback on student portfolios. Bring yours.",
    },
  ]);

  return (
    <div className=" bg-[#161616] h-[100vh]">
      <h1 className="text-3xl font-bold p-5 flex justify-center items-center text-white">
        📅 Bitxbase Events Hub
      </h1>
      <div className="bg-[#161616] grid grid-cols-2 gap-6 text-white">
        <div className=" bg-[#161616] grid gap-6">
          <a className=" h-[190px]" href="/FullEvent">
            {Event1.map((Event1) => (
              <div className="bg-[black] grid grid-cols-[20%_35%_45%] font-mono">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event1.num}</h1>
                    <h1 className=" items-center font-bold">{Event1.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event1.time}</h1>
                  </div>
                </div>    

                <div className=" bg-[url(AI5.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event1.title}
                  </h1>
                  <h1 className="h-[30px]">{Event1.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event1.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
          <a className=" h-[190px]" href="/FullEvent">
            {Event2.map((Event2) => (
              <div className="bg-[black] grid grid-cols-[20%_35%_45%] font-mono">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event2.num}</h1>
                    <h1 className=" items-center font-bold">{Event2.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event2.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI3.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event2.title}
                  </h1>
                  <h1 className="h-[30px]">{Event2.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event2.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
          <a className=" h-[190px]" href="/FullEvent">
            {Event3.map((Event3) => (
              <div className="grid grid-cols-[20%_35%_45%] font-mono bg-black">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event3.num}</h1>
                    <h1 className=" items-center font-bold">{Event3.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event3.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI2.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event3.title}
                  </h1>
                  <h1 className="h-[30px]">{Event3.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event3.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
          <a className=" h-[190px]" href="/FullEvent">
            {Event4.map((Event4) => (
              <div className="grid grid-cols-[20%_35%_45%] font-mono bg-black">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event4.num}</h1>
                    <h1 className=" items-center font-bold">{Event4.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event4.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI5.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event4.title}
                  </h1>
                  <h1 className="h-[30px]">{Event4.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event4.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
          <a className=" h-[190px]" href="/FullEvent">
            {Event5.map((Event5) => (
              <div className="grid grid-cols-[20%_35%_45%] font-mono bg-black">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event5.num}</h1>
                    <h1 className=" items-center font-bold">{Event5.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event5.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI3.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event5.title}
                  </h1>
                  <h1 className="h-[30px]">{Event5.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event5.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
        </div>
        <div className=" bg-[#161616] grid gap-4 ">
          <a className=" h-[190px]" href="/FullEvent">
            {Event6.map((Event6) => (
              <div className="grid grid-cols-[20%_35%_45%] font-mono bg-black">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event6.num}</h1>
                    <h1 className=" items-center font-bold">{Event6.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event6.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI7.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event6.title}
                  </h1>
                  <h1 className="h-[30px]">{Event6.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event6.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
          <a className=" h-[190px]" href="/FullEvent">
            {Event7.map((Event7) => (
              <div className="grid grid-cols-[20%_35%_45%] font-mono bg-black">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event7.num}</h1>
                    <h1 className=" items-center font-bold">{Event7.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event7.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI4.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event7.title}
                  </h1>
                  <h1 className="h-[30px]">{Event7.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event7.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
          <a className=" h-[190px]" href="/FullEvent">
            {Event8.map((Event8) => (
              <div className="grid grid-cols-[20%_35%_45%] font-mono bg-black">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event8.num}</h1>
                    <h1 className=" items-center font-bold">{Event8.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event8.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI1.webp)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event8.title}
                  </h1>
                  <h1 className="h-[30px]">{Event8.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event8.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
          <a className=" h-[190px]" href="/FullEvent">
            {Event9.map((Event9) => (
              <div className="grid grid-cols-[20%_35%_45%] font-mono bg-black">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event9.num}</h1>
                    <h1 className=" items-center font-bold">{Event9.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event9.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI6.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event9.title}
                  </h1>
                  <h1 className="h-[30px]">{Event9.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event9.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
          <a className=" h-[190px]" href="/FullEvent">
            {Event0.map((Event0) => (
              <div className="grid grid-cols-[20%_35%_45%] font-mono bg-black">
                <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                  <div className="h-[150px] flex flex-col justify-evenly items-center">
                    <h1 className=" font-bold text-4xl">{Event0.num}</h1>
                    <h1 className=" items-center font-bold">{Event0.date}</h1>
                    <h1>___</h1>
                    <h1 className=" font-bold">{Event0.time}</h1>
                  </div>
                </div>

                <div className=" bg-[url(AI7.jpg)] bg-cover bg-center rounded-xl shadow-lg"></div>
                <div className="h-[190px] p-2 flex flex-col gap-1 pt-5">
                  <h1 className=" font-bold text-2xl h-[40px] font-serif">
                    {Event0.title}
                  </h1>
                  <h1 className="h-[30px]">{Event0.venue}</h1>
                  <h1 className="h-[40px] text-[13px]">{Event0.description}</h1>
                  <div className=" h-[30px] justify-start items-center flex hover:cursor-pointer">
                    <a className=" text-[#f2320c] hover:underline" href="">
                      DETAILS & TICKETS
                    </a>
                    <span className=" font-serif text-2xl font-bold w-[30px] h-[30px] flex justify-center items-center text-[#f2320c] ">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Event;
