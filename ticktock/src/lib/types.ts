export interface User {
  id: string;
  email: string;
  name: string;
  password?: string;
}

export interface TimesheetEntry {
  id: string;
  date: string;
  projectName: string;
  hours: number;
  description: string;
}

export interface Timesheet {
  id: string;
  weekNumber: number;
  dateRange: string;
  status: 'COMPLETED' | 'INCOMPLETE' | 'MISSING';
  userId: string;
  totalHours: number;
  entries?: TimesheetEntry[];
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface TimesheetFormData {
  projectName: string;
  typeOfWork: string;
  description: string;
  hours: number;
}

export type StatusFilter = 'ALL' | 'COMPLETED' | 'INCOMPLETE' | 'MISSING';
export type DateRangeFilter = 'ALL' | 'LAST_7_DAYS' | 'LAST_30_DAYS' | 'LAST_3_MONTHS';
