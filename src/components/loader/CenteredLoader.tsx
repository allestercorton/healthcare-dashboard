import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const CenteredLoader: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <ClipLoader color='#3498db' size={70} />
    </div>
  );
};

export default CenteredLoader;
