import axios from 'axios';
import io from 'socket.io-client';
import { Socket } from 'socket.io-client';  // Importing Socket class
import { ProductionData } from '../types/production';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

let socket: ReturnType<typeof io> | null = null;  // Use ReturnType<typeof io> here instead of Socket

export const getProductionData = async (): Promise<ProductionData> => {
  try {
    const response = await axios.get(`${API_URL}/api/production`);
    return response.data;
  } catch (error) {
    console.error('Error fetching production data:', error);
    throw error;
  }
};

export const refreshProductionData = async (): Promise<void> => {
  try {
    await axios.post(`${API_URL}/api/refresh`);
  } catch (error) {
    console.error('Error refreshing production data:', error);
    throw error;
  }
};

export const connectToSocket = (
  onDataReceived: (data: ProductionData) => void
): ReturnType<typeof io> => {  // Use ReturnType<typeof io> as the return type
  if (!socket) {
    socket = io(API_URL);  // Create the socket connection using `io`
    
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });
    
    socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });
  }
  
  socket.on('productionData', onDataReceived);
  
  return socket;
};

export const disconnectFromSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
