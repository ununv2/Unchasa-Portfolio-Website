import { BiLogoFacebookSquare, BiLogoDiscordAlt, BiLogoInstagram, BiLogoGithub } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row items-center justify-between px-6 py-5">
      <div className="">
        <div className="w-fit max-w-[10rem]">
          <h6 className="text-slate-400 text-[1em] text-center sm:text-left mb-3 sm:mb-0">Contact Information: ununxuyy@gmail.com </h6>
        </div>
      </div>
      {/* Responsive Social Icons */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end flex-row gap-5">
        <a href="https://www.facebook.com/unun.chen.10/">
          <BiLogoFacebookSquare className="text-[2.3em] sm:text-[2.5em] lg:text-[3em] rounded-xl p-[0.6rem] text-white bg-[#01091e] drop-shadow-[0px_0px_5px_rgba(0,255,255,0.2)] hover:bg-white hover:text-[#01091e] transition-all duration-500" />
        </a>
        <a href="https://discord.gg/SVavFAb7j6">
          <BiLogoDiscordAlt className="text-[2.3em] sm:text-[2.5em] lg:text-[3em] rounded-xl p-[0.6rem] text-white bg-[#01091e] drop-shadow-[0px_0px_5px_rgba(0,255,255,0.2)] hover:bg-white hover:text-[#01091e] transition-all duration-500" />
        </a>
        <a href="https://www.instagram.com/ununnn__/">
          <BiLogoInstagram className="text-[2.3em] sm:text-[2.5em] lg:text-[3em] rounded-xl p-[0.6rem] text-white bg-[#01091e] drop-shadow-[0px_0px_5px_rgba(0,255,255,0.2)] hover:bg-white hover:text-[#01091e] transition-all duration-500" />
        </a>
        <a href="https://github.com/ununv2">
          <BiLogoGithub className="text-[2.3em] sm:text-[2.5em] lg:text-[3em] rounded-xl p-[0.6rem] text-white bg-[#01091e] drop-shadow-[0px_0px_5px_rgba(0,255,255,0.2)] hover:bg-white hover:text-[#01091e] transition-all duration-500" />
        </a>
      </div>
    </div>
  );
}
