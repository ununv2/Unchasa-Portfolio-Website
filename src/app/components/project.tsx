import Image from "next/image";
import yt from "@public/web1.png"
export default function project() {
  return (
    // WHOLE SCREEN
    <div className="w-screen h-screen bg-gradient-to-b from-[#0f4a74] to-[#000000]">
        {/* //WHOLE SCREEN MAKE CENTER */}
        <div className="w-full h-full flex justify-center items-center">
            {/* //CONTAINER  */}
            <div className="flex justify-start items-start w-[70%] h-[90%]">
            {/* //MAKE 2 COLUMNS */}
            <div className="grid grid-cols-2 w-full h-full" style={{gridTemplateColumns:"3fr 4fr"}}>
                {/* //COLUMN 1 */}
                <div className="">
                    {/* //2 ROWS IN COLUMN 1 */}
                    <div className="grid grid-rows-2 w-full h-full" style={{gridTemplateRows:"2fr 3.8fr"}}>
                        {/* //ROW 1 */}
                        <div className=" flex justify-center items-center py-4">
                            {/* //CONTAINER */}
                            <div className="rounded-3xl flex justify-center items-center w-full h-full bg-[#031732cf] ">
                                {/* //TEXT */}
                                <div className="text-center text-[6em] font-extrabold bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text drop-shadow-xl" style={{fontFamily:"LINE Seed Sans TH"}}>Projects</div>
                            </div>
                        </div>
                        {/* //ROW 2 */}
                        <div className=" flex justify-center items-center pt-0 py-4">
                            {/* //CONTAINER */}
                            <div className="rounded-3xl flex justify-center items-center w-full h-full bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-filter backdrop-blur-xl shadow-lg border border-r-2 border-b-2 border-t-0 border-l-0 border-white/30">
                                <Image src={yt} alt={"yt"} className="rounded-3xl w-[95%] h-[95%]"></Image>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //COLUMN 2 */}
                <div className="">
                    {/* //MAKE ANOTHER 2 COLUMNS */}
                    <div className="grid grid-cols-2 w-full h-full">
                        {/* //1ST COLUMN */}
                        <div className="">
                            <div className="flex flex-col gap-4 justify-evenly items-center w-full h-full pl-4 py-4">
                                <div className="rounded-3xl flex justify-center items-center w-full h-full bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-filter backdrop-blur-xl shadow-lg border border-r-2 border-b-2 border-t-0 border-l-0 border-white/30 overflow-hidden">
                                    <Image src={yt} alt={"yt"} className="rounded-3xl w-[95%] h-[95%]"></Image>
                                </div>
                                <div className="rounded-3xl flex justify-center items-center w-full h-full bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-filter backdrop-blur-xl shadow-lg border border-r-2 border-b-2 border-t-0 border-l-0 border-white/30">
                                    
                                </div>
                                <div className="rounded-3xl flex justify-center items-center w-full h-full bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-filter backdrop-blur-xl shadow-lg border border-r-2 border-b-2 border-t-0 border-l-0 border-white/30">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="">
                        <div className="flex flex-col gap-4 justify-evenly items-center w-full h-full pl-4 py-4">
                                <div className="rounded-3xl flex justify-center items-center w-full h-full bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-filter backdrop-blur-xl shadow-lg border border-r-2 border-b-2 border-t-0 border-l-0 border-white/30">asd</div>
                                
                                <div className="rounded-3xl flex justify-center items-center w-full h-full bg-gradient-to-br from-white/10 via-white/15 to-white/10 backdrop-filter backdrop-blur-xl shadow-lg border border-r-2 border-b-2 border-t-0 border-l-0 border-white/30">asd</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

  
        </div>
        


    </div>
  )
}
