import React from 'react';
import { IPatientProps } from '../types/patientType';
import DiagnosisHistoryLevel from './DiagnosisHistoryLevel';
import DiagnosisHistoryStat from './DiagnosisHistoryStat';
import DiagnosticList from './DiagnosticList';
import { useDiagnosisHistory } from '../hooks/useDiagnosisHistory';
import { determineLevel, renderStatusWithIcon } from '../utils/diagnosisUtils';

const DiagnosisHistory: React.FC<IPatientProps> = ({ patient }) => {
  const {
    monthRange,
    handleMonthRangeChange,
    labels,
    systolicValues,
    diastolicValues,
    averageSystolic,
    averageDiastolic,
    latestHistory,
  } = useDiagnosisHistory(patient);

  return (
    <div className='flex flex-col space-y-6'>
      <div className='bg-white shadow-sm rounded-xl p-4 h-[70%]'>
        <h2 className='text-[#072635] text-[24px] font-bold mb-6'>
          Diagnosis History
        </h2>
        <DiagnosisHistoryLevel
          monthRange={monthRange}
          handleMonthRangeChange={handleMonthRangeChange}
          labels={labels}
          systolicValues={systolicValues}
          diastolicValues={diastolicValues}
          determineLevel={determineLevel}
          averageSystolic={averageSystolic}
          averageDiastolic={averageDiastolic}
        />
        <DiagnosisHistoryStat
          latestHistory={latestHistory}
          renderStatusWithIcon={renderStatusWithIcon}
          determineLevel={determineLevel}
        />
      </div>
      <DiagnosticList patient={patient} />
    </div>
  );
};

export default DiagnosisHistory;
