import React from "react";
import Lottie from "react-lottie";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            options={defaultOptions}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Experience */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                FullStack Developer
              </h3>
              <p className="text-sm text-neutral font-semibold">
                Nov 2024 - JUL 2025(Palette Productions)
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Worked as a Full Stack Developer contributing to the end-to-end
              development of web applications using the MERN stack.
            </p>
          </div>
          <div className="mx-auto lg:ml-auto">
            {/* Course */}
            <div className="p-6 mt-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-primary duration-300 cursor-pointer">
              <div className="text-right mb-4">
                <h3 className="text-2xl font-semibold text-primary">
                  FullStack Developer
                </h3>
                <p className="text-sm text-neutral font-semibold">
                  Nov 2023 - SEP 2024
                </p>
              </div>
              <p className="text-sm text-neutral text-justify">
                I Have Completed This Course In IMARTICUS Institute At
                Excellence Level in Coimbatore with <b>81.5%</b>.
              </p>
            </div>
          </div>
          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">MBA</h3>
              <p className="text-sm text-neutral font-semibold">2018 - 2020</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed the <b>MBA Degree</b> in Kalaignar
              Karunanidhi Institute Of Technology,Coimbatore with <b>8 CGPA</b>
            </p>
          </div>

          {/* Ug Course */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                BBA(COMPUTER APPLICATIONS)
              </h3>
              <p className="text-sm text-neutral font-semibold">2015 - 2018</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have successfully completed this Degree in Hindusthan College Of
              Arts And Science,Coimbatore with <b>72.4%</b>.
            </p>
          </div>

          {/* HSC */}
          <div className="p-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                HSC(Maths-Computer Science)
              </h3>
              <p className="text-sm text-neutral font-semibold">2012 - 2013</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have passed the Higher Secondary Certificate (HSC) with
              <b>70%</b>
            </p>
          </div>
          {/* SSLC */}
          <div className="p-6 mt-6 bg-[#313131] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-primary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h3 className="text-2xl font-semibold text-primary">SSLC</h3>
              <p className="text-sm text-neutral font-semibold">2012 - 2013</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I have passed the Senior Secondary Certificate (SSLC) with
              <b>82%</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
