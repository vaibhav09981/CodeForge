import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="w-[220px] h-[56px]">
        <a href="#">
          <Image
            src={"/logo-white.png"}
            alt="CodeForge logo"
            width={250}
            height={65}
          />
        </a>
      </div>
      <nav>
        <ul className="hidden lg:flex p-4 gap-x-1 items-center">
          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#!"
              className="py-2 px-4 rounded-md hover:bg-green hover:font-bold transition-all"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#!">
              <button className="bg-green text-black py-3 px-6 rounded-md hover:font-medium hover:border hover:border-black transition-all">
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