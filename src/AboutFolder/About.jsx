import React from "react";

function About() {
  return (
    <>
      <div className="h-[100vh] bg-[#161616]">
        <div className="grid grid-cols-[37%_63%]">
          <div className="bg-red-800 h-screen sticky top-0"></div>
          <div className="h-full bg-blue-700">
            <div className="h-[300vh] bg-red-600 overflow-y-auto flex flex-col justify-between">
              <h1 className="text-4xl text-white font-bold mt-[70px] font-mono">
                About Us
              </h1>
              <div className="h-[400px] w-[100%] bg-[green]"></div>

              <div className="h-[630px] w-[80%] bg-amber-200 flex flex-col justify-between">
                <div className="bg-amber-600 h-[350px]">
                  <p className="text-[20px] text-white font-mono ">
                    A student campus is a vibrant and dynamic environment where
                    academic learning and personal growth intersect. It serves
                    as the heart of student life, offering classrooms,
                    libraries, dormitories, cafeterias, and recreational
                    facilities. On campus, students attend lectures, engage in
                    group projects, and participate in clubs, sports, and social
                    events. It’s a place that fosters friendships, cultural
                    exchange, and independence. The campus community helps
                    students develop essential life skills and prepares them for
                    future careers. With access to resources and support
                    services, students are empowered to achieve their goals.
                    Overall, a student campus is more than a school—it's a home
                    for learning and development.
                  </p>
                </div>
                <div className="bg-[blue] h-[250px]">
                  <p className="text-[20px] text-white font-mono">
                    A student campus is a vibrant environment where students not
                    only attend classes but also participate in various
                    activities that promote learning and personal development.
                    It offers facilities like libraries, dormitories, sports
                    centers, and student clubs. Campus life encourages
                    friendships, cultural exchange, and independence. With
                    access to academic support, counseling, and career services,
                    students are well-prepared for both professional success and
                    meaningful life experiences beyond graduation.
                  </p>
                </div>
              </div>

              <div className="h-[80vh] w-[80%] bg-amber-100">
                <h1 className="font-mono text-4xl font-bold text-white">
                  Our team
                </h1>
                <div className="h-[200px] bg-emerald-500 flex justify-center items-center ">
                  <p className="font-mono text-[18px] font-bold text-white">
                    Our team is a diverse group of passionate individuals
                    dedicated to creating a positive impact. We come from
                    various backgrounds, bringing unique skills and perspectives
                    to the table. Together, we collaborate to develop innovative
                    solutions and foster a supportive community. Our shared
                    values of integrity, respect, and inclusivity guide our
                    actions as we work towards common goals. We believe in the
                    power of teamwork and are committed to making a difference in
                    the lives of those we serve.
                  </p>
                </div>
                <h1 className="font-mono text-4xl font-bold">M</h1>
                <div className="h-[300px] bg-violet-900 grid grid-cols-3 gap-[10px]">
                  <div className="bg-fuchsia-500"></div>
                  <div className="bg-fuchsia-500"></div>
                  <div className="bg-fuchsia-500"></div>
                </div>
              </div>
              <div className="h-[400px] bg-lime-600"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
