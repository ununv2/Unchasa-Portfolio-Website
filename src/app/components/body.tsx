export default function Body() {
    return (
      <div className="flex flex-col items-center">
        {/* Responsive Title */}
        <h1
          data-aos="zoom-out-up"
          className="text-center mb-5 sm:mb-0 text-[3em] sm:text-[4em] md:text-[6em] lg:text-[8em] leading-tight font-semibold bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
          style={{ fontFamily: "LINE Seed Sans TH" }}
        >
          Unchasa Chen
        </h1>
        {/* Responsive Subtitle */}
        <div data-aos="zoom-out-up" className="w-full max-w-[40rem] sm:max-w-[50rem] md:max-w-[60rem] mx-4 text-[1.2em] sm:text-[1.5em] lg:text-[2em]">
          <h5 className="text-center text-white">
            Hi! Welcome to my Portfolio's Website. Here you will find more information about me, my experiences, what I am currently working on, and much more!
          </h5>
        </div>
      </div>
    );
  }
  