import React from 'react';

const WorkcenterLegend: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded bg-green-500 mr-2"></div>
        <span className="text-sm text-gray-700">High (≥100)</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded bg-yellow-500 mr-2"></div>
        <span className="text-sm text-gray-700">Medium (40-99)</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded bg-red-500 mr-2"></div>
        <span className="text-sm text-gray-700">Low (&lt;40)</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 rounded bg-gray-300 mr-2"></div>
        <span className="text-sm text-gray-700">No Production</span>
      </div>
    </div>
  );
};

export default WorkcenterLegend;