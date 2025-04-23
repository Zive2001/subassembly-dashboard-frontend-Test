export const getCellColorClass = (quantity: number): string => {
    if (quantity === 0) return 'cell-zero';
    if (quantity < 40) return 'cell-low';
    if (quantity < 100) return 'cell-medium';
    return 'cell-high';
  };