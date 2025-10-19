import ContactLocation from "@contactUs/components/contact-location";
import ContactForm from "@contactUs/components/contact-form";
import ContactInfo from "@contactUs/components/contact-info";
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
