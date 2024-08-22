import React, { useState } from 'react';
import logo from '../assets/svg/TestLogo.svg';
import homeIcon from '../assets/svg/home_FILL0_wght300_GRAD0_opsz24.svg';
import personIcon from '../assets/svg/group_FILL0_wght300_GRAD0_opsz24.svg';
import birthIcon from '../assets/svg/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import chatIcon from '../assets/svg/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import creditIcon from '../assets/svg/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import profile from '../assets/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png';
import settings from '../assets/svg/settings_FILL0_wght300_GRAD0_opsz24.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full h-[60px] lg:h-[72px] bg-white rounded-full flex justify-between items-center p-[18px] shadow-sm'>
      {/* Logo */}
      <img
        src={logo}
        alt='Logo'
        onClick={() => window.location.reload()}
        className='w-[140px] xl:w-[170px] h-[45px] xl:h-[45px] cursor-pointer'
      />

      {/* Nav Links */}
      <div className='hidden xl:flex space-x-2 font-semibold text-[14px] text-[#072635]'>
        <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
          <img src={homeIcon} alt='Overview' className='w-[15px] h-[17px]' />
          <span className='hidden md:inline text-[14px]'>Overview</span>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
          <img src={personIcon} alt='Patients' className='w-[19px] h-[19px]' />
          <span className='hidden md:inline text-[14px]'>Patients</span>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
          <img src={birthIcon} alt='Schedule' className='w-[15px] h-[17px]' />
          <span className='hidden md:inline text-[14px]'>Schedule</span>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
          <img src={chatIcon} alt='Message' className='w-[15px] h-[17px]' />
          <span className='hidden md:inline text-[14px]'>Message</span>
        </div>
        <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
          <img
            src={creditIcon}
            alt='Transactions'
            className='w-[15px] h-[17px]'
          />
          <span className='hidden md:inline text-[14px]'>Transactions</span>
        </div>
      </div>

      {/* Profile and Settings */}
      <div className='flex items-center space-x-2'>
        <img
          src={profile}
          alt='Profile'
          className='w-[44px] h-[44px] rounded-full border border-gray-300'
        />
        <div className='hidden xl:flex flex-col text-left text-[14px] font-bold pr-2'>
          <p className='font-semibold'>Dr. Jose Simmons</p>
          <p className='font-normal text-neutral-400'>General Practitioner</p>
        </div>
        <div className='w-[1px] h-[44px] bg-[#EDEDED]'></div>
        <img
          src={settings}
          alt='Settings'
          className='hidden w-4 h-4 cursor-pointer xl:block'
        />
        <button
          className='xl:hidden flex items-center'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className='w-6 h-6 text-[#072635]'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-[94px] right-0 w-full bg-white shadow-lg rounded-b-lg xl:hidden'>
          <div className='flex flex-col space-y-2 p-4'>
            <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
              <img
                src={homeIcon}
                alt='Overview'
                className='w-[15px] h-[17px]'
              />
              <span className='text-[14px]'>Overview</span>
            </div>
            <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
              <img
                src={personIcon}
                alt='Patients'
                className='w-[19px] h-[19px]'
              />
              <span className='text-[14px]'>Patients</span>
            </div>
            <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
              <img
                src={birthIcon}
                alt='Schedule'
                className='w-[15px] h-[17px]'
              />
              <span className='text-[14px]'>Schedule</span>
            </div>
            <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
              <img src={chatIcon} alt='Message' className='w-[15px] h-[17px]' />
              <span className='text-[14px]'>Message</span>
            </div>
            <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
              <img
                src={creditIcon}
                alt='Transactions'
                className='w-[15px] h-[17px]'
              />
              <span className='text-[14px]'>Transactions</span>
            </div>
            <div className='flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-full hover:bg-[#01F0D0] transition-all duration-300'>
              <img
                src={settings}
                alt='Settings'
                className='w-[15px] h-[17px]'
              />
              <span className='text-[14px]'>Settings</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
