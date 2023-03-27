import React, { } from 'react'
import { Link } from "react-router-dom";

function Landing({image,  handleImage}) {


  return (
    <div className='h-screen w-full flex justify-center items-center'>

      <div className='flex flex-col space-y-5 w-full h-full justify-center items-center'>

      <img src={image} alt="uploded image" className={`text-gray-500 tracking-wider w-[80%] md:w-[50%] h-[40%] md:h-[50%]
       flex justify-center items-center ${image ? 'block' : 'hidden'}`} />

        <input type="file" id='file' className={` ${image ? 'block' : 'hidden'}`} onChange={handleImage}/>

        <label htmlFor="file" className={`text-gray-500 tracking-wider w-[80%] md:w-[50%] h-[40%] md:h-[50%] text-2xl flex justify-center items-center 
         border border-dashed hover:text-lime-400  hover:border-lime-400 ${image ? 'hidden' : 'block'} `}
        >Upload Image</label>

        <Link to='/details' className='px-6 py-2 border border-[rgb(36,36,36)] rounded-lg font-semibold bg-[#f7AB0A] text-md tracking-widest
        text-gray-800 transition-all hover:text-[#f7AB0A] hover:bg-transparent hover:border-[#f7AB0A]'>NEXT</Link>

      </div>

    </div>
  )
}

export default Landing