import React from "react";
import { useRef } from "react";
const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();

  const submitContactUsHandler = async (event) => {
    event.preventDefault();

    const userDetails = {
      name: nameRef.current.value,
      phoneNumber: numberRef.current.value,
      email: emailRef.current.value,
    };

    console.log(userDetails);

    const response = await fetch(
      "https://ecommerce-app-37f9b-default-rtdb.firebaseio.com/userData.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    nameRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <form
      onSubmit={submitContactUsHandler}
      className="flex flex-col items-center content-box p-8 py-10 gap-2"
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          ref={nameRef}
          className="border border-black h-6 rounded-lg px-2 "
          id="name"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          ref={emailRef}
          className="border h-6 rounded-lg border-black px-2 "
          id="email"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="phoneNo">Phone Number:</label>
        <input
          ref={numberRef}
          className="border h-6 rounded-lg border-black px-2 "
          id="phoneNo"
        />
      </div>

      <button
        type="submit"
        className="text-lg mt-4 bg-black text-white px-3 rounded-lg"
      >
        Contact Us
      </button>
    </form>
  );
};

export default ContactForm;
