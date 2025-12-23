export interface ProductSpec {
  category: string;
  items: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  installationCost: number;
  highlight: string;
  description: string;
  specs: ProductSpec[];
  supportedDevices: string[];
  category: 'hybrid' | 'portable' | 'panels';
  imageUrl?: string;
}

export interface ShippingRate {
  region: string;
  price: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum ConnectionStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}