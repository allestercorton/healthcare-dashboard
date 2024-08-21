import React from 'react';
import { IPatientProps } from '../types/patientType';
import LabResults from './LabResults';
import birthIcon from '../assets/svg/BirthIcon.svg';
import femaleIcon from '../assets/svg/FemaleIcon.svg';
import phoneIcon from '../assets/svg/PhoneIcon.svg';
import insuranceIcon from '../assets/svg/InsuranceIcon.svg';

const PatientDetails: React.FC<IPatientProps> = ({ patient }) => {
  const formattedDateOfBirth = patient
    ? new Date(patient.date_of_birth).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'N/A';

  return (
    <div className='flex flex-col space-y-6'>
      <div className='bg-white shadow-sm rounded-xl py-6 px-4 flex-1'>
        <div className='flex flex-col justify-center items-center space-y-4 mb-6'>
          <img
            src={patient.profile_picture}
            alt='Profile'
            className='w-[200px] h-[200px]'
          />
          <h2 className='text-[#072635] text-[24px] font-bold'>
            {patient ? patient.name : 'N/A'}
          </h2>
        </div>
        <div className='space-y-4'>
          <div className='flex items-center space-x-3 mb-2'>
            <img
              src={birthIcon}
              alt='Birth Icon'
              className='w-[42px] h-[42px]'
            />
            <div>
              <p className='text-[14px]'>Date Of Birth</p>
              <p className='text-[14px] font-semibold'>
                {formattedDateOfBirth}
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-3 mb-2'>
            <img
              src={femaleIcon}
              alt='Gender Icon'
              className='w-[42px] h-[42px]'
            />
            <div>
              <p className='text-[14px]'>Gender</p>
              <p className='text-[14px] font-semibold'>
                {patient ? patient.gender : 'N/A'}
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-3 mb-2'>
            <img
              src={phoneIcon}
              alt='Phone Icon'
              className='w-[42px] h-[42px]'
            />
            <div>
              <p className='text-[14px]'>Phone Number</p>
              <p className='text-[14px] font-semibold'>
                {patient ? patient.phone_number : 'N/A'}
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-3 mb-2'>
            <img
              src={phoneIcon}
              alt='Emergency Icon'
              className='w-[42px] h-[42px]'
            />
            <div>
              <p className='text-[14px]'>Emergency Contacts</p>
              <p className='text-[14px] font-semibold'>
                {patient ? patient.emergency_contact : 'N/A'}
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-3 mb-2'>
            <img
              src={insuranceIcon}
              alt='Insurance Icon'
              className='w-[42px] h-[42px]'
            />
            <div>
              <p className='text-[14px]'>Insurance Provider</p>
              <p className='text-[14px] font-semibold'>
                {patient ? patient.insurance_type : 'N/A'}
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <button className='py-2 px-6 bg-[#01F0D0] text-[#072635] font-semibold rounded-full'>
            Show All Information
          </button>
        </div>
      </div>
      <div className='bg-white shadow-sm rounded-xl p-4 flex-none'>
        <LabResults patient={patient} />
      </div>
    </div>
  );
};

export default PatientDetails;
