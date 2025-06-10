export interface WorkshopData {
  id?: number;
  title?: string;
  description?: string;
  date?: string;
  time?: string;
  duration?: number;
  max_participants?: number;
  current_participants?: number;
  price_per_person?: number;
  location?: string;
  target_audience?: string;
  includes?: string[];
  requirements?: string;
}

export declare class Workshop {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  max_participants: number;
  current_participants: number;
  price_per_person: number;
  location: string;
  target_audience: string;
  includes: string[];
  requirements?: string;

  constructor(data?: WorkshopData);
  static list(sortBy?: string): Promise<Workshop[]>;
}
