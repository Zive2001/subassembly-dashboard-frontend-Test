import React from 'react';
import { useProductionContext } from '../context/ProductionContext';
import { ShiftType } from '../types/production';

const ShiftSelector: React.FC = () => {
  const { selectedShift, setSelectedShift } = useProductionContext();
  
  const handleShiftChange = (shift: ShiftType) => {
    setSelectedShift(shift);
  };
  
  return (
    <div className="flex space-x-4 mb-6">
      <button
        className={`px-6 py-2 rounded-full font-medium ${
          selectedShift === 'Morning'
            ? 'bg-primary-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => handleShiftChange('Morning')}
      >
        Morning Shift
      </button>
      <button
        className={`px-6 py-2 rounded-full font-medium ${
          selectedShift === 'Evening'
            ? 'bg-primary-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
        onClick={() => handleShiftChange('Evening')}
      >
        Evening Shift
      </button>
    </div>
  );
};

export default ShiftSelector;