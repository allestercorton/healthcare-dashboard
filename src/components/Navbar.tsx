import logo from '../assets/svg/TestLogo.svg';
import homeIcon from '../assets/svg/home_FILL0_wght300_GRAD0_opsz24.svg';
import personIcon from '../assets/svg/group_FILL0_wght300_GRAD0_opsz24.svg';
import birthIcon from '../assets/svg/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import chatIcon from '../assets/svg/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import creditIcon from '../assets/svg/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import profile from '../assets/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png';
import settings from '../assets/svg/settings_FILL0_wght300_GRAD0_opsz24.svg';
import menu from '../assets/svg/more_vert_FILL0_wght300_GRAD0_opsz24.svg';

const Navbar = () => {
  return (
    <div className='w-full h-[72px] bg-white rounded-full flex justify-between items-center p-[18px] shadow-sm'>
      <img
        src={logo}
        alt='Logo'
        onClick={() => window.location.reload()}
        className='w-[170px] h-[45px] cursor-pointer'
      />
      <div className='flex space-x-2 font-semibold text-[14px] text-[#072635]'>
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
      <div className='flex items-center space-x-2'>
        <img
          src={profile}
          alt='Profile'
          className='w-[44px] h-[44px] rounded-full border border-gray-300'
        />
        <div className='hidden md:flex flex-col text-left text-[14px] font-bold pr-2'>
          <p className='font-semibold'>Dr. Jose Simmons</p>
          <p className='font-normal text-neutral-400'>General Practitioner</p>
        </div>
        <div className='w-[1px] h-[44px] bg-[#EDEDED]'></div>
        <img src={settings} alt='Settings' className='w-4 h-4 cursor-pointer' />
        <img src={menu} alt='Menu' className='w-4 h-4 cursor-pointer' />
      </div>
    </div>
  );
};

export default Navbar;
