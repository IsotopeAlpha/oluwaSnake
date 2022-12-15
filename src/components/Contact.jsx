import Navbar from "./Navbar";
import Footer from "./Footer";
import locate from '../assets/locate.jpg'

export default function Contact() {
    return (
      <section >
        <Navbar  title="Contact Us"/>
        <div className="font-bold sm:text-4xl sm:pb-3 uppercase mt-[10vh]  flex items-cente justify-center">
            Leave a message
        </div>
        <div className="sm:text-xl mb-5 flex items-cente justify-center">Kindly drop your quearies, if you have any questions</div>
        <div className="w-[80vw] text-[#041030] m-auto p-4 shadow-lg h-[30vh] sm:text-xl flex flex-col justify-center items-center mb-5 rounded-xl">
            <img src={locate} alt="Locate Image" className="w-[10vw] m-2" />
            <p>Address: 1210 S Pine Island Rd Suite 400, Plantain, FL 33324, USA</p>
            <p>Email: info@sky2cfreighcenter.com</p>
        </div>
        <Footer/>
      </section>
    )
  }