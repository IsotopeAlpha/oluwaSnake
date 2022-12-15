
import { useState } from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function Home() {
  const [showTrack, setShowTrack]  = useState(false);

  const handleClick =()=>{
    setShowTrack(true);
  }
  const status = "En Route";
    return (
      <div>

      <Navbar  title="Track Shipment"/>
      <section className='flex flex-col p-10  items-center w-[100vw] bg-orange-300'>
        
        <div className="mt-[10vh] text-xl font-bold uppercase">Enter Tracking / Container Number</div>
        <div className="mt-5 flex sm:flex-row flex-col gap-5">
            <input placeholder="Tracking Number #"  className="border-gray-300 w-[70vw] h-[5vh] rounded p-3"/>
            <button type="submit" onClick={handleClick} className="p-2 bg-orange-700 text-white font-bold">Track & Trace</button>
            
        </div>
        {showTrack?
        <div className="bg-white w-[80vw] p-4 m-4">
          <table className="w-full ">
            <tr className="mb-10 text-white">
             
            </tr>
            <tr className="bg-gray-300">
              <th className="mr-5">Item</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td className="mr-5">Cup</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="mr-5">Boots</td>
              <td>3</td>
            </tr>
          </table>
        </div>: <div className="mt-20 text-l">NB: Sometimes, it may take few minutes to load, please wait.</div>}
      </section>
      <Footer/>
      </div>
    )
  }