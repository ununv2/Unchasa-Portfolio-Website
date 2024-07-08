export default function Education() {
  return (
    <div
      className="grid grid-row-3 w-full h-full p-14"
      style={{ gridTemplateRows: "3fr 0fr 9fr" }}
    >
      <div
        data-aos="fade-left"
        className="flex justify-start items-center text-white font-bold text-[3em] "
      >
        Education
      </div>
      <div className=""></div>
      <div data-aos="fade-left" className="text-white flex flex-col gap-5">
        <h1 className="font-bold">2010-2012</h1>
        <h1>Kindergarten - Charoenpong Kindergarten</h1>
        <h1 className="font-bold">2013-2015</h1>
        <h1>
        Elementary School - Saint Joseph Convent
        </h1>
        <h1 className="font-bold">2015-2018</h1>
        <h1>
        Elementary ~ Middle School - Anglo Singapore International School
        </h1>
        <h1 className="font-bold">2019-2022</h1>
        <h1>
        High School - International Community School Bangkok
        </h1>
        <h1 className="font-bold">2023-Now</h1>
        <h1>
        University - International School of Engineering Chulalongkorn University [ICE]
        </h1>
      </div>
    </div>
     
  )
}
