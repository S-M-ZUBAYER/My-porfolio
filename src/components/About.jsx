import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-gradient-to-r from-black via-blue-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 pt-0 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-12">
          I am S M ZUBAYER, a dedicated individual who invested four years in acquiring a comprehensive education at Hubei University of Technology, Wuhan, Hubei, PR China. Throughout this academic journey, I focused on developing not only as a highly skilled programmer but also honing expertise in frontend development. Specifically, I studied at the esteemed Department of Software Engineering. In the final year of my university life, I strategically shifted my focus to become a proficient Full Stack Developer. This academic and professional journey has equipped me with a diverse skill set, positioning me as a well-rounded candidate poised for impactful contributions in the field.
        </p>

        <br />

        <p className="text-xl">
          As a passionate and dedicated full stack developer with a strong foundation in web development technologies, I am eager to leverage my skills and knowledge to deliver high-quality and efficient software solutions. With my strong understanding of HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Redux, Node.js, Express JS, OpenAI, Mongoose, MongoDB and MySql , as well as my experience in developing and deploying web applications, I am confident in my ability to contribute to the success of any organization. I am also a quick learner with excellent communication and problem-solving skills, and I am always looking for opportunities to grow and improve as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
