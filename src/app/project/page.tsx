import Activeslider from "../components/activeslider"
export default function Project2() {
  return (
    <div id="project" className="w-screen h-screen" style={{backgroundImage: "url(main-bg.jpg)", backgroundPositionY: '-672px'}}>
        {/* //WHOLE SCREEN MAKE CENTER */}
        <div data-aos="fade-up" className="w-full h-full">
            <div className="text-center text-[2em] sm:text-[3em] md:text-[5em] leading-tight font-semibold text-white drop-shadow-lg ">
            <h1 className="flex pt-10 mb-10 justify-center drop-shadow-[5px_5px_0px_rgba(0,0,0,0.4)]" style={{fontFamily:"LINE Seed Sans TH"}}>Projects</h1>
            </div>
            <Activeslider></Activeslider>
        </div>
   </div>
  )
}
