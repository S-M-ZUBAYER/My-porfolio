import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-r from-black via-blue-900 to-black text-white pt-32 pb-20 px-4"
    >
      <div className="max-w-screen-lg mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 shadow-cyan-400">
            Contact
          </p>
          <p className="py-6 text-gray-300 text-lg">
            Feel free to reach out — I’d love to connect with you.
          </p>
        </div>

        {/* CONTACT CARD */}
        <div className="flex justify-center items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 hover:border-cyan-400/40 transition-all duration-500">
            <form
              action="https://getform.io/f/ba6860d9-ca53-4bd8-95fc-308a5735f439"
              method="POST"
              className="flex flex-col space-y-6"
            >
              {/* NAME */}
              <div className="group">
                <label className="text-sm text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name Please"
                  className="w-full mt-1 p-3 bg-white/5 border border-gray-700 rounded-lg outline-none text-white focus:border-cyan-400 transition-all duration-300 group-hover:border-cyan-300"
                />
              </div>

              {/* EMAIL */}
              <div className="group">
                <label className="text-sm text-gray-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="w-full mt-1 p-3 bg-white/5 border border-gray-700 rounded-lg outline-none text-white focus:border-cyan-400 transition-all duration-300 group-hover:border-cyan-300"
                />
              </div>

              {/* MESSAGE */}
              <div className="group">
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full mt-1 p-3 bg-white/5 border border-gray-700 rounded-lg outline-none text-white focus:border-cyan-400 transition-all duration-300 group-hover:border-cyan-300"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button className="w-full bg-gradient-to-r from-green-600 to-cyan-400 py-3 rounded-lg text-lg font-semibold shadow-lg shadow-blue-800/30 hover:scale-[1.03] active:scale-95 transition-transform duration-300">
                Let’s Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
