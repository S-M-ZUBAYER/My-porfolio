import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-black via-slate-800 to-gray-900 text-white"
    >
      <div className="max-w-screen-lg p-4 pt-0 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-12">
          This is S M ZUBAYER. TO be a high skill programmer I have spent four
          years to complete my graduation from Hubei University of Technology, Wuhan, Hubei, PR China.And at the same time, last one year try to focus to
          be a front end developer.
        </p>

        <br />

        <p className="text-xl">
          As a passionate and dedicated front-end developer with a strong foundation in web development technologies, I am eager to leverage my skills and knowledge to deliver high-quality and efficient software solutions. With my strong understanding of HTML, CSS, JavaScript, React, Node.js, and MongoDB, as well as my experience in developing and deploying web applications, I am confident in my ability to contribute to the success of any organization. I am also a quick learner with excellent communication and problem-solving skills, and I am always looking for opportunities to grow and improve as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
