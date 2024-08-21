import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { IErrorMessageProps } from '../../types/patientType';

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-cente text-red-600 rounded-lg'>
      <FaExclamationTriangle size={60} className='mb-4' />
      <h2 className='text-3xl font-semibold mb-2'>Something Went Wrong</h2>
      <p className='text-lg'>{message}</p>
    </div>
  );
};

export default ErrorMessage;
