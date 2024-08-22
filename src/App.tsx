import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IPatient } from './types/patientType';
import { fetchPatients } from './utils/fetchPatients';
import ErrorMessage from './components/error/ErrorMessage';
import CenteredLoader from './components/loader/CenteredLoader';
import Navbar from './components/Navbar';
import Patients from './components/Patients';
import DiagnosisHistory from './components/DiagnosisHistory';
import PatientDetails from './components/PatientDetails';

const App: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState<IPatient | null>(null);

  const { data, error, isLoading } = useQuery<IPatient[]>({
    queryKey: ['patients'],
    queryFn: fetchPatients,
  });

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedPatient(data[3] || null);
    }
  }, [data]);

  if (error) {
    return <ErrorMessage message={(error as Error).message} />;
  }

  if (isLoading) {
    return <CenteredLoader />;
  }

  const isDataLoading = isLoading || !data || !selectedPatient;

  return (
    <div className='min-h-screen min-w-screen bg-[#F6F7F8] p-5'>
      {!isDataLoading && <Navbar />}
      <div className='w-full flex flex-col space-y-7 xl:space-y-0 xl:flex-row xl:space-x-7 mt-6'>
        <div className='w-full xl:w-1/4'>
          {!isDataLoading && data && (
            <Patients patients={data} onPatientClick={setSelectedPatient} />
          )}
        </div>
        <div className='w-full xl:w-1/2'>
          {!isDataLoading && selectedPatient && (
            <DiagnosisHistory patient={selectedPatient} />
          )}
        </div>
        <div className='w-full xl:w-1/4'>
          {!isDataLoading && selectedPatient && (
            <PatientDetails patient={selectedPatient} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
