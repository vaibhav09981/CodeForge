import React from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="w-auto">
        <a href="#">
          <p className="font-bold text-3xl">{"</"}C<span className="text-green">F</span>{">"} Code<span className="text-green">Forge</span></p>
        </a>
      </div>
      <nav>
        <ul className="hidden lg:flex p-4 gap-x-1 items-center">
          <li>
            <a
              href="#about"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold duration-300 transition-all"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#techniques"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all duration-300"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#blogs"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#join">
              <button className="bg-green text-black py-3 px-6 rounded-md duration-300 hover:font-medium hover:scale-105">
                Join the Community
              </button>
            </a>
          </li>
        </ul>
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;