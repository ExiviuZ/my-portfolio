import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar";
import {
  faSchool,
  faMedal,
  faBrain,
  faDatabase,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto">
      <header className="p-[2rem]  w-[100%]">
        <Navbar />
        <section className="flex flex-col gap-[1rem] items-center justify-center mx-auto mt-[2rem] max-w-[600px]">
          <img
            src="avatar.jpg"
            className="w-[125px] rounded-full border-solid border-2 border-gray-900"
            alt=""
          />
          <h1 className=" text-[1.75rem] leading-[1.25] mb-[1.25rem]">
            <span className="bg-pink-gradient bg-clip-text text-transparent font-[500]">
              Hello, I'm Mark Angel,
            </span>{" "}
            <span className="text-[1.5rem]">
              Frontend Developer based in Philippines.
            </span>
          </h1>

          <p className="opacity-[0.8]">
            A web developer from Philippines. I develop web applications that
            are fast and responsive using the latest technologies in the
            Industry.
          </p>

          <div className="flex flex-col gap-[1rem] ">
            <div className="flex gap-[1rem]">
              <a
                href="#contact"
                className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
              >
                View Works
              </a>
            </div>
            <div className="flex gap-[1rem] justify-center">
              <a href="https://github.com/ExiviuZ" target="_blank">
                <FontAwesomeIcon className="fa-xl" icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/mark-angel-papio-076aa5149/"
                target="_blank"
              >
                <FontAwesomeIcon className="fa-xl" icon={faLinkedin} />
              </a>
            </div>
          </div>
        </section>
      </header>

      <main className="p-[2rem] sm:py-0">
        <section id="aboutme" className="sm:py-[4rem]">
          <h2 className="text-gray-300 sm:pb-[2.5rem]">
            Get To Know More{" "}
            <span className="block bg-pink-gradient bg-clip-text font-[500] text-transparent text-[1.6rem]">
              About Me
            </span>
          </h2>
          <div className="sm:flex sm:flex-wrap justify-center sm:gap-[1rem] items-center justify-items">
            <div className="mt-[2rem] sm:mt-[0rem] max-w-[300px] sm:max-w-[none] mx-auto flex-1 border-solid border-[1px] p-[1rem] border-white rounded-[10px] flex flex-col">
              <p className="mb-[1rem] flex items-center justify-center gap-[1rem]">
                <FontAwesomeIcon className="fa-2xl " icon={faSchool} />{" "}
                Education
              </p>
              <p className="opacity-[0.7]">
                <span className="block">B.Sc Bachelors Degree</span>{" "}
                <span className="block">Information Technology</span>
              </p>
            </div>

            <div className="mt-[2rem] sm:mt-[0rem] max-w-[300px] sm:max-w-[none] mx-auto flex-1 border-solid border-[1px] p-[1rem] border-white rounded-[10px] flex flex-col">
              <p className="mb-[1rem] flex items-center justify-center gap-[1rem]">
                <FontAwesomeIcon className="fa-2xl " icon={faBrain} /> Tech
                Skills
              </p>
              <div>
                <span className="block mb-[1rem] opacity-[0.8]">
                  Frontend Dev.
                </span>
                <div className="flex gap-[1rem] items-center justify-center">
                  <FontAwesomeIcon
                    className="fa-2xl mb-[1rem]"
                    icon={faHtml5}
                  />
                  <FontAwesomeIcon className="fa-2xl mb-[1rem]" icon={faCss3} />
                  <FontAwesomeIcon className="fa-2xl mb-[1rem]" icon={faJs} />
                  <FontAwesomeIcon
                    className="fa-2xl mb-[1rem]"
                    icon={faReact}
                  />
                  <FontAwesomeIcon className="fa-2xl mb-[1rem]" icon={faSass} />
                </div>
              </div>
              <div>
                <span className="block mb-[1rem] opacity-[0.8]">
                  Backend Dev.
                </span>
                <div className="flex gap-[1rem] items-center justify-center">
                  <FontAwesomeIcon
                    className="fa-2xl mb-[1rem]"
                    icon={faNodeJs}
                  />
                  <FontAwesomeIcon
                    className="fa-2xl mb-[1rem]"
                    icon={faDatabase}
                  />
                  <span className="text-[1.25rem] self-start">ex</span>
                </div>
              </div>
            </div>

            <div className="mt-[2rem] sm:mt-[0rem] max-w-[300px] sm:max-w-[none] mx-auto flex-1 border-solid border-[1px] p-[1rem] border-white rounded-[10px] flex flex-col">
              <p className="mb-[1rem] flex items-center justify-center gap-[1rem]">
                <FontAwesomeIcon className="fa-2xl " icon={faMedal} />{" "}
                Self-taught on Free Time
              </p>
              <p className="opacity-[0.7]">
                <span className="block">2+ Years Self-Learning</span>{" "}
                <span className="block">Udemy - Freecodecamp - Youtube</span>
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-[4rem] sm:mt-0 sm:py-[4rem]">
          <h2 className="text-gray-300 sm:pb-[2.5rem]">
            Browse My Recent{" "}
            <span className="block bg-pink-gradient bg-clip-text font-[500] text-transparent text-[1.6rem]">
              Projects
            </span>
          </h2>

          <div className="sm:flex sm:flex-wrap gap-[1rem] sm:items-end justify-start">
            <div className="mt-[2rem] flex-1 sm max-w-[300px] mx-auto sm:max-w-[none] sm:mt-[0] border-solid border-[1px] p-[1rem] border-white rounded-[10px] flex flex-col">
              <img
                src="shortening.webp"
                alt=""
                className="mb-[2rem] rounded-[25px] max-h-[200px] object-cover object-top"
              />
              <p className="text-[1.4rem] mb-[1rem] font-[600] tracking-[2px]">
                URL Shortening
              </p>
              <div className="flex gap-[1rem] items-center justify-center">
                <a
                  href="https://github.com/ExiviuZ/FEM-URL-Shortening/"
                  target="_blank"
                  className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
                >
                  Github
                </a>
                <a
                  href="https://exiviuz.github.io/FEM-URL-Shortening/"
                  target="_blank"
                  className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="mt-[2rem] flex-1 sm max-w-[300px] mx-auto sm:max-w-[none] sm:mt-[0] border-solid border-[1px] p-[1rem] border-white rounded-[10px] flex flex-col ">
              <img
                src="space.webp"
                alt=""
                className="mb-[2rem] rounded-[25px] max-h-[200px] object-cover object-top"
              />
              <p className="text-[1.4rem] mb-[1rem] font-[600] tracking-[2px]">
                Space Tourism
              </p>
              <div className="flex gap-[1rem] items-center justify-center">
                <a
                  href="https://github.com/ExiviuZ/space-tourism/"
                  target="_blank"
                  className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
                >
                  Github
                </a>
                <a
                  href="https://exiviuz.github.io/space-tourism/"
                  target="_blank"
                  className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="mt-[2rem] flex-1 sm max-w-[300px] mx-auto sm:max-w-[none] sm:mt-[0] border-solid border-[1px] p-[1rem] border-white rounded-[10px] flex flex-col">
              <img
                src="home.webp"
                alt=""
                className="mb-[2rem] rounded-[25px] max-h-[200px] object-cover object-top"
              />
              <p className="text-[1.4rem] mb-[1rem] font-[600] tracking-[2px]">
                Room Homepage
              </p>
              <div className="flex gap-[1rem] items-center justify-center">
                <a
                  href="https://github.com/ExiviuZ/FEM-Room-Homepage/"
                  target="_blank"
                  className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
                >
                  Github
                </a>
                <a
                  href="https://exiviuz.github.io/FEM-Room-Homepage/"
                  target="_blank"
                  className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="mt-[2rem] flex-1 max-w-[300px] mx-auto sm:max-w-[290px] md:mx-[0] sm:mt-[0] border-solid border-[1px] p-[1rem] border-white rounded-[10px] flex flex-col">
              <img
                src="rawg.png"
                alt=""
                className="mb-[2rem] rounded-[25px] max-h-[200px] object-cover object-top"
              />
              <p className="text-[1.4rem] mb-[1rem] font-[600] tracking-[2px]">
                Rawg Clone
              </p>
              <div className="flex gap-[1rem] items-center justify-center">
                <a
                  href="https://github.com/ExiviuZ/rawg-clone/"
                  target="_blank"
                  className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
                >
                  Github
                </a>
                <a
                  href="https://exiviuz.github.io/rawg-clone/"
                  target="_blank"
                  className="px-[1.25rem] text-[12px] py-[1rem] uppercase border-[1px] font-[500] transition-colors border-solid border-white rounded-full hover:text-black hover:bg-white"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-[2rem] sm:pt-[4rem]" id="contact">
        <h2 className="text-gray-300 mb-[1rem] sm:pb-[2.5rem] ">
          Get In Touch{" "}
          <span className="block text-[1.6rem] bg-pink-gradient bg-clip-text font-[500] text-transparent">
            Contact Me
          </span>
        </h2>

        <div className="border-solid border-[1px] border-white p-[1rem] rounded-[10px] text-left mb-[4rem] flex flex-col gap-[0.5rem] max-w-[400px] mx-auto ">
          <a href="mailto:papio.markangel788@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> papio.markangel788@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/mark-angel-papio-076aa5149/">
            <FontAwesomeIcon icon={faEnvelope} /> LinkedIn
          </a>
        </div>

        <p className="opacity-[0.6]">
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2024 Mark Angel. All
          Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
