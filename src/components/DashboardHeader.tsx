import React from 'react';
import { format } from 'date-fns';
import { refreshProductionData } from '../api/productionService';
import { useProductionContext } from '../context/ProductionContext';
import { FiRefreshCw } from 'react-icons/fi';

const DashboardHeader: React.FC = () => {
  const { lastUpdated, setIsLoading } = useProductionContext();
  
  const handleRefresh = async () => {
    try {
      setIsLoading(true);
      await refreshProductionData();
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Production Dashboard</h1>
        <p className="text-gray-500">
          {format(new Date(), 'MMMM dd, yyyy')}
        </p>
      </div>
      
      <div className="flex items-center">
        {lastUpdated && (
          <p className="text-sm text-gray-500 mr-4">
            Last updated: {format(lastUpdated, 'HH:mm:ss')}
          </p>
        )}
        
        <button
          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          onClick={handleRefresh}
        >
          <FiRefreshCw className="mr-2" />
          <span>Refresh Data</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;