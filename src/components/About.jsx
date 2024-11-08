import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-gradient-to-r from-black via-blue-900 to-black text-white"
    >
      <div className="max-w-screen-lg py-4 pt-0 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-12">
          I am S M Zubayer, a driven individual who completed a four-year journey at Hubei University of Technology, Wuhan, Hubei, PR China. During my time at the esteemed Department of Software Engineering, I not only honed my programming skills but also developed a strong focus on frontend development. In my final year, I strategically pivoted towards becoming a proficient Full Stack Developer. This academic and professional path has equipped me with a diverse and robust skill set, preparing me to make meaningful contributions in the field.
        </p>

        <br />

        <p className="text-xl">
          As a passionate Full Stack Developer with a strong foundation in web development technologies, I am eager to apply my expertise to deliver high-quality and efficient software solutions. Proficient in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Redux, Node.js, Express JS, OpenAI, Mongoose, MongoDB, and MySQL, I have hands-on experience in developing and deploying web applications. With excellent communication and problem-solving skills, I thrive in dynamic environments and continuously seek opportunities for growth and improvement. I am confident in my ability to contribute meaningfully to the success of any organization.
        </p>
      </div>
    </div>
  );
};

export default About;
