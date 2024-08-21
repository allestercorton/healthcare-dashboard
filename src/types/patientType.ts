export interface IPatient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    heart_rate?: {
      value: number;
      levels: string;
    };
    respiratory_rate?: {
      value: number;
      levels: string;
    };
    temperature?: {
      value: number;
      levels: string;
    };
  }[];
  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];
  lab_results: string[];
}

export interface IPatientsProps {
  patients: IPatient[];
}

export interface IPatientProps {
  patient: IPatient;
}

export interface IErrorMessageProps {
  message: string;
}

export interface IPatientOnclickProps extends IPatientsProps {
  onPatientClick: (patient: IPatient) => void;
}

export interface IBloodPressureSummaryProps {
  type: string;
  value: number | string;
  level: string;
  color: string;
}

export interface IDiagnosisHistoryLevelProps {
  monthRange: number;
  handleMonthRangeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  labels: string[];
  systolicValues: number[];
  diastolicValues: number[];
  determineLevel: (value: number, average: number) => string;
  averageSystolic: number;
  averageDiastolic: number;
}

export interface IDiagnosisHistoyStatProps {
  latestHistory: {
    respiratory_rate?: {
      value: number;
    };
    temperature?: {
      value: number;
    };
    heart_rate?: {
      value: number;
    };
  };
  renderStatusWithIcon: (status: string) => JSX.Element;
  determineLevel: (value: number, average: number) => string;
}
