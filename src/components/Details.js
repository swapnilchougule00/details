import React, {   useState } from 'react'
import { motion } from 'framer-motion'
import { Rate } from 'antd'

function Details({image}) {

const [details, setDetails] = useState({userName:'', userContact:"" , userMsg:''})

const [person , setPerson] =useState([])
const [value , setValue] =useState()
   
const handleChange = (e)=>{
  const name = e.target.name
  const value = e.target.value

  setDetails({...details , [name]:value})
  setPerson(details)
}

const handleRateChange = (newValue)=>{
setValue(newValue)
}


const submitForm =(e)=>{
    e.preventDefault()
    console.log({...person, 'Rating':value, 'img':image})
}
  return (
    <div className='w-full h-screen flex justify-center items-center'>
    <motion.div 
        initial={{
        opacity:0
      }}
      whileInView={{
        opacity:1
      }}
      transition={{
        duration:1.2
      }}
    className='bg-[rgb(45,45,45)] py-10  w-[65%] rounded-lg ' >
    <form className='flex flex-col space-y-4 items-center justify-center ' onSubmit={submitForm}>
    <img src={image} className='h-[80px]  w-[80px] object-cover rounded-full' alt="" />
        
        <input type="text" name='userName' placeholder='Full Name' value={details.userName} onChange={handleChange}
         className=' bg-slate-400/10 w-[80%] rounded-sm border-b py-2 outline-none text-sm md:text-base p-2
        border-[#242424] hover:border-[#F7AB0A] text-gray-400 ' />

        <input type="text" placeholder='Mobile No' name='userContact'  value={details.userContact} onChange={handleChange}
         className=' bg-slate-400/10 w-[80%] rounded-sm border-b py-2 outline-none text-sm md:text-base p-2
        border-[#242424]  hover:border-[#F7AB0A] text-gray-400 '  />
  
        <textarea type="text" name='userMsg' placeholder='Message'  value={details.userMsg} onChange={handleChange}
         className=' bg-slate-400/10 w-[80%] rounded-sm border-b py-2 outline-none text-sm md:text-base p-2
        border-[#242424] hover:border-[#F7AB0A] text-gray-400 h-28' />

        <Rate defaultValue={0.5} allowHalf allowClear={false} value={value} onChange={handleRateChange} />

        <button className='px-6 py-2 border border-[rgb(36,36,36)] rounded-lg font-semibold bg-[#f7AB0A] text-md tracking-widest
        text-gray-800 transition-all hover:text-[#f7AB0A] hover:bg-transparent hover:border-[#f7AB0A]' >SUBMIT</button>
    </form>
    </motion.div>
    
     </div>
      
  )
}

export default Details