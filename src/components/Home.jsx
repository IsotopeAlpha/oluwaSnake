export default function Home() {
    return (
      <section id="home" className='flex flex-col p-5  items-center w-[100vw] bg-orange-300'>
        <div></div>
        <div className="mt-[10vh] text-xl font-bold uppercase">Enter Tracking / Container Number</div>
        <div className="mt-5 flex sm:flex-row flex-col gap-5">
            <input placeholder="Tracking Number #"  className="border-gray-300 w-[70vw] h-[5vh] rounded p-3"/>
            <button type="submit" className="p-2 bg-orange-700 text-white font-bold">Track & Trace</button>
            
        </div>
        <div className="mt-20 text-l">NB: Sometimes, it may take few minutes to load, please wait.</div>
      </section>
    )
  }