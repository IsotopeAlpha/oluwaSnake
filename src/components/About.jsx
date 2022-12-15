import Navbar from "./Navbar";
import value from '../assets/value.jpg'
import mission from '../assets/mission.jpg'
import vision from '../assets/vision.jpg'
import Footer from "./Footer";

export default function About() {
    return (
      <section>
        <Navbar  title="About Us"/>
        <div className="font-bold sm:text-l sm:pb-3 flex justify-center items-center uppercase  m-2 mt-[10vh]">
            Sky2C Freight Center, We believe managing your supply chain for cost reductions and improved efficiencies is just the beginning.
        </div>
        <div className="sm:flex-row  flex flex-col gap-5 p-2 m-2 justify-center items-center">
            <img src={value} alt="Value Image" className="sm:w-[40vw] w-[80vw] rounded flex justify-center items-center sm:p-7"/>
            <div className="text-[#041030] w-[80vw] sm:w-[50vw] ">
                <div className="font-bold sm:text-3xl sm:pb-3">Our Core Value</div>
                <div className="sm:text-xl">We belive that asherence to our Core Values, as well as pride in our work and company, continuos improvement and responiveness, will lead us to continued growth.</div>
            </div>
        </div>
        <div className="sm:flex-row  flex flex-col gap-5 p-2 m-2 justify-center items-center">
            <img src={vision} alt="Value Image" className="sm:w-[40vw] w-[80vw] flex justify-center items-center rounded  sm:p-7"/>
            <div className="text-[#041030] w-[80vw] sm:w-[50vw] ">
                <div className="font-bold sm:text-3xl sm:pb-3">Our Vision</div>
                <div className="sm:text-xl">Connecting people, process, business and commuinities to a better future through logistics and supply chain solutions.</div>
            </div>
        </div>
        <div className="sm:flex-row  flex flex-col gap-5 p-2 m-2 justify-center items-center">
            <img src={mission} alt="Value Image" className="sm:w-[40vw] w-[80vw] rounded  flex justify-center items-center sm:p-7"/>
            <div className="text-[#041030] w-[80vw] sm:w-[50vw] ">
                <div className="font-bold sm:text-3xl sm:pb-3">Our Mission</div>
                <div className="sm:text-xl">To become the worlds preferred supply chain logistics company applying insight, service quality and innovation to create sustainable growth for business and society.</div>
            </div>
        </div>
        <Footer/>
      </section>
    )
  }