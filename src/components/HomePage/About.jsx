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
          I am S M Zubayer, a Software Engineering graduate from Hubei
          University of Technology, Wuhan, China. My four-year journey in an
          international academic environment strengthened not only my technical
          foundation but also my ability to adapt, learn, and solve problems
          creatively. During this period, I developed a deep interest in
          full-stack development and started building real-world applications
          that shaped my career direction.
        </p>

        <br />

        <p className="text-xl">
          Over the past three years, I have worked as a Full Stack Developer,
          gaining hands-on experience in designing, developing, and deploying
          scalable web applications. I specialize in React, Node.js, Express,
          MongoDB, and MySQL, and I am proficient with modern tools and
          technologies such as Tailwind CSS, Redux Toolkit, Mongoose, OpenAI API
          integrations, REST APIs, and deployment workflows.
          <br />
          <br />I enjoy building clean, efficient solutions and thrive in
          dynamic, fast-paced environments. With strong communication,
          analytical, and problem-solving skills, I am committed to continuous
          learning and always excited to take on challenging projects that
          create meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default About;
