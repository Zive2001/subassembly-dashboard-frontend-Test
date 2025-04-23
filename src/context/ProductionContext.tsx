import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProductionData, ShiftType } from '../types/production';

interface ProductionContextType {
  productionData: ProductionData | null;
  setProductionData: (data: ProductionData) => void;
  selectedShift: ShiftType;
  setSelectedShift: (shift: ShiftType) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  lastUpdated: Date | null;
  setLastUpdated: (date: Date) => void;
}

const ProductionContext = createContext<ProductionContextType | undefined>(undefined);

export const ProductionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productionData, setProductionData] = useState<ProductionData | null>(null);
  const [selectedShift, setSelectedShift] = useState<ShiftType>('Morning');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  return (
    <ProductionContext.Provider
      value={{
        productionData,
        setProductionData,
        selectedShift,
        setSelectedShift,
        isLoading,
        setIsLoading,
        lastUpdated,
        setLastUpdated
      }}
    >
      {children}
    </ProductionContext.Provider>
  );
};

export const useProductionContext = (): ProductionContextType => {
  const context = useContext(ProductionContext);
  if (context === undefined) {
    throw new Error('useProductionContext must be used within a ProductionProvider');
  }
  return context;
};