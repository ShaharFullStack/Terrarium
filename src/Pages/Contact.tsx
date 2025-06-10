import React, { useState } from "react";
import { ContactRequest } from "../Entities/ContactRequest";
import ContactForm from "../Components/contact/ContactForm";
import ContactInfo from "../Components/contact/ContactInfo";
import ContactHero from "../Components/contact/ContactHero";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferred_contact: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      await ContactRequest.create(formData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm 
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
          />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}