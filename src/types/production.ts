export interface ProductionQuantity {
    [workcenter: string]: number;
  }
  
  export interface TimeSlotData {
    [index: number]: ProductionQuantity;
  }
  
  export interface ShiftData {
    Morning: TimeSlotData;
    Evening: TimeSlotData;
  }
  
  export interface ProductionData {
    workcenters: string[];
    data: ShiftData;
  }
  
  export type ShiftType = 'Morning' | 'Evening';
  
  export interface ProductionCellProps {
    quantity: number;
    workcenter: string;
  }
  
  export interface TimeSlotRowProps {
    slotNumber: number;
    data: ProductionQuantity;
    workcenters: string[];
  }