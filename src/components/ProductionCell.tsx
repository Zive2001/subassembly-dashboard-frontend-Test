import React from 'react';
import { ProductionCellProps } from '../types/production';
import { getCellColorClass } from '../utils/cellColorUtility';

const ProductionCell: React.FC<ProductionCellProps> = ({ quantity, workcenter }) => {
  const colorClass = getCellColorClass(quantity);
  
  return (
    <div className={`production-cell ${colorClass}`}>
      {quantity === 0 ? '-' : quantity}
    </div>
  );
};

export default ProductionCell;