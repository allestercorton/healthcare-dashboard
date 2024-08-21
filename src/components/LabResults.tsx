import React from 'react';
import { IPatientProps } from '../types/patientType';
import downloadIcon from '../assets/svg/download_FILL0_wght300_GRAD0_opsz24 (1).svg';

const LabResults: React.FC<IPatientProps> = ({ patient }) => {
  return (
    <div className='max-h-[13.9rem] overflow-y-auto custom-scrollbar text-[#072635]'>
      <h2 className='text-[24px] font-bold mb-6'>Lab Results</h2>
      <ul>
        {patient.lab_results.length > 0 ? (
          patient.lab_results.map((result, index) => (
            <li
              key={index}
              className='flex justify-between items-center hover:bg-[#F6F7F8] px-2 py-4'
            >
              <span className='text-[14px]'>{result}</span>
              <img
                src={downloadIcon}
                alt='Download'
                className='w-[20px] h-[20px] rounded cursor-pointer'
              />
            </li>
          ))
        ) : (
          <p>No lab results available.</p>
        )}
      </ul>
    </div>
  );
};

export default LabResults;
