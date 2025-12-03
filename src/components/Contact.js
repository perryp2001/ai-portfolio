// src/components/Contact.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out", once: false });
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900 p-8">
      {/* Heading */}
      <h2 id="contact" className="text-3xl font-semibold text-gray-900 dark:text-white">
        Contact
      </h2>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="flex mt-4 sm:justify-left sm:mt-0">

        {/* EMAIL ICON - Gmail Red (#EA4335) */}
        <a
          href="mailto:parth040501@gmail.com"
          className="group transition-all"
        >
          <svg
            className="w-10 h-10 
                       transition-all duration-300
                       text-blue-600 
                       group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          <span className="sr-only">Send Email</span>
        </a>

        {/* LINKEDIN ICON - Brand Blue (#0A66C2) */}
        <a
          href="https://www.linkedin.com/in/parth040501/"
          target="_blank"
          rel="noreferrer"
          className="group ms-5 transition-all"
        >
          <svg
            className="w-10 h-10
                       transition-all duration-300
                       text-blue-600
                       group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 25 24"
          >
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
          <span className="sr-only">LinkedIn account</span>
        </a>

      </div>
    </footer>
  );
}

export default Contact;
