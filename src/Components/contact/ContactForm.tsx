import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CheckCircle, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferred_contact: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
  submitSuccess: boolean;
}

export default function ContactForm({ onSubmit, isSubmitting, submitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferred_contact: "אימייל"
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (submitSuccess) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            תודה שפניתם אלינו! 💚
          </h3>
          <p className="text-green-700 text-lg">
            הודעתכם התקבלה בהצלחה ואני אחזור אליכם בהקדם האפשרי.
            בינתיים, תוכלו לעקוב אחרי ברשתות החברתיות לעדכונים ותמונות.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900">
          בואו נתחיל לתכנן
        </CardTitle>
        <p className="text-gray-600 text-lg">
          מלאו את הפרטים ואני אחזור אליכם בהקדם
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-900 font-medium">שם מלא *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="איך קוראים לכם?"
                required
                className="border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900 font-medium">אימייל *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                required
                className="border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-900 font-medium">טלפון</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="050-1234567"
                className="border-gray-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="preferred_contact" className="text-gray-900 font-medium">איך נחזור אליכם?</Label>
              <Select value={formData.preferred_contact} onValueChange={(value) => handleChange("preferred_contact", value)}>
                <SelectTrigger className="border-gray-200 focus:border-green-500 focus:ring-green-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="אימייל">אימייל</SelectItem>
                  <SelectItem value="טלפון">טלפון</SelectItem>
                  <SelectItem value="וואטסאפ">וואטסאפ</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-gray-900 font-medium">נושא הפנייה *</Label>
            <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)} required>
              <SelectTrigger className="border-gray-200 focus:border-green-500 focus:ring-green-500">
                <SelectValue placeholder="על מה תרצו לדבר?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="סדנה">רוצה להירשם לסדנה</SelectItem>
                <SelectItem value="טרריום מותאם">מעוניין/ת בטרריום מותאם אישית</SelectItem>
                <SelectItem value="אירוע">ארגון סדנה לאירוע/קבוצה</SelectItem>
                <SelectItem value="שאלה כללית">שאלה כללית</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-900 font-medium">ההודעה שלכם *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="ספרו לי על הרעיון שלכם, השאלות או כל מה שחשוב לכם..."
              required
              rows={5}
              className="border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                שולח הודעה...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="w-5 h-5 ml-2" />
                שלחו הודעה
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}