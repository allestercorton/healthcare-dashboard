import React from 'react';
import arrowUp from '../assets/svg/ArrowUp.svg';
import arrowDown from '../assets/svg/ArrowDown.svg';
import { IBloodPressureSummaryProps } from '../types/patientType';

const BloodPressureSummary: React.FC<IBloodPressureSummaryProps> = ({
  type,
  value,
  level,
  color,
}) => (
  <div className='text-[#072635] flex flex-col justify-center items-center lg:items-start space-y-2'>
    <div className='flex flex-row justify-start items-center'>
      <div
        className={`h-[14px] w-[14px] rounded-full border-2 border-[#FFFFFF] ${color}`}
      ></div>
      <p className='text-[14px] font-semibold ml-1'>{type}</p>
    </div>
    <h4 className='text-[26px] lg:text-[22px] font-bold'>{value}</h4>
    <div className='flex items-center'>
      <img
        src={level === 'Higher than Average' ? arrowUp : arrowDown}
        alt={level}
        className='w-[10px] h-[5.48px] mr-1'
      />
      <p className='text-[14px]'>{level}</p>
    </div>
  </div>
);

export default BloodPressureSummary;
