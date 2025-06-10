export interface ContactRequestData {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  preferred_contact?: string;
  created_at?: string;
  status?: string;
}

export declare class ContactRequest {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferred_contact: string;
  created_at: string;
  status: string;

  constructor(data?: ContactRequestData);
  static create(data: ContactRequestData): Promise<ContactRequest>;
  static list(): Promise<ContactRequest[]>;
  save(): Promise<ContactRequest>;
}
