import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 lg:mt-36 bg-dark lg:rounded-t-[45px] px-4 lg:px-[60px] pt-[55px] pb-[50px]">
      <section className="flex flex-col lg:flex-row gap-12 justify-between items-center lg:items-end">
        <div>
          <Image
            src={"/logo-white.png"}
            alt="positivus logo"
            width={180}
            height={30}
          />
        </div>
        <nav className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 list-none">
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex hover:underline text-gray"
            >
              About us
            </a>
          </li>
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex hover:underline text-gray"
            >
              Services
            </a>
          </li>
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex hover:underline text-gray"
            >
              Use Cases
            </a>
          </li>
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex hover:underline text-gray"
            >
              Pricing
            </a>
          </li>
          <li className="group block ">
            <a
              href="#!"
              className="group-hover:text-green transition-all delay-200 flex hover:underline text-gray"
            >
              Blog
            </a>
          </li>
        </nav>

        {/* Images to be displayed in large screen devices */}
        <div className="hidden lg:flex gap-3">
          <span>
            <Image
              src={"/linkedin.svg"}
              alt="linkedin"
              width={30}
              height={30}
            />
          </span>
          <span>
            <Image
              src={"/facebook.svg"}
              alt="linkedin"
              width={30}
              height={30}
            />
          </span>
          <span>
            <Image src={"/twitter.svg"} alt="linkedin" width={30} height={30} />
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-10 lg:gap-3 lg:flex-row justify-between mt-[66px]">
        <div className="flex flex-col gap-3 lg:gap-0 lg:justify-between text-white text-center lg:text-start">
          <h3 className="text-black font-bold inline mb-10 lg:mb-0">
            <span className="bg-green px-1 py-0.5 rounded-lg">Contact us:</span>
          </h3>
          <p>Email: info@positivus.com </p>
          <p>Phone: 555-567-8901</p>
          <p>
            Address: 1234 Main St <br />
            Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="bg-[#292A32] px-10 py-14 rounded-[14px]">
          <form className="flex flex-col md:flex-row gap-5">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent px-4 xl:px-9 py-3 md:py-5 rounded-[14px] border border-white text-white w-full"
            />
            <button className="bg-green px-4 xl:px-9 py-3 md:py-5 rounded-[14px] w-full">
              Subscribe to news
            </button>
          </form>
        </div>
      </section>

      {/* Images to be displayed in small screen devices */}
      <div className="lg:hidden flex justify-center gap-3 mt-10 lg:mt-[50px]">
        <span>
          <Image src={"/linkedin.svg"} alt="linkedin" width={30} height={30} />
        </span>
        <span>
          <Image src={"/facebook.svg"} alt="linkedin" width={30} height={30} />
        </span>
        <span>
          <Image src={"/twitter.svg"} alt="linkedin" width={30} height={30} />
        </span>
      </div>

      <hr className="mt-10 lg:mt-[50px] text-gray" />
      <div className="mt-10 lg:mt-[50px] flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-8  text-white">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Positivus. All Rights Reserved.
        </p>

        <a
          href="#!"
          className="flex hover:underline transition-all duration-300"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;