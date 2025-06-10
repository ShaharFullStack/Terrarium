export class ContactRequest {
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.subject = data.subject;
    this.message = data.message;
    this.preferred_contact = data.preferred_contact;
    this.status = data.status || "חדש";
    this.created_at = data.created_at || new Date().toISOString();
  }

  static async create(data) {
    // Mock implementation - replace with actual API call
    console.log("Creating contact request:", data);
    const request = new ContactRequest(data);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return request;
  }

  static async list() {
    // Mock implementation - replace with actual API call
    return [];
  }
}
