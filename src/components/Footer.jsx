import logo from '../assets/logo.png'

export default function Footer() {
    return (
      <div className='sm:flex sm:flex-row flex-col gap-3 p-5 w-[100vw] bg-[#041030] text-white'>
        <div className='sm:flex-col sm:flex sm:w-[40vw] '>
            <div className=' mt-2 '><img src={logo} alt='logo' /></div>
            <div className="mt-[10vh] md:text-xl ">Logistics industry experts and entusiasts that are passionate about progressive supply chain solutions worldwide</div>
        </div>
        <div className='sm:flex-col sm:flex md:w-[60vw] w-[100vw]'>
            <div className="mt-10 gap-5">
                <p className='mb-2 font-bold'>Useful Links</p>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>  
            </div>
            <div className='mb-2 font-bold mt-10'>Newsletter</div>
            <div className="mt-5 flex gap-5">
                <input placeholder="Email  example: felix45@hotmail.com"  className="border-gray-300 w-[40vw] h-[5vh] rounded p-3"/>
                <button type="submit" className="p-2 bg-orange-700 text-white font-bold ">Email Me</button>
            </div>
            <div className="mt-20 text-l">Copyright © 2022 Sky2C Freight Center. All rights reserved.</div>
        </div>
        
      </div>
    )
  }