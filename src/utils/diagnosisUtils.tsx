import arrowUp from '../assets/svg/ArrowUp.svg';
import arrowDown from '../assets/svg/ArrowDown.svg';

export const determineLevel = (value: number, average: number): string => {
  if (value > average) {
    return 'Higher than Average';
  } else if (value < average) {
    return 'Lower than Average';
  }
  return 'Normal';
};

export const renderStatusWithIcon = (status: string): JSX.Element => {
  let icon: string | null = null;

  if (status === 'Higher than Average') {
    icon = arrowUp;
  } else if (status === 'Lower than Average') {
    icon = arrowDown;
  }

  return (
    <div className='flex items-center'>
      {icon && (
        <img src={icon} alt={status} className='w-[10px] h-[5.48px] mr-1' />
      )}
      <span>{status}</span>
    </div>
  );
};
