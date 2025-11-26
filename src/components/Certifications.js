// src/components/Certifications.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ML from '../assets/pdfs/ML.pdf';
import FPGA from '../assets/pdfs/FPGA.pdf';
import DL from '../assets/pdfs/DL.pdf';
import Python from '../assets/pdfs/Python.pdf';

function Certifications() {
  useEffect(() => {
    AOS.init({
      duration: 700,      // animation speed
      once: false,        // animate again when scrolling back
      offset: 120,        // start a bit before entering view
      easing: 'ease-out',
      //mirror: true,    // <-- remove; this often causes “weird” behavior
    });

    const timeoutId = setTimeout(() => {
    AOS.refreshHard();   // refreshHard is more reliable than refresh()
  }, 200); 
  

  const handleResize = () => AOS.refresh();
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  const certifications = [
    {
      name: 'Introduction to FPGA Design',
      issuer: 'CU Boulder through Coursera',
      date: 'March, 2024',
      desc: 'Foundational course covering FPGA architectures, digital logic implementation, and embedded system integration.',
      link: FPGA,
    },
    {
      name: 'Machine Learning',
      issuer: 'Stanford through Coursera',
      date: 'September, 2021',
      desc: 'Introductory course covering supervised, unsupervised models, neural networks, and real-world predictive applications.',
      link: ML,
    },
    {
      name: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA DLI',
      date: 'July, 2021',
      desc: 'Introductory workshop covering MNIST image classification using neural networks, model training basics, and evaluation concepts.',
      link: DL,
    },
    {
      name: 'Crash Course on Python',
      issuer: 'Google through Coursera',
      date: 'October, 2021',
      desc: 'Hands-on Python crash course covering core programming, automation scripts, data types, and practical applications.',
      link: Python,
    },
  ];

  return (
    <div id="certifications" className="relative p-8 bg-white dark:bg-gray-900">
      <h2
        className="text-3xl font-semibold text-gray-900 dark:text-white"
        data-aos="fade-right"
      >
        Certifications
      </h2>
      <hr
        className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        data-aos="fade-right"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between p-5 rounded-xl
                       border border-gray-200/60 dark:border-gray-700/70
                       bg-white/10 dark:bg-gray-800/40 backdrop-blur-sm
                       shadow-sm hover:shadow-lg hover:-translate-y-1
                       transition-all duration-300"
            data-aos="zoom-in-right"
            data-aos-delay={index * 80}
            data-aos-once="false"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {cert.name}
              </h3>
              <p
                className="block mb-2 text-sm font-semibold leading-snug
                           bg-clip-text text-transparent
                           bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200
                           whitespace-nowrap"
              >
                {cert.issuer} &middot; {cert.date}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                {cert.desc}
              </p>
            </div>

            {cert.link && (
              <div className="mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium 
                             text-center text-white bg-blue-700 rounded-lg 
                             hover:bg-blue-800 focus:ring-4 focus:outline-none 
                             focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                             dark:focus:ring-blue-800"
                >
                  {/* Eye Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  View Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
