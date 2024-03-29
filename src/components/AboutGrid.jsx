import React from 'react'

const AboutGrid = ({ icon, text, label, heading }) => {
    return (
        <div className='flex justify-center items-center gap-5 flex-col bg-white rounded-lg m-2 p-3 lg:p-7'>
            <img src={icon} alt="icon" width={65} height={65} className='bg-green-400 p-3 rounded-full hover:bg-green-500 cursor-pointer hover:scale-105 hover:transition-shadow' />

            <h1 className='text-2xl lg:text-3xl text-center text-green-600 font-semibold'>{heading} </h1>
            <p className='text-[15px] text-center text-slate-500'>{text}</p>
            <p className='bg-green-800  text-white py-2 px-6 rounded-md text-[16px] hover:bg-black hover:text-white cursor-pointer'>{label}</p>
        </div>
    )
}

export default AboutGrid