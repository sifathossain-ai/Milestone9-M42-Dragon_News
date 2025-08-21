import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaAngleDown } from 'react-icons/fa';
import { GoShareAndroid } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { LuBookmark, LuSearch } from 'react-icons/lu';
import { MdLocationOn, MdMyLocation, MdOutlineMapsHomeWork } from 'react-icons/md';
import { PiDotsThreeBold } from 'react-icons/pi';
import { RiMessage3Line, RiNotification4Line } from 'react-icons/ri';
import img from '../assets/sifat.jpg';
import profile from '../assets/profile.jpg';
import man1 from '../assets/man1.jpg';
import woman from '../assets/woman.jpg';

const Asepase = () => {
    return (
        <div className='bg-[#F6FDFF]'>
            <header className='bg-white mb-2'>
                <div className='flex justify-between md:w-11/12 mx-auto py-7 items-center'>
                    <div className='flex gap-2 items-center'>
                        <MdMyLocation></MdMyLocation>
                        <small className='text-[10px] md:text-sm'>Daffodil Smart ...</small>
                        <IoIosArrowDown className='text-[10px] md:text-sm'></IoIosArrowDown>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <RiNotification4Line className='text-lg'></RiNotification4Line>
                        <LuSearch className='text-lg'></LuSearch>
                    </div>
                </div>
            </header>

            <main>
                <div className='md:w-5/12 md:rounded-lg bg-white px-3 mx-auto py-4'>
                    <div>
                        <div className='flex items-center justify-between pr-7'>
                            <div className='flex items-center gap-2'>
                                <h3 className='font-semibold'>Sifat Hossain</h3>
                                <MdOutlineMapsHomeWork></MdOutlineMapsHomeWork>
                            </div>
                            <PiDotsThreeBold></PiDotsThreeBold>
                        </div>
                        <p className='text-[12px] text-gray-500'>Daffodil International University</p>
                    </div>
                    <div className='flex justify-between gap-4 py-2'>
                        <div>
                            <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consect adipisicing elit. The quiet morning carried a soft breze acros empty street, where scattered leaves danced without rhythm. A cat stretched lazily near a wooden bench, blinking at the rising sun.Lorem ipsum dolor sit amet consect adipisicing elit.morning carried a soft breze acros empty street, where scattered leaves danced without rhythm.</p>
                            <div className='pt-4 flex items-center gap-1'>
                                <MdLocationOn className='text-[14px] text-gray-500'></MdLocationOn>
                                <p className='text-[12px] text-gray-500'>Daffodil Smart City</p>
                            </div>
                        </div>
                        <div className='border-r'></div>
                        <div className='space-y-4 flex flex-col justify-end'>
                            <div className='flex items-center gap-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <RiMessage3Line></RiMessage3Line>
                                <p className='text-[12px]'>12k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GoShareAndroid></GoShareAndroid>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <LuBookmark></LuBookmark>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='w-6 h-6 object-cover rounded-md' src={profile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-5/12 md:rounded-lg bg-white px-3 mx-auto py-4 my-2'>
                    <div>
                        <div className='flex items-center justify-between pr-7'>
                            <div className='flex items-center gap-2'>
                                <h3 className='font-semibold'>Sifat Hossain</h3>
                                <MdOutlineMapsHomeWork></MdOutlineMapsHomeWork>
                            </div>
                            <PiDotsThreeBold></PiDotsThreeBold>
                        </div>
                        <p className='text-[12px] text-gray-500'>Daffodil International University</p>
                    </div>
                    <div className='flex justify-between gap-4 py-2'>
                        <div>
                            <p className='text-sm md:text-base pb-2'>Lorem ipsum dolor sit amet consect adipisicing elit. </p>
                            <img className='rounded-lg' src={img} alt="" />
                            <div className='pt-4 flex items-center gap-1'>
                                <MdLocationOn className='text-[14px] text-gray-500'></MdLocationOn>
                                <p className='text-[12px] text-gray-500'>Daffodil Smart City</p>
                            </div>
                        </div>
                        <div className='border-r'></div>
                        <div className='space-y-4 flex flex-col justify-end'>
                            <div className='flex items-center gap-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <RiMessage3Line></RiMessage3Line>
                                <p className='text-[12px]'>12k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GoShareAndroid></GoShareAndroid>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <LuBookmark></LuBookmark>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='w-6 h-6 rounded-md' src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-5/12 md:rounded-lg bg-white px-3 mx-auto py-4 my-2'>
                    <div>
                        <div className='flex items-center justify-between pr-7'>
                            <div className='flex items-center gap-2'>
                                <h3 className='font-semibold'>Sifat Hossain</h3>
                                <MdOutlineMapsHomeWork></MdOutlineMapsHomeWork>
                            </div>
                            <PiDotsThreeBold></PiDotsThreeBold>
                        </div>
                        <p className='text-[12px] text-gray-500'>Daffodil International University</p>
                    </div>
                    <div className='flex justify-between gap-4 py-2'>
                        <div>
                            <p className='text-sm md:text-base '>Lorem ipsum dolor sit amet consect adipisicing elit. </p>
                            <div className='pt-4 flex items-center gap-1'>
                                <MdLocationOn className='text-[14px] text-gray-500'></MdLocationOn>
                                <p className='text-[12px] text-gray-500'>Daffodil Smart City</p>
                            </div>
                        </div>
                        <div className='border-r'></div>
                        <div className='space-y-4 flex flex-col justify-end'>
                            <div className='flex items-center gap-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <RiMessage3Line></RiMessage3Line>
                                <p className='text-[12px]'>12k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GoShareAndroid></GoShareAndroid>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <LuBookmark></LuBookmark>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='w-6 h-6 rounded-md' src={profile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-5/12 md:rounded-lg bg-white px-3 mx-auto py-4 my-2'>
                    <div>
                        <div className='flex items-center justify-between pr-7'>
                            <div className='flex items-center gap-2'>
                                <h3 className='font-semibold'>Sifat Hossain</h3>
                                <MdOutlineMapsHomeWork></MdOutlineMapsHomeWork>
                            </div>
                            <PiDotsThreeBold></PiDotsThreeBold>
                        </div>
                        <p className='text-[12px] text-gray-500'>Daffodil International University</p>
                    </div>
                    <div className='flex justify-between gap-4 py-2'>
                        <div>
                            <p className='text-sm md:text-base pb-2'>Lorem ipsum dolor sit amet consect adipisicing elit. </p>
                            <img className='rounded-lg' src={man1} alt="" />
                            <div className='pt-4 flex items-center gap-1'>
                                <MdLocationOn className='text-[14px] text-gray-500'></MdLocationOn>
                                <p className='text-[12px] text-gray-500'>Daffodil Smart City</p>
                            </div>
                        </div>
                        <div className='border-r'></div>
                        <div className='space-y-4 flex flex-col justify-end'>
                            <div className='flex items-center gap-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <RiMessage3Line></RiMessage3Line>
                                <p className='text-[12px]'>12k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GoShareAndroid></GoShareAndroid>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <LuBookmark></LuBookmark>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='w-6 h-6 object-cover rounded-md' src={man1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-5/12 md:rounded-lg bg-white px-3 mx-auto py-4 my-2'>
                    <div>
                        <div className='flex items-center justify-between pr-7'>
                            <div className='flex items-center gap-2'>
                                <h3 className='font-semibold'>Sifat Hossain</h3>
                                <MdOutlineMapsHomeWork></MdOutlineMapsHomeWork>
                            </div>
                            <PiDotsThreeBold></PiDotsThreeBold>
                        </div>
                        <p className='text-[12px] text-gray-500'>Daffodil International University</p>
                    </div>
                    <div className='flex justify-between gap-4 py-2'>
                        <div>
                            <p className='text-sm md:text-base pb-2'>Lorem ipsum dolor sit amet consect adipisicing elit. </p>
                            <img className='rounded-lg' src={woman} alt="" />
                            <div className='pt-4 flex items-center gap-1'>
                                <MdLocationOn className='text-[14px] text-gray-500'></MdLocationOn>
                                <p className='text-[12px] text-gray-500'>Daffodil Smart City</p>
                            </div>
                        </div>
                        <div className='border-r'></div>
                        <div className='space-y-4 flex flex-col justify-end'>
                            <div className='flex items-center gap-1'>
                                <AiOutlineHeart></AiOutlineHeart>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <RiMessage3Line></RiMessage3Line>
                                <p className='text-[12px]'>12k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <GoShareAndroid></GoShareAndroid>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <LuBookmark></LuBookmark>
                                <p className='text-[12px]'>123k</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img className='w-6 h-6 object-cover rounded-md' src={man1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Asepase;