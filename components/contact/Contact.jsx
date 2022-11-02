import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useRef } from "react";

const Contact = ({ contact }) => {
  const form = useRef();
  // form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // handle Sumbitted form
  const handleSubmit = (e) => {
    e.preventDefault();
    // send to email
    let templateParams = {
      from_name: name,
      message: message,
      form_name: name,
    };
    emailjs
      .send(
        "service_k9a8771",
        "template_3cso234",
        templateParams,
        "0MWAjRBkHamodGla9"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  const notify = () => {
    toast.success("Sent !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className="mx-auto  flex flex-col justify-start items-center px-[25px]">
      {/* Heading */}
      <div className="my-5">
        <p className="text-center text-4xl capitalize font-semibold">
          Take a coffe <span className="font-semibold text-blue">&amp;</span>{" "}
          chat with me
        </p>
      </div>
      {/* gmail, tel */}
      <div className="my-[20px] flex flex-row justify-center gap-x-4 items-center mx-auto w-full">
        {/* gmail */}
        <div className="text-xs md:text-md text-slate-600 font-semibold flex flex-row justify-around items-center bg-red-50 px-3 py-2 rounded-md">
          {/* <SiGmail 
          className="mx-3 text-xl"
          /> */}
          <div className="mx-2">
            <Image
              src={"/assets/gmail.svg"}
              width={30}
              height={30}
              alt={"test"}
            />
          </div>
          <p>{`${contact[0].gmail.toString() || ""}`}</p>
        </div>
        {/* telephone */}
        <div className="text-xs md:text-md text-slate-600 font-semibold flex flex-row justify-around items-center bg-green-50 px-3 py-2 rounded-md">
          {/* <BsFillTelephoneForwardFill 
          className="mx-3 text-xl"
          /> */}
          <div className="mx-2">
            <Image
              src={"/assets/phone.svg"}
              width={30}
              height={30}
              alt={"test"}
            />
          </div>
          <p>{`${contact[0].tel.toString() || ""}`}</p>
        </div>
      </div>
      {/* contact form */}
      <div className="w-full mt-[40px] text-xl italic font-light">
        <form
          ref={form}
          method="POST"
          onSubmit={(e) => {
            handleSubmit(e);
            notify();
          }}
          className="flex flex-col justify-start items-center w-10/12 mx-auto"
        >
          {/* name */}
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            type="text"
            placeholder="Your Name"
            className="bg-slate-200 my-3 rounded-md w-full p-2 outline-none italic pl-3"
          />
          {/* email */}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="bg-slate-200 my-3 rounded-md w-full p-2 outline-none italic pl-3"
          />
          {/* message */}
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            placeholder="your message"
            className="bg-slate-200 my-3 rounded-md w-full p-2 outline-none h-[150px] italic pl-3"
          ></textarea>
          {/* submit */}
          <input
            type={"submit"}
            value="Send Message"
            className="py-3 px-4 text-white text-sm font-semibold bg-blue rounded-xl active:opacity-90"
          />
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};

export default Contact;
