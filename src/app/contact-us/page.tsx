import ContactLocation from "@contactUsPage/components/contact-location";
import ContactForm from "@contactUsPage/components/contact-form";
import ContactInfo from "@contactUsPage/components/contact-info";
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
