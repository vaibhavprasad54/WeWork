import React, {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { BsChevronRight } from "react-icons/bs"
import Image from 'next/image'
import searchicon from "../public/search-icon.svg"
import galleryicon from "../public/gallery-icon.svg"
import notificationicon from "../public/notification-icon.svg"
import helpicon from "../public/help-icon.svg"
import userdp from "../public/user-dp.svg"
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import userDp from "../public/user-dp.svg"


const Navbar = () => {

  //useState hook to save Navbar's state ( Open and Close )
  const [nav, setNav] = useState(false);

  const handleNav = () => {                     // Handler function to set the Navbar's state using state setter function from hook.
    setNav(!nav);
}

  return (
    <div className='flex items-center justify-center flex-col px-4 sm:px-6 pt-7'>
        <div className='w-full flex items-center justify-between'>
            <div className="logo flex items-center justify-center cursor-pointer">
                <div className='h-8 w-8 pl-2 bg-[#00B686] rounded-full border-[6px] border-[#04433B]'>  </div>
                <BsChevronRight className='text-sm text-[#657372] ml-[2px] font-bold' />
            </div>
            <div className="sm:hidden hamburger" onClick={handleNav}>
                <RxHamburgerMenu className='text-3xl text-[#657372] '/>
            </div>
            <div className="menu hidden sm:flex items-center justify-center space-x-[30px]">
              <Image src={searchicon} className='cursor-pointer' alt="" />
              <Image src={galleryicon} className='cursor-pointer' alt="" />
              <Image src={notificationicon} className='cursor-pointer' alt="" />
              <Image src={helpicon} className='cursor-pointer' alt="" />
              <Image src={userdp} className='cursor-pointer' title='Jane Smith' alt="" />
            </div>
        </div>
        <hr className='w-full h-px my-3 bg-gray-300 border-0' />

        <div className={nav ? "md:hidden z-50 fixed right-0 top-0 w-full h-screen bg-black/70": ""}>            {/* Overlay shadow on hamburger click */}
            <div className={nav ? "fixed right-0 top-0 w-[100%] sm:w-[100%] md:w-[100%] h-screen bg-[#F2FBF9] px-5 py-3 ease duration-500": "fixed right-[-100%] top-0 px-5 py-4 ease duration-500"}>
                <div>
                  
                <div className="flex w-full items-center justify-end py-2">
                    <div onClick={handleNav} className="rounded-full text-xs sm:text-sm sm:p-2 cursor-pointer">
                        <AiOutlineClose className='text-xl text-gray-600 font-bold' />
                    </div>
                    {/* <Image src={logo} alt="" width={140} height={20}  /> */}
                    
                </div>

                <div className='flex items-center justify-start border-b border-gray-300 py-[1.1rem] pt-7 mx-10'>
                  <Image src={userDp} alt="" />
                  <div className='px-3'>
                      <h2 className='text-base font-bold text-[#233735]'>Jane Smith</h2>
                      <p className='text-xs font-normal text-[#7B8786]'>Sales Executive</p>
                  </div>
                </div>

            </div>
            <div className="py-0 flex flex-col mx-10">
                <ul className="text-[#233735] flex flex-col items-start">
                    <Link href="/" className='flex items-center justify-start space-x-4 w-full border-b border-gray-300'> 
                    <Image src={searchicon} alt="" />
                      <li className="py-[1.15rem] font-normal text-base"> Search </li> 
                    </Link>
                    <Link href="/#about" className='flex items-center justify-start space-x-4 w-full border-b border-gray-300'> 
                      <Image src={galleryicon} alt="" />
                      <li className="py-[1.15rem] font-normal text-base"> Inbox </li> 
                    </Link>
                    <Link href="/#projects" className='relative flex items-center justify-start space-x-4 w-full border-b border-gray-300'> 
                      <Image src={notificationicon} alt="" />
                        <div className='absolute top-2 -left-1 h-5 w-5 rounded-full text-white font-semibold flex items-center justify-center bg-[#F97777] text-[10px]'>25</div>
                      <li className="py-[1.15rem] font-normal text-base"> Notification </li>
                    </Link>
                    <Link href="/#contact" className='flex items-center justify-start space-x-4 w-full border-b border-gray-300'> 
                      <Image src={helpicon} alt="" />
                      <li className="py-[1.15rem] font-normal text-base"> Help </li> 
                    </Link>
                </ul>

            </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar