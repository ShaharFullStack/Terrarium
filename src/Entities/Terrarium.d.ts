export interface TerrariumData {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  size?: string;
  image_url?: string;
  category?: string;
  plants?: string[];
  maintenance_level?: string;
  available?: boolean;
}

export declare class Terrarium {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  image_url: string;
  category: string;
  plants: string[];
  maintenance_level: string;
  available: boolean;

  constructor(data?: TerrariumData);
  static list(filter?: string): Promise<Terrarium[]>;
  static getById(id: number): Promise<Terrarium>;
}
