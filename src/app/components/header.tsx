import Image from "next/image";
import Logo from "@public/logoweb.png";
import Link from 'next/link';

export default function Header() {
  return (
    <div data-aos="fade-up" className="flex py-8 mb-[12vh] sm:mb-[7vh] md:mb-[6vh] justify-center items-center text-white">
      <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-5">
        {/* Responsive Logo */}
        <div className="w-14 sm:w-12 md:w-16">
          <Image className="rounded-xl " src={Logo} alt="Logo" />
        </div>
        <div className="w-[80%] md:w-[50%]">
          {/* Responsive Navigation */}
          <ul className="flex flex-row justify-around items-center text-[16px] sm:text-[18px] md:text-[22px] h-[3em] bg-gradient-to-r from-cyan-400/20 bg-opacity-20 backdrop-blur-sm rounded-[20px] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.6)]">
            <li className="cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#about">About Me</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="#project">Projects</Link>
            </li>
            <li className="cursor-pointer">
              <a href="">Resume</a>
            </li>
          </ul>
        </div>
        {/* Responsive Username */}
        <div className="text-[18px] sm:text-[20px] md:text-[22px] hidden md:flex p-4 items-center h-[3em] border border-solid border-white/40 backdrop-blur-sm rounded-[20px] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.6)]">
          unun
        </div>
      </div>
    </div>
  );
}
