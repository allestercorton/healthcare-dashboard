import { useState } from 'react';
import { IPatient } from '../types/patientType';

export const useDiagnosisHistory = (patient: IPatient) => {
  const [monthRange, setMonthRange] = useState(6);

  const recentHistory = patient.diagnosis_history.slice(-monthRange);

  const labels = recentHistory.map((history) => {
    const date = new Date(`${history.year}-${history.month}-01`);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  });

  const systolicValues = recentHistory.map(
    (history) => history.blood_pressure.systolic.value
  );
  const diastolicValues = recentHistory.map(
    (history) => history.blood_pressure.diastolic.value
  );

  const averageSystolic =
    systolicValues.reduce((a, b) => a + b, 0) / systolicValues.length;
  const averageDiastolic =
    diastolicValues.reduce((a, b) => a + b, 0) / diastolicValues.length;

  const latestHistory =
    patient.diagnosis_history[patient.diagnosis_history.length - 1];

  const handleMonthRangeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setMonthRange(parseInt(event.target.value, 10));
  };

  return {
    monthRange,
    setMonthRange,
    recentHistory,
    labels,
    systolicValues,
    diastolicValues,
    averageSystolic,
    averageDiastolic,
    latestHistory,
    handleMonthRangeChange,
  };
};
