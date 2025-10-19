import ContactLocation from "@contactUsPage/components/ContactLocation";
import ContactForm from "@contactUsPage/components/ContactForm";
import ContactInfo from "@contactUsPage/components/ContactInfo";
import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <ContactForm />

      <ContactInfo />

      <ContactLocation />
    </>
  );
};

export default ContactUsPage;
