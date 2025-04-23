import React from 'react';
import { ProductionProvider } from './context/ProductionContext';
import { useProductionData } from './hooks/useProductionData';
import DashboardHeader from './components/DashboardHeader';
import ShiftSelector from './components/ShiftSelector';
import ProductionGrid from './components/ProductionGrid';
import WorkcenterLegend from './components/WorkcenterLegend';

const Dashboard: React.FC = () => {
  useProductionData();
  
  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        <ShiftSelector />
        <WorkcenterLegend />
        <ProductionGrid />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ProductionProvider>
      <Dashboard />
    </ProductionProvider>
  );
};

export default App;