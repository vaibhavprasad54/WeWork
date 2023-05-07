import Image from 'next/image'
import React from 'react'
import banner from "../public/banner-image.svg"
// import cutout from "../public/cutout.svg"
import wework from "../public/wework.svg"
import salesforce from "../public/salesforce.svg"
import { AiOutlinePlus } from "react-icons/ai"

const Main = () => {
  return (
    <div className='main px-4 sm:px-6'>
        <div className="w-full top flex items-center justify-between">
            <h2 className='text-[#04433B] text-lg sm:text-2xl md:text-2xl font-extrabold'>WeWork + Salesforce</h2>
            <button className='bg-[#00B686] text-white text-sm sm:text-lg md:text-lg font-semibold px-3 py-[5px] rounded-[5px] cursor-pointer hover:bg-[#19a37e]'> Publish/Share </button>
        </div>
        <div className="middle my-0">
            <div className='relative -z-10 overflow-hidden'>
                <Image src={banner} className='my-2 object-fill w-screen h-20 sm:h-32 md:h-56 rounded-lg sm:rounded-2xl' alt="Banner image" />
                <span className="blurry bg-[url('../public/cutout2.svg')] bg-no-repeat bg-right-top bg-cover content-none blur h-full sm:h-80 md:h-[21rem] lg:h-[23rem] xl:h-[25rem] absolute -right-2 top-0 w-1/2 my-clip"></span>
                <div className="overlay flex items-center text-xl h-full absolute top-0 right-2">
                    <div className="flex">
                       <h2 className='sm:mr-10 text-base sm:text-xl md:-mt-16 md:text-3xl lg:mr-14 lg:-mt-10 lg:text-4xl xl:text-4xl xl:mr-36 xl:mt-5 font-black leading-5'>Workspace <br /> Proposal</h2>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="logos z-10">
            <div className='flex items-center justify-start ml-5 -mt-11 md:-mt-16 bg-white w-max px-4 py-2 rounded-lg '>
                <Image src={wework} className='w-10 sm:w-14 md:w-20' alt="wework-logo" />
                    <AiOutlinePlus className='text-gray-500 mx-2 md:text-2xl' />
                <Image src={salesforce} className='w-10 sm:w-14 md:w-24' alt="salesforce-logo" />
            </div>
        </div>
        <div className="bottom flex items-center justify-between py-2">
            <div>
                <h2 className='text-base sm:text-xl md:text-2xl font-bold'>Project Scope Recap</h2>
            </div> 
            <div className='flex items-start justify-center flex-col sm:w-44 md:w-56'>
                <div className='flex w-[8.6rem] sm:w-[11rem] md:w-[13rem] items-center justify-between pb-1'>
                    <p className='text-[#7B8786] text-[11px] sm:text-base md:text-lg font-normal whitespace-nowrap'>Mutual Action Plan</p>
                    <p className='text-[#00B686] text-[11px] sm:text-base md:text-lg font-extrabold'>3%</p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#00B686] rounded-l-[63.63px] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] mx-[1.13px]'></div>
                    <div className='h-[6px] w-[6px] sm:h-2 sm:w-2 md:w-[10px] bg-[#D3D7D7] rounded-r-[63.63px] mx-[1.13px]'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main