export class Workshop {
  constructor(data = {}) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.date = data.date;
    this.time = data.time;
    this.duration = data.duration;
    this.max_participants = data.max_participants;
    this.current_participants = data.current_participants || 0;
    this.price_per_person = data.price_per_person;
    this.location = data.location;
    this.target_audience = data.target_audience;
    this.includes = data.includes || [];
    this.requirements = data.requirements;
  }

  static async list(sortBy = 'date') {
    // Mock data for demonstration - replace with actual API call
    return [
      new Workshop({
        id: 1,
        title: "סדנת טרריומים למשפחות",
        description: "סדנה מרתקת ליצירת טרריומים עם כל המשפחה",
        date: "2025-06-15",
        time: "10:00",
        duration: 180,
        max_participants: 8,
        current_participants: 5,
        price_per_person: 85,
        location: "סטודיו ליאורה, תל אביב",
        target_audience: "משפחות",
        includes: ["כל החומרים", "כלי זכוכית", "צמחים", "משקה חם"],
        requirements: "מתאים לגילאי 6+"
      }),
      new Workshop({
        id: 2,
        title: "סדנה לזוגות - ערב רומנטי",
        description: "ערב יצירה רומנטי ליצירת טרריומים זוגיים",
        date: "2025-06-20",
        time: "19:00",
        duration: 150,
        max_participants: 6,
        current_participants: 2,
        price_per_person: 95,
        location: "סטודיו ליאורה, תל אביב",
        target_audience: "זוגות",
        includes: ["כל החומרים", "כוס יין", "נשנושים", "מוזיקה נעימה"],
        requirements: "לזוגות בלבד"
      })
    ];
  }
}
