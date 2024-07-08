import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

export default function Homepage() {
  return (
    <div className="w-screen h-screen">
      <div className="grid grid-row-3 w-full h-full" style={{gridTemplateRows:"2fr 5fr auto"}}>
        <Header />
        <Body />
        <Footer />
      </div>

    </div>


    
  )
}

