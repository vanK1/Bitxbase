import React, { useState } from "react";

function FullEvent() {
  let [Event4, setEvent4] = useState([
    {
      date: "June, 2025",
      time: "4:00 PM",
      num: "18",
    },
  ]);

  return (
    <div className=" grid grid-cols-[37%_63%] h-[100vh] ">
      <div className=" bg-blue-950"></div>
      <div className=" bg-black">
        <div className="bg-orange-600 h-[500px] bg-[url(AI5.jpg)] bg-cover bg-center rounded-xl shadow-lg">
          <div className="  bg-blue-700 h-[150px] w-[130px]">
            {Event4.map((Event4) => (
              <div className="bg-[#f2320c] h-[190px] flex flex-col justify-center items-center">
                <div className="h-[150px] flex flex-col justify-evenly items-center text-white">
                  <h1 className=" font-bold text-4xl">{Event4.num}</h1>
                  <h1 className=" items-center font-bold">{Event4.date}</h1>
                  <h1>___</h1>
                  <h1 className=" font-bold">{Event4.time}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" bg-[#161616] h-[600px]">
          <h1 className=" font-bold text-3xl text-white p-5">
            Human Tech ---- Artificial Intelligence
          </h1>
          <h1 className=" text-white font-serif">
            <p className="pt-3 pr-6 font-mono">
              The relationship between humans and technology has always been a
              defining factor in societal progress. From the wheel to the
              internet, technology has shaped how we live, work, and connect. In
              recent decades, a new chapter has begun with the rise of
              artificial intelligence (AI), which represents not just a tool.
            </p>
            <p className="pt-5 pr-6 font-mono">
              But a form of technology that can mimic aspects of human thinking
              and decision-making AI is unique because it doesn't merely extend
              human physical capabilities—it augments and sometimes replaces
              cognitive ones. Machine learning, natural language processing, and
              computer vision allow AI systems to perform tasks that once
              required human intelligence, such as recognizing faces,
              translating languages.
            </p>
            <p className="pt-5 pr-6 font-mono">
              And even generating art or code. This development offers immense
              benefits: increased efficiency, new medical breakthroughs,
              personalized education, and smarter cities, to name just a few.
              However, it also raises concernsabout job displacement,
              surveillance, misinformation, and the loss of human touch in
              essential services However, it also raises concernsabout job
              displacement, surveillance, misinformation, and the loss of human
              touch in essential services. One of the central questions in the
              human-AI relationship is not just what AI can do, but how humans
              and AI can collaborate.
            </p>
          </h1>
          <div className=" flex justify-center ">
            <button className=" bg-red-700 w-[100px] text-[15px] text-white rounded-[10px] p-1 mt-4">
              Attend Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullEvent;
