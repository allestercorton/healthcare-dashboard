import React from 'react';
import DiagnosisHistoryGraph from './DiagnosisHistoryGraph';
import BloodPressureSummary from './BloodPressureSummary';
import { IDiagnosisHistoryLevelProps } from '../types/patientType';

const DiagnosisHistoryLevel: React.FC<IDiagnosisHistoryLevelProps> = ({
  monthRange,
  handleMonthRangeChange,
  labels,
  systolicValues,
  diastolicValues,
  determineLevel,
  averageSystolic,
  averageDiastolic,
}) => {
  return (
    <div className='bg-[#F4F0FE] rounded-xl flex flex-row space-x-4 p-2'>
      <div className='flex-1 w-1/3'>
        <div className='flex flex-row justify-between mb-4'>
          <div>
            <h2 className='text-[#072635] text-[18px] font-bold'>
              Blood Pressure
            </h2>
          </div>
          <div className='flex items-center'>
            <p className='text-[14px] text-gray-600'>Last</p>
            <select
              value={monthRange}
              onChange={handleMonthRangeChange}
              className='text-[14px] text-gray-600 bg-transparent border-none outline-none cursor-pointer'
            >
              {[6, 12, 18, 24].map((range) => (
                <option key={range} value={range}>
                  {range} Months
                </option>
              ))}
            </select>
          </div>
        </div>
        <DiagnosisHistoryGraph
          labels={labels}
          systolicValues={systolicValues}
          diastolicValues={diastolicValues}
        />
      </div>
      <div className='flex-none w-1/4'>
        <div className='flex flex-col space-y-4 mb-4'>
          <BloodPressureSummary
            type='Systolic'
            value={systolicValues[systolicValues.length - 1]}
            level={determineLevel(
              systolicValues[systolicValues.length - 1],
              averageSystolic
            )}
            color='bg-blue-500'
          />
          <div className='w-full border-t-2 border-gray-300 my-6'></div>
          <BloodPressureSummary
            type='Diastolic'
            value={diastolicValues[diastolicValues.length - 1]}
            level={determineLevel(
              diastolicValues[diastolicValues.length - 1],
              averageDiastolic
            )}
            color='bg-red-500'
          />
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistoryLevel;
