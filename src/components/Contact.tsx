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
    <section id="contact" className="mb-16 mx-4 lg:mx-0 relative z-10">
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold text-center text-white mb-10 drop-shadow-lg">
        Contact Us
      </h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
        {/* Left Side - Illustration */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?semt=ais_hybrid"
            alt="Illustration"
            className="max-w-xs md:max-w-sm rounded-lg"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 bg-gray-900/40 backdrop-blur-sm border border-cyan-500/20 p-8 rounded-lg shadow-xl shadow-cyan-500/20">
          <h3 className="text-2xl mb-2 text-left font-semibold text-white">Get in touch</h3>
          <p className="text-gray-300 text-left text-sm mb-4">
            My inbox is always open. Whether you have a question or just want to
            say hello, I will try my best to get back to you!
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name*"
                className="w-full bg-gray-800/50 border border-cyan-500/20 text-white rounded-md p-3 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="user_email"
                placeholder="Email*"
                className="w-full bg-gray-800/50 border border-cyan-500/20 text-white rounded-md p-3 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                rows={3}
                placeholder="Message*"
                className="w-full bg-gray-800/50 border border-cyan-500/20 text-white rounded-md p-3 focus:outline-none focus:border-cyan-500"
                required
              ></textarea>
            </div>

            <div className="text-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
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
