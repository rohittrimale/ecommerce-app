import React from "react";
import ContactForm from "./ContactForm";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-xl font-metal-mania text-center mb-8 font-semibold">
        Contact Us
      </div>
      <div className=" rounded-xl bg-teal-500 p-4 flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
