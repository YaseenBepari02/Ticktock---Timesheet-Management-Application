export const mockUsers = [
  {
    id: '1',
    email: 'john.doe@example.com',
    password: 'password123',
    name: 'John Doe',
  },
  {
    id: '2',
    email: 'admin@ticktock.com',
    password: 'admin123',
    name: 'Admin User',
  },
];

export const mockTimesheets = [
  {
    id: '1',
    weekNumber: 1,
    dateRange: '1 - 5 January, 2024',
    status: 'COMPLETED',
    userId: '1',
    totalHours: 40,
    entries: [
      {
        id: 'e1',
        date: '2024-01-21',
        projectName: 'Homepage Development',
        hours: 8,
        description: 'Frontend work',
      },
    ],
  },
  {
    id: '2',
    weekNumber: 2,
    dateRange: '8 - 12 January, 2024',
    status: 'COMPLETED',
    userId: '1',
    totalHours: 40,
  },
  {
    id: '3',
    weekNumber: 3,
    dateRange: '15 - 19 January, 2024',
    status: 'INCOMPLETE',
    userId: '1',
    totalHours: 24,
  },
  {
    id: '4',
    weekNumber: 4,
    dateRange: '22 - 26 January, 2024',
    status: 'COMPLETED',
    userId: '1',
    totalHours: 40,
  },
  {
    id: '5',
    weekNumber: 5,
    dateRange: '28 January - 1 February, 2024',
    status: 'MISSING',
    userId: '1',
    totalHours: 0,
  },
];
