import React from 'react'
import { call, fb, insta, map, sms, twitter, yt } from '../assets/icons'
import cube from '../assets/images/cube.png'

const Contact = () => {
  return (
    <>
      <section id='contact' className='w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center'>

        <div className='flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20'>
          <div className='flex justify-center items-start flex-col gap-4 w-full'>
            <h1 className='text-green-600 font-bold text-[35px]'>Contact Info</h1>

            {/* Call */}
            <div id='phone' className='flex justify-center items-center gap-4 text-lg text-semibold text-gray-600'>
              <span className='bg-green-400 p-3 rounded-full'><img src={call} alt="call icon" height={22} width={22} /></span> +91 8122346789
            </div>


            {/* SMS */}
            <div id='sms' className='flex justify-center items-center gap-4 text-lg text-semibold text-gray-600'>
              <span className='bg-green-400 p-3 rounded-full'><img src={sms} alt="call icon" height={22} width={22} /></span> demomail@gmail.com
            </div>

            {/* MAP */}
            <div id='map' className='flex justify-center items-center gap-4 text-lg text-semibold text-gray-600'>
              <span className='bg-green-400 p-3 rounded-full'><img src={map} alt="call icon" height={22} width={22} /></span> Lorem, ipsum dolor.
            </div>

            <div id='logos' className='flex justify-center items-center gap-4 mt-10'>

              {/* FB  */}
              <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'>
                <img src={fb} alt="fb" width={25} height={25} />
              </span>

              {/*insta*/}
              <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'>
                <img src={insta} alt="fb" width={25} height={25} />
              </span>

              {/* Twitter */}
              <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'>
                <img src={twitter} alt="fb" width={25} height={25} />
              </span>

              {/* YT */}
              <span className='bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600'>
                <img src={yt} alt="fb" width={25} height={25} />
              </span>

            </div>
          </div>

          <div className='flex flex-col justify-center items-center gap-3 w-full'>
              <input type="text"  id=""  placeholder='Enter your name' className='px-4 py-4 w-full border-2 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600'/>

              <input type="email"  id=""  placeholder='Enter your email' className='px-4 py-4 w-full border-2 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600'/>

              <textarea  className="px-4 py-4 w-full border-2 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600" name="" id="" cols="30" rows="5" placeholder='Enter your message...'></textarea>

              <button className='bg-green-700 text-white px-4 py-3 w-full rounded-lg hover:bg-black cursor-pointer'>Submit</button>
          </div>
        </div>


      </section>

      <img src={cube} alt="cube"  className='w-full h-72 absolute top-[3550px] hidden xl:block'/>
    </>
  )
}

export default Contact