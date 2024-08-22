import React from 'react';
import { IDiagnosisHistoyStatProps } from '../types/patientType';
import respiratoryIcon from '../assets/svg/respiratory rate.svg';
import temperatureIcon from '../assets/svg/temperature.svg';
import heartRateIcon from '../assets/svg/HeartBPM.svg';

const DiagnosisHistoyStat: React.FC<IDiagnosisHistoyStatProps> = ({
  latestHistory,
  renderStatusWithIcon,
  determineLevel,
}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-[0.9rem]'>
      <div className='p-4 bg-[#E0F3FA] text-[#072635] rounded-xl flex flex-col items-center lg:items-start'>
        <img
          src={respiratoryIcon}
          alt='Respiratory'
          className='w-[96px] h-[96px] mb-5'
        />
        <h3 className='text-[16px] font-semibold'>Respiratory Rate</h3>
        <p className='text-[30px] font-bold'>
          {latestHistory?.respiratory_rate?.value || 'N/A'} bpm
        </p>
        <div className='text-[14px] mt-6'>
          {latestHistory?.respiratory_rate
            ? renderStatusWithIcon(
                determineLevel(
                  latestHistory.respiratory_rate.value,
                  16 // Assuming 16 as the average respiratory rate
                )
              )
            : 'N/A'}
        </div>
      </div>
      <div className='p-4 bg-[#FFE6E9] text-[#072635] rounded-xl flex flex-col items-center lg:items-start'>
        <img
          src={temperatureIcon}
          alt='Temperature'
          className='w-[96px] h-[96px] mb-5'
        />
        <h3 className='text-[16px] font-semibold'>Temperature</h3>
        <p className='text-[30px] font-bold'>
          {latestHistory?.temperature?.value || 'N/A'}°F
        </p>
        <div className='text-[14px] mt-6'>
          {latestHistory?.temperature
            ? renderStatusWithIcon(
                determineLevel(
                  latestHistory.temperature.value,
                  36.6 // Assuming 36.6°C (97.9°F) as the average temperature
                )
              )
            : 'N/A'}
        </div>
      </div>
      <div className='p-4 bg-[#FFE6F1] text-[#072635] rounded-xl flex flex-col items-center lg:items-start'>
        <img
          src={heartRateIcon}
          alt='Heart Rate'
          className='w-[96px] h-[96px] mb-5'
        />
        <h3 className='text-[16px] font-semibold'>Heart Rate</h3>
        <p className='text-[30px] font-bold'>
          {latestHistory?.heart_rate?.value || 'N/A'} bpm
        </p>
        <div className='text-[14px] mt-6'>
          {latestHistory?.heart_rate
            ? renderStatusWithIcon(
                determineLevel(
                  latestHistory.heart_rate.value,
                  75 // Assuming 75 bpm as the average heart rate
                )
              )
            : 'N/A'}
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistoyStat;
