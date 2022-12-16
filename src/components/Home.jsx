import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function Home() {
  const [showTrack, setShowTrack]  = useState(false);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData]  = useState([]);
  const [loading, setLoading] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);
  
  const handleClick = async(e) =>{

    if(code==""){
      Swal.fire("Tracking Code", "Tracking Code Required", "error");
      setData("");
    }else{

    e.preventDefault();
    setLoading(true)
    await axios.get(`https://sky2cfreight.onrender.com/user/${code}`).then((res)=>{
      setLoading(false);  

      if(res.data.data<1){
        Swal.fire("Tracking Code", "Tracking Code Not Found", "error");
        setData("");
      }else{
      console.log(res.data)
      setData(res.data.data[0])
      setStatus(data.status);}
    });

    
    switch(data.status){
      case "processing":
        setProgressPercentage(40);
        break;
      case "packaged":
        setProgressPercentage(56);
        break;
      case "en route":
        setProgressPercentage(70);
        break;
      case "ready":
        setProgressPercentage(100);
        break;
      default:
        setProgressPercentage(20);
        break;
    }


    setShowTrack(true);
  }
}


    return (
      <div>

      <Navbar  title="Track Shipment"/>
      <section className='flex flex-col p-10  items-center w-[100vw] bg-orange-300'>
        
        <div className="mt-[10vh] text-xl font-bold uppercase">Enter Tracking / Container Number</div>
        <div className="mt-5 flex sm:flex-row flex-col gap-5">
            <input placeholder="Tracking Number #"  className="border-gray-300 w-[70vw] h-[5vh] rounded p-3" onChange={(e)=>setCode(e.target.value)}/>
            <button type="submit" onClick={handleClick} className="p-2 bg-orange-700 text-white font-bold">Track & Trace</button>
            
        </div>
        {showTrack?
        <div className="bg-white w-[80vw] p-4 mt-10 rounded shadow-md">
          <table className="sm:w-[80vw] absolute text-white font-bold sm:uppercase">
            
            <tr className=" uppercase">
              <td>{status}</td>
            </tr>
          </table>
          <div className='h-7 w-full bg-[#041030] mb-4'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${
                  progressPercentage < 30 ?'bg-red-800  animate-pulse':
                  progressPercentage < 50 ?'bg-yellow-700  animate-pulse':
                    progressPercentage < 71 ? 'bg-yellow-300  animate-pulse' : 'bg-green-600  animate-pulse'}`}>
            </div> 
          </div>
          
          <table className="w-full ">
            <thead>
              <tr className="bg-gray-300">
                <th className="mr-5">Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {loading?<div>Loading</div>: data.item.map((item)=>(
                <tr>
                  <td>{item.name}</td>
                  <td className="pl-10">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>: <div className="mt-20 text-l">NB: Sometimes, it may take few minutes to load, please wait.</div>}
      </section>
      <Footer/>
      </div>
    )
  }