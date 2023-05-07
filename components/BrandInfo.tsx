import Image from 'next/image'
import React from 'react'
import {BsThreeDotsVertical, BsChatText, BsFiletypePdf} from "react-icons/bs"
import {BiShareAlt} from "react-icons/bi"
import companyImg1 from "../public/main-image-mobile.svg"
import companyImg2 from "../public/main-image-desktop.svg"
import {BsDownload} from "react-icons/bs"
import {CiZoomIn, CiZoomOut} from "react-icons/ci"
import {AiOutlineExpand} from "react-icons/ai"
import weworkLogo from "../public/wework-logo.svg"
import downloadicon from "../public/downloadicon.svg"
import unhideicon from "../public/unhideicon.svg"
import deleteicon from "../public/deleteicon.svg"


const BrandInfo = () => {
  return (
    <div className='w-full px-4 sm:px-6 pt-4 flex items-center justify-center flex-col'>
        <div className="w-full tabs flex items-center justify-between">
            <ul className='w-full flex items justify-center sm:justify-start space-x-[7px]'>
                <li className='text-[#00B686] whitespace-nowrap font-bold text-sm sm:text-base md:px-3 md:py-2 px-[5px] py-[4px] cursor-pointer hover:text-gray-600 border-[1px] border-[#BDC3C2] rounded-t-[5px]'>Basic Info</li>
                <li className='text-[#657372] whitespace-nowrap font-bold text-sm sm:text-base md:px-3 md:py-2 px-[5px] py-[4px] cursor-pointer hover:text-gray-600 border-[1px] border-[#BDC3C2] rounded-t-[5px]'>Files</li>
                <li className='text-[#657372] whitespace-nowrap font-bold text-sm sm:text-base md:px-3 md:py-2 px-[5px] py-[4px] cursor-pointer hover:text-gray-600 border-[1px] border-[#BDC3C2] rounded-t-[5px]'>Mutual Action Plan</li>
                <li className='text-[#657372] whitespace-nowrap font-bold text-sm sm:text-base md:px-3 md:py-2 px-[5px] py-[4px] cursor-pointer hover:text-gray-600 border-[1px] border-[#BDC3C2] rounded-t-[5px]'>Contact</li>
            </ul>
            <ul className='hidden sm:inline-block'>
              <li className='text-[#657372] whitespace-nowrap font-bold text-sm sm:text-base md:px-3 md:py-2 px-[5px] py-[4px] cursor-pointer hover:text-gray-600 border-[1px] border-[#BDC3C2] rounded-t-[5px]'>Internal Actions</li>
            </ul>
        </div>
        <div className="profile w-full mt-5 flex items-start justify-between ">
          <div className='overview hidden md:flex items-center justify-center flex-col bg-white px-4 py-4 rounded-[10px] mt-3'>
            <ul className='space-y-4'>
              <li className='text-[#657372] font-bold text-lg'>Overview</li>
              <hr />
              <li className='text-[#7B8786] text-sm cursor-pointer hover:text-black'>Welcome</li>
              <hr />
              <li className='text-[#7B8786] text-sm cursor-pointer hover:text-black'>Product Capabilities</li>
              <hr />
              <li className='text-[#7B8786] text-sm cursor-pointer hover:text-black'>Customer Success Stories</li>
              <hr />
              <li className='text-[#7B8786] text-sm cursor-pointer hover:text-black'>File Sharing</li>
              <hr />
              <li className='text-[#7B8786] text-sm cursor-pointer hover:text-black'>Our Deck</li>
            </ul>
          </div>
          <div className='md:w-[85%] w-full'>
          <div className=" profile-header flex items-center justify-between">
            <h2 className='text-base sm:text-xl md:text-2xl font-bold'>Company Profile</h2>
            <BsThreeDotsVertical className='sm:hidden text-[#657372] text-base' />
            <div className='hidden sm:flex items-center justify-center space-x-4 border-[1px] border-[#BDC3C2] hover:border-[#9ba1a0] rounded-md px-2 py-2'>
              <Image src={downloadicon} className='cursor-pointer hover:scale-105 ease-in-out duration-100' alt="" />
                <div className="inline-block h-[25px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50"></div>
              <Image src={unhideicon} className='cursor-pointer hover:scale-105 ease-in-out duration-100' alt="" />
                <div className="inline-block h-[25px] min-h-[1em] w-0.5 self-stretch bg-neutral-300 opacity-100 dark:opacity-50"></div>
              <Image src={deleteicon} className='cursor-pointer hover:scale-105 ease-in-out duration-100' alt="" />
            </div>
          </div>
          <div className="relative profile-image flex items-center justify-center flex-col mt-2 sm:mt-4">
            <Image src={companyImg1} className='lg:hidden w-full rounded-xl object-contain' alt="Company profile image" />
            <Image src={companyImg2} className='hidden lg:block w-full h-full rounded-xl' alt="Company profile image" />
          <div className="absolute top-3 options backdrop-blur-xl backdrop-brightness-125 px-4 py-2 border-[1px] border-[#D3D7D7] rounded-md">
              <div className='flex items-center justify-center space-x-2'>
              <div className="pdf flex items-center justify-center"> 
                <BsFiletypePdf className='text-[#657372] text-2xl sm:text-4xl cursor-pointer hover:text-black' />
                <p className='text-sm sm:text-lg pl-2'>1/15</p>
              </div>
              <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
              <div className="download">
                <BsDownload className='text-[#657372] text-xl sm:text-3xl ml-3 cursor-pointer hover:text-black' />
              </div>
              <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
              <div className="zoom-in">
                <CiZoomIn className='text-[#657372] text-2xl sm:text-4xl ml-2 cursor-pointer hover:text-black' />
              </div>
              <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
              <div className="zoom-out">
                <CiZoomOut className='text-[#657372] text-2xl sm:text-4xl ml-2 cursor-pointer hover:text-black' />
              </div>
              <div className="inline-block h-[30px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
              <div className="expand">
                <AiOutlineExpand className='text-[#657372] text-lg sm:text-3xl ml-2 cursor-pointer hover:text-black' />
              </div>
              </div>
          </div>
          <div className='absolute top-16 sm:top-24 sm:mt-16 sm:px-7 sm:py-3 main-banner flex flex-col items-center justify-center bg-white/70 px-2 py-2 border-[1px] border-[#D3D7D7] rounded-sm mt-7'>
            <div className="banner-container flex flex-col items-center justify-center px-1 py-2">
              <Image src={weworkLogo} className='sm:w-80' alt="wework-logo" />
              <p className='text-[13px] sm:text-xl sm:pt-2 font-bold pb-1'>For all the ways you work, we&apos;re here</p>
            </div>
          </div>
          </div>


          <div className='relative w-full mt-10 sm:mt-32 pb-2 sm:mb-14'>
          <div className="absolute chat-and-share flex items-center justify-start mt-4 space-x-3 divide-x divide-[#D3D7D7]">
            <BsChatText className='text-[#657372] text-lg sm:text-2xl cursor-pointer hover:text-gray-600' />
            <BiShareAlt className='text-[#657372] text-[28px] sm:text-3xl pl-2 cursor-pointer hover:text-gray-600' />
          </div>
          <div className='absolute top-[16px] left-[10px] sm:left-3 sm:top-4 h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center bg-[#00B686] rounded-full'>
            <p className='text-[7px] mt-[1px] ml-[1px] sm:text-xs sm:-mt-[2px] font-bold text-white'>8</p>
          </div>
        </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default BrandInfo