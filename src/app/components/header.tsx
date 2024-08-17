import Image from "next/image";
import Logo from "@public/logoweb.png";
import Link from 'next/link';

export default function Header() {
  return (
    // <div className="w-screen">
    //   <div className="h-10 my-5 md:text-sm text-white text-[0.6rem]">
    //     <div className="w-full flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center">
    //       <div className="w-12">
    //         <Image className="rounded-xl " src={Logo} alt="Logo" />
    //       </div>
    //       <div className="w-[50%] ">
    //         <ul className="flex flex-row justify-around items-center h-12 bg-gradient-to-r from-cyan-400/20 bg-opacity-20 backdrop-blur-sm rounded-[20px] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.6)]">
    //           <li className="cursor-pointer ">
    //             <a href="">หน้าหลัก</a>
    //           </li>
    //           <li className="cursor-pointer">
    //             <a href="">แนะนำตัว</a>
    //           </li>
    //           <li className="cursor-pointer">
    //             <a href="">ผลงาน</a>
    //           </li>
    //           <li className="cursor-pointer">
    //             <a href="">เรซูเม่</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="hidden md:flex p-4 items-center h-12 border border-solid border-white/40 backdrop-blur-sm rounded-[20px] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.6)]">
    //         unun
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div data-aos="fade-up" className="flex py-8 mb-[12vh] sm:mb-[7vh] md:mb-[6vh] justify-center items-center text-white">
      <div className="flex w-full justify-center items-center gap-5">
        <div className="w-16">
          <Image className="rounded-xl " src={Logo} alt="Logo" />
        </div>
        <div className="w-full md:w-[50%]">
          <ul className="flex flex-row justify-around items-center text-[22px] h-[3em] bg-gradient-to-r from-cyan-400/20 bg-opacity-20 backdrop-blur-sm rounded-[20px] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.6)]">
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
        <div className="text-[22px] hidden md:flex p-4 items-center h-[3em] border border-solid border-white/40 backdrop-blur-sm rounded-[20px] shadow-[0_20px_30px_-15px_rgba(0,0,0,0.6)]">
          unun
        </div>
      </div>
    </div>
  );
}
