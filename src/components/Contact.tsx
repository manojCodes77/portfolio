import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID as string, // Replace with your EmailJS Service ID
        import.meta.env.VITE_TEMPLATE_ID as string, // Replace with your EmailJS Template ID
        form.current,
        import.meta.env.VITE_PUBLIC_KEY as string // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("An error occurred. Please try again.");
        }
      );

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mb-16 mx-4 lg:mx-0">
      {/* Centered Heading */}
      <h2 className="text-4xl font-medium text-center text-gray-800 mb-10">
        Contact Us
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
        {/* Left Side - Illustration */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?semt=ais_hybrid"
            alt="Illustration"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg">
          <h3 className="text-2xl mb-2 text-left font-semibold">Get in touch</h3>
          <p className="text-gray-400 text-left text-sm mb-4">
            My inbox is always open. Whether you have a question or just want to
            say hello, I will try my best to get back to you!
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name*"
                className="w-full bg-slate-100 rounded-md p-3 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="user_email"
                placeholder="Email*"
                className="w-full bg-gray-100 rounded-md p-3 focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                rows={3}
                placeholder="Message*"
                className="w-full bg-gray-100 rounded-md p-3 focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="text-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition-all duration-300"
              >
                Say Hello 👋
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
