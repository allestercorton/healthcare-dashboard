import React from 'react';
import { IPatientProps } from '../types/patientType';

const PatientsDiagnosticList: React.FC<IPatientProps> = ({ patient }) => {
  return (
    <div className='bg-white shadow-sm rounded-xl p-4 h-30%'>
      <div className='max-h-[15rem] overflow-y-auto custom-scrollbar'>
        <h2 className='text-[#072635] text-[24px] font-bold mb-6'>
          Diagnosis List
        </h2>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white shadow-md rounded-lg text-[14px]'>
            <thead className='bg-[#F6F7F8]'>
              <tr>
                <th className='text-left p-3 text-[#072635]'>
                  Problem/Diagnosis
                </th>
                <th className='text-left p-3 text-[#072635]'>Description</th>
                <th className='text-left p-3 text-[#072635]'>Status</th>
              </tr>
            </thead>
            <tbody>
              {patient.diagnostic_list.length > 0 ? (
                patient.diagnostic_list.map((diagnosis, index) => (
                  <tr key={index} className='border-t'>
                    <td className='p-3 text-[#072635]'>{diagnosis.name}</td>
                    <td className='p-3 text-[#072635]'>
                      {diagnosis.description}
                    </td>
                    <td className='p-3 text-[#072635]'>{diagnosis.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className='p-4 text-center text-gray-600'>
                    No diagnosis history available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientsDiagnosticList;
