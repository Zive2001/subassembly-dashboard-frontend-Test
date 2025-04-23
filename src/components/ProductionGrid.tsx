import React from 'react';
import { useProductionContext } from '../context/ProductionContext';
import TimeSlotRow from './TimeSlotRow';

const ProductionGrid: React.FC = () => {
  const { productionData, selectedShift, isLoading } = useProductionContext();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!productionData) {
    return (
      <div className="text-center p-8 text-gray-500">
        No production data available
      </div>
    );
  }
  
  const { workcenters, data } = productionData;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="mb-4 grid grid-cols-10 gap-2 ml-64">
        {workcenters.map((workcenter) => (
          <div key={workcenter} className="text-center font-semibold">
            {workcenter}
          </div>
        ))}
      </div>
      
      <div className="space-y-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((slotNumber) => (
          <TimeSlotRow
            key={slotNumber}
            slotNumber={slotNumber}
            data={data[selectedShift][slotNumber-1] || {}}
            workcenters={workcenters}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductionGrid;