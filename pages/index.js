import {
  HiArrowSmallUp,
  HiArrowsPointingOut,
  HiOutlineXMark,
} from 'react-icons/hi2';
import {
  FaArrowRightArrowLeft,
  FaArrowUp,
  FaArrowUpLong,
  FaMagnifyingGlass,
  FaRegCompass,
} from 'react-icons/fa6';

import { GrLocation } from 'react-icons/gr';

import { PiGearSixBold, PiPlusMinusBold } from 'react-icons/pi';
import { BiVolumeMute } from 'react-icons/bi';

import Image from 'next/image';

const Icon = ({ children, className }) => (
  <p
    className={`flex aspect-square h-11 items-center justify-center rounded-full bg-slate-50 p-2 ${className} hover:ring hover:ring-offset-blue-700 cursor-pointer`}
  >
    {children || 'IC'}
  </p>
);

const BottomETANav = () => (
  <div className='h-32 w-full rounded-lg bg-slate-50'>
    {/* Top section */}
    <div className='flex h-[60%] w-full items-center gap-4 border-b-[1px] border-b-slate-300 px-4'>
      <Icon className='border-2'>
        <HiOutlineXMark className='h-8 w-8' />
      </Icon>
      {/* Eta & Time */}
      <div>
        <div className='flex gap-1'>
          <p className='font-semibold text-green-800'>2 hr 13 min</p>
        </div>
        <div className='flex gap-1 text-slate-500 font-normal'>
          <p className=''>133 mi</p>
          <p className=''>•</p>
          <p>7:22 AM</p>
        </div>
      </div>
    </div>
    {/* Bottom section */}
    <div className='flex h-[40%] items-center justify-around '>
      <Icon className='block md:hidden h-8 p-0'>
        <PiGearSixBold className='w-6 h-6' />
      </Icon>
      <Icon className='h-8 p-0'>
        <FaArrowRightArrowLeft className='h-5 w-5' />
      </Icon>
      <Icon className='h-8 p-0'>
        <FaMagnifyingGlass className='h-5 w-5' />
      </Icon>
      <Icon className='h-8 p-0'>
        <GrLocation className='h-7 w-7' />
      </Icon>
    </div>
  </div>
);

const GreenNavTop = () => (
  <div className='h-14 w-full rounded-lg bg-green-700 items-center flex px-4 text-white leading-5 font-semibold'>
    <FaArrowUp className='h-10 w-10' />
    <div>
      <p>2 mi</p>
      <p>Interstate 5 N</p>
    </div>
  </div>
);

const page = () => {
  return (
    <div className='flex h-96 w-full  text-black relative '>
      <Image
        src={'/images/mapImg.png'}
        className='absolute w-full h-full -z-40'
        layout='fill'
        objectFit='cover'
      />
      {/* Side icons */}
      <div className='h-full w-auto flex-col items-center justify-between gap-2  px-2 py-2 hidden md:flex'>
        <div className='space-y-1'>
          <Icon>
            <PiGearSixBold className='w-5 h-5' />
          </Icon>
          <Icon>
            <FaRegCompass className='w-5 h-5' />
          </Icon>
          <Icon>
            <BiVolumeMute className='w-5 h-5' />
          </Icon>
        </div>
        <div className='space-y-1'>
          <Icon>
            <PiPlusMinusBold className='w-5 h-5' />
          </Icon>
          <Icon>
            <HiArrowsPointingOut className='w-5 h-5' />
          </Icon>
        </div>
      </div>
      {/* Middle section */}
      <div className='flex  md:max-w-[350px] flex-grow flex-col justify-between  py-4  px-2 max-w-[250px]'>
        <GreenNavTop />
        <BottomETANav />
      </div>
      {/* Speed & logo */}
      <div className='w-14 flex-grow items-end justify-end p-4 flex'>
        {/* Speed */}
        <div className='flex h-12 w-10 f rounded-lg bg-slate-50  font-bold p-1'>
          <div className='rounded-lg border-4 h-full w-full border-black flex flex-col items-center justify-center'>
            <p className='inline-block m-0'>55</p>
            <p className='inline-block m-[-4px] text-[10px] mb-1'>MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
