import React from "react";

function About() {
  return (
    <>
      <div className="min-h-screen bg-[#161616]">
        <div className="grid grid-cols-1 md:grid-cols-[37%_63%]">
          <div className="bg-red-800 min-h-[200px] md:h-screen sticky top-0"></div>
          <div className="h-full bg-blue-700">
            <div className="min-h-screen md:h-[300vh] bg-red-600 overflow-y-auto flex flex-col justify-between p-4 md:p-0">
              <h1 className="text-3xl md:text-4xl text-white font-bold mt-8 md:mt-[70px] font-mono text-center md:text-left">
                About Us
              </h1>
              <div className="h-[200px] md:h-[400px] w-full bg-[green] my-4"></div>

              <div className="min-h-[400px] md:h-[630px] w-full md:w-[80%] bg-amber-200 flex flex-col justify-between mx-auto mb-4 p-4 md:p-0">
                <div className="bg-amber-600 min-h-[200px] md:h-[350px] flex items-center">
                  <p className="text-[16px] md:text-[20px] text-white font-mono ">
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
                <div className="bg-[blue] min-h-[120px] md:h-[250px] flex items-center mt-4 md:mt-0">
                  <p className="text-[16px] md:text-[20px] text-white font-mono">
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

              <div className="min-h-[400px] md:h-[80vh] w-full md:w-[80%] bg-amber-100 mx-auto mb-4 p-4 md:p-0">
                <h1 className="font-mono text-3xl md:text-4xl font-bold text-white text-center md:text-left">
                  Our team
                </h1>
                <div className="min-h-[100px] md:h-[200px] bg-emerald-500 flex justify-center items-center my-4">
                  <p className="font-mono text-[16px] md:text-[18px] font-bold text-white text-center">
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
                <h1 className="font-mono text-3xl md:text-4xl font-bold text-center md:text-left">M</h1>
                <div className="min-h-[100px] md:h-[300px] bg-violet-900 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-[10px] mt-2">
                  <div className="bg-fuchsia-500 min-h-[60px] md:min-h-0"></div>
                  <div className="bg-fuchsia-500 min-h-[60px] md:min-h-0"></div>
                  <div className="bg-fuchsia-500 min-h-[60px] md:min-h-0"></div>
                </div>
              </div>
              
              <div className="h-[200px] md:h-[400px] bg-lime-600"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
