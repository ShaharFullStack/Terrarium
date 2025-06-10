export class Terrarium {
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.image_url = data.image_url;
    this.price = data.price;
    this.size = data.size;
    this.category = data.category;
    this.plants = data.plants || [];
    this.maintenance_level = data.maintenance_level;
    this.available = data.available !== false;
  }

  static async list() {
    // Mock data for demonstration - replace with actual API call
    return [
      new Terrarium({
        id: 1,
        name: "גן עדן מיניאטורי",
        description: "טרריום קסום עם צמחים ירוקים ודמויות פנטזיה",
        image_url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8f498b717_WhatsAppImage2025-06-09at172603.jpg",
        price: 120,
        size: "בינוני",
        category: "פנטזיה",
        plants: ["סקולנט", "פרח קטן", "עכבריש"],
        maintenance_level: "נמוך",
        available: true
      }),
      new Terrarium({
        id: 2,
        name: "יער קסום",
        description: "טרריום עם נוף יער מיניאטורי ובתים קטנים",
        image_url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/293fc4941_WhatsAppImage2025-06-09at172604.jpg",
        price: 95,
        size: "קטן",
        category: "פנטזיה",
        plants: ["טחב", "סקולנט קטן"],
        maintenance_level: "נמוך",
        available: true
      })
    ];
  }
}
