import { format } from 'date-fns';

export const getCurrentDateFormatted = (): string => {
  return format(new Date(), 'MMMM dd, yyyy');
};

export const getTimeslotLabel = (slotNumber: number, shift: string): string => {
  if (shift === 'Morning') {
    switch (slotNumber) {
      case 1: return '05:30-06:00';
      case 2: return '06:00-07:00';
      case 3: return '07:00-08:00';
      case 4: return '08:00-09:00';
      case 5: return '09:00-10:00';
      case 6: return '10:00-11:00';
      case 7: return '11:00-12:00';
      case 8: return '12:00-13:30';
      default: return '';
    }
  } else {
    switch (slotNumber) {
      case 1: return '13:30-14:00';
      case 2: return '14:00-15:00';
      case 3: return '15:00-16:00';
      case 4: return '16:00-17:00';
      case 5: return '17:00-18:00';
      case 6: return '18:00-19:00';
      case 7: return '19:00-20:00';
      case 8: return '20:00-21:30';
      default: return '';
    }
  }
};