"use client"
import Image from "next/image";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/about";
import Project from "./components/project";
import Project2 from "./components/project2";
import Activeslider from "./components/activeslider";
import Homepage from "./pages/homepage";
import Ft from "./components/ft";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <main className="w-screen h-screen">
      {/* <div className="">
        <div className="-z-10 absolute w-full h-full bg-cover bg-center" style={{backgroundImage: "url(main-bg.jpg)"}}></div>
        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(main-bg.jpg)"}}>
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
        </div>
      </div>
      <div className="">123</div> */}
      <div className="-z-10 absolute w-full h-full bg-cover bg-center" style={{backgroundImage: "url(main-bg.jpg)"}}></div>
        <Homepage></Homepage>
      <div>
        <About></About>
        <Project2></Project2>
      </div>
      <Ft></Ft>
    </main>
  );
}
