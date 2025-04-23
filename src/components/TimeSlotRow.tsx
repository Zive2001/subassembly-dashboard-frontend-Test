import React from 'react';
import { TimeSlotRowProps } from '../types/production';
import ProductionCell from './ProductionCell';
import { getTimeslotLabel } from '../utils/dateTimeUtility';
import { useProductionContext } from '../context/ProductionContext';

const TimeSlotRow: React.FC<TimeSlotRowProps> = ({ slotNumber, data, workcenters }) => {
  const { selectedShift } = useProductionContext();
  
  return (
    <div className="time-slot-row">
      <div className="w-24 font-bold text-gray-700 mr-2">
        {slotNumber}.
      </div>
      <div className="w-40 text-sm text-gray-500">
        {getTimeslotLabel(slotNumber, selectedShift)}
      </div>
      <div className="grid grid-cols-10 gap-2 flex-1">
        {workcenters.map((workcenter) => (
          <ProductionCell
            key={workcenter}
            quantity={data[workcenter] || 0}
            workcenter={workcenter}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSlotRow;