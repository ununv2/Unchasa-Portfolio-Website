export default function Profile() {
  return (
    <div
      className="grid grid-row-3 w-full h-full p-14"
      style={{ gridTemplateRows: "3fr 0fr 9fr" }}
    >
      <div
        data-aos="fade-left"
        className="flex justify-start items-center text-white font-bold text-[3em] "
      >
        Profile
      </div>
      <div className=""></div>
      <div data-aos="fade-left" className="text-white flex flex-col gap-5">
        <h1>Name : Unchasa Chen</h1>
        <h1>Age : 18 Years Old</h1>
        <h1>Birthday : 12/05/2006</h1>
        <h1>Nationality : Thai / Taiwan</h1>
        <h1>Languages : Thai, English, Mandarin</h1>
        <h1>
          Extracurricular : Basketball, Badminton, Video Editing, Content
          Creator, Guitarist
        </h1>
        <h1>Skills : HTML CSS JS NEXTJS TAILWINDCSS TYPESCRIPT JAVA PYTHON</h1>
      </div>
    </div>
  );
}
