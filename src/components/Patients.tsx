import React, { useState } from 'react';
import { IPatientOnclickProps } from '../types/patientType';
import searchIcon from '../assets/svg/search_FILL0_wght300_GRAD0_opsz24.svg';
import settingsIcon from '../assets/svg/more_horiz_FILL0_wght300_GRAD0_opsz24.svg';

const Patients: React.FC<IPatientOnclickProps> = ({
  patients,
  onPatientClick,
}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      setSearchTerm('');
    }
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-white shadow-sm rounded-xl py-4 pr-1'>
      <div className='flex flex-row justify-between items-center px-4 mb-4'>
        <h2 className='text-[#072635] text-[24px] font-bold'>Patients</h2>
        <img
          src={searchIcon}
          alt='Search'
          className='h-4 w-4 cursor-pointer'
          onClick={toggleSearch}
        />
      </div>
      {searchVisible && (
        <div className='px-4 mb-4'>
          <input
            type='search'
            name='search'
            placeholder='Search by name...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='w-full py-2 px-3 border rounded-lg'
          />
        </div>
      )}
      <div className='max-h-[54rem] overflow-y-auto custom-scrollbar pr-1'>
        {filteredPatients.map((patient, index) => (
          <div
            key={index}
            className='w-full flex flex-row justify-between items-center hover:bg-[#D8FCF7] py-3 px-4 cursor-pointer'
            onClick={() => onPatientClick(patient)}
          >
            <div className='flex flex-row justify-between items-center space-x-2'>
              <img
                src={patient.profile_picture}
                alt='Profile'
                className='w-[48px] h-[48px] rounded-full border'
              />
              <div className='text-left text-[14px]'>
                <p className='font-semibold text-[#072635]'>{patient.name}</p>
                <p className='font-normal text-[#707070]'>
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <img
              src={settingsIcon}
              alt='Settings'
              className='w-[18px] h-[3.71px] cursor-pointer'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;
