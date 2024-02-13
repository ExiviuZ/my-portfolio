import { faBars, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenBar() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="flex  justify-between items-center relative sm:gap-[1rem]">
      <img src="logo.png" className="w-[75px]" alt="" />
      <ul
        className={`flex flex-col items-center justify-center justify-items-center gap-[3rem] fixed z-[1] bg-[#101010] max-w-[280px] w-[70%] h-[100vh] top-0 right-0 transition-all ${
          isOpen ? "translate-x-[0]" : "translate-x-[100%]"
        } sm:translate-x-0 sm:static sm:h-auto sm:flex-row sm:bg-transparent sm:max-w-[none] sm:w-[100%] sm:justify-items-start`}
      >
        <li className="absolute top-[30px] right-[30px] ">
          <FontAwesomeIcon
            className="fa-2xl sm:hidden"
            icon={faXmark}
            onClick={handleOpenBar}
          />
        </li>
        <li
          className="after:content-[''] after:w-[100%] after:h-[1px] after:absolute after:bottom-[-5px] after:left-0 relative after:scale-x-0 after:transition-all after:bg-pink-gradient hover:after:scale-x-[1]"
          onClick={() => setIsOpen(false)}
        >
          <a href="#aboutme">About</a>
        </li>
        <li
          className="after:content-[''] after:w-[100%] after:h-[1px] after:absolute after:bottom-[-5px] after:left-0 relative after:scale-x-0 after:transition-all after:bg-pink-gradient hover:after:scale-x-[1]"
          onClick={() => setIsOpen(false)}
        >
          {" "}
          <a href="#projects">Projects</a>{" "}
        </li>
        <li
          className="after:content-[''] after:w-[100%] after:h-[1px] after:absolute after:bottom-[-5px] after:left-0 relative after:scale-x-0 after:transition-all after:bg-pink-gradient hover:after:scale-x-[1]"
          onClick={() => setIsOpen(false)}
        >
          {" "}
          <a href="#contact">Contact</a>{" "}
        </li>
        <li className="sm:ml-auto">
          <a
            href="Papio_Mark Angel_M CV.pdf"
            download="Papio_Mark Angel_M CV.pdf"
            className=" font-[600] tracking-[1px] bg-pink-gradient rounded-full px-[1.5rem] py-[1rem]"
          >
            Resume
          </a>
        </li>
      </ul>

      <FontAwesomeIcon
        className="fa-xl sm:hidden"
        icon={faBars}
        onClick={handleOpenBar}
      />
    </nav>
  );
}

export default Navbar;
