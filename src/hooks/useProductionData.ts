import { useEffect } from 'react';
import { 
  getProductionData, 
  connectToSocket, 
  disconnectFromSocket 
} from '../api/productionService';
import { useProductionContext } from '../context/ProductionContext';

export const useProductionData = () => {
  const { 
    setProductionData, 
    setIsLoading,
    setLastUpdated 
  } = useProductionContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getProductionData();
        setProductionData(data);
        setLastUpdated(new Date());
      } catch (error) {
        console.error('Error fetching production data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Set up real-time updates
    const socket = connectToSocket((data) => {
      setProductionData(data);
      setLastUpdated(new Date());
    });

    return () => {
      disconnectFromSocket();
    };
  }, [setProductionData, setIsLoading, setLastUpdated]);
};