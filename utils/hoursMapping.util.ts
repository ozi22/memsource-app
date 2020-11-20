type THours = {
  [key: number]: number;
};
type THoursVerbose = {
  [key: number]: string;
};

export const hours: THours = {
  0: -1,
  1: 4,
  2: 8,
  3: 24,
  4: 72,
  5: 168,
  6: 0
};

export const hoursVerbose: THoursVerbose = {
  0: 'Overdue',
  1: '4 hours',
  2: '8 hours',
  3: '1 day',
  4: '3 days',
  5: 'Week',
  6: 'No limit'
};
