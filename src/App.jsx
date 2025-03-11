import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";


const Port = () => {
  return (
    <div className="bg-[#FCF8E8]">
      {/* Header Section */}
      <header className="bg-[#94B49F] text-black py-10 shadow-md">
        <nav className="container mx-auto flex justify-center">
          
          <ul className="flex space-x-8 text-xl font-semibold">
            <li>
            <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-[#FAEED1] transition duration-300 cursor-pointer"
              >
                About Me
              </Link>
            </li>
            <li>
            <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-[#FAEED1] transition duration-300 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-[#FAEED1] transition duration-300 cursor-pointer"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>

{/* Hero Section */}
<section id="about" className="container mx-auto px-6 py-20 min-h-screen flex flex-col md:flex-row items-center md:gap-x-12">
  <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between space-y-6 md:space-y-0">
    
    {/* Profile Image - Appears at Top on Mobile */}
    <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 md:flex-shrink-0 mx-auto md:mx-0 group justify-end">
      <img
        src="/src/images/me2.jpg"
        alt="Your Profile"
        className="w-100 h-100 rounded-full lg:ml-36 shadow-lg transition-transform transform group-hover:scale-105 duration-300"
      />
    </div>

    {/* Text Content - Appears Below Image on Mobile */}
    <div className="max-w-2xl space-y-6 text-center  md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Hii, I'm Nikitha
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-700">
        Frontend Developer
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed ">
        I'm a Computer Science student 
        with a passion for crafting seamless and visually stunning web experiences.
        From designing dynamic, responsive websites with React.js and Tailwind CSS 
        to exploring the latest advancements in emerging technologies,
        I thrive on turning ideas into reality.
      </p>

      {/* Resume Button */}
      <a
        href="https://tomato-margarethe-44.tiiny.site"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#CEE5D0] border-4 border-[#94B49F] text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#94B49F] hover:scale-105 transition duration-300 inline-block"
      >
        View Resume
      </a>
    </div>

  </div>
</section>

      {/* Skills Section */}
      
      <section id="skills" className="container mx-auto px-6 py-10 lg:pt-25">
      <h2 className="text-4xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Languages */}
          <div className="bg-[#CEE5D0] border-4 border-[#94B49F] shadow-lg p-6 rounded-lg transition duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Languages</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                  alt="C"
                  className="w-6 h-6 filter grayscale contrast-200 transition-transform hover:scale-110"
                />
                <span className="font-semibold">C</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://img.icons8.com/ios-filled/50/java-coffee-cup-logo.png"
                  alt="Java"
                  className="w-6 h-6 transition-transform hover:scale-110"
                />
                <span className="font-semibold">Java</span>
              </li>
            </ul>
          </div>

          {/* Frontend Technologies */}
          <div className="bg-[#CEE5D0] border-4 border-[#94B49F] shadow-lg p-6 rounded-lg transition duration-300 hover:shadow-xl hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Frontend Technologies</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-2">
                <img src="https://img.icons8.com/ios-filled/50/html-5.png" alt="HTML" className="w-6 h-6 transition-transform hover:scale-110" />
                <span className="font-semibold">HTML</span>
              </li>
              <li className="flex items-center gap-2">
                <img src="https://img.icons8.com/ios-filled/50/css3.png" alt="CSS" className="w-6 h-6 transition-transform hover:scale-110" />
                <span className="font-semibold">CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <img src="https://img.icons8.com/ios-filled/50/react-native.png" alt="React.js" className="w-6 h-6 transition-transform hover:scale-110" />
                <span className="font-semibold">React.js</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="Tailwind CSS"
                  className="w-6 h-6 filter grayscale contrast-600 transition-transform hover:scale-110"
                />
                <span className="font-semibold">Tailwind CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-[#94B49F] text-black py-6 mt-16">
        <div className="container mx-auto text-center space-y-4">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:nikithamohan1610@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FAEED1] hover:scale-110 transition duration-300">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/nikitha1610" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FAEED1] hover:scale-110 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Nikitha-1610" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FAEED1] hover:scale-110 transition duration-300">
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-gray-800 mt-4">© {new Date().getFullYear()} Nikitha | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Port;
