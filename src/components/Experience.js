// src/components/Experience.js
import React, { useEffect, useContext, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Context } from '../App';

function Experience() {
  const [messages, setMessages] = useContext(Context);
  const [experiencesVisited, setExperiencesVisited] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  function handleMouseLeave() {
    setExperiencesVisited(true);
    setMessages(prevMessages => [
      ...prevMessages,
      {
        role: 'system',
        content:
          'I have scrolled through Experience. Thank me for it when I ask about experience and also suggest me to explore more Experience or ask any doubts.'
      }
    ]);
  }

  return (
    <div id="experience"
      className="relative p-8"
      onMouseLeave={experiencesVisited ? null : handleMouseLeave}
    >
      <h2
        className="text-3xl font-semibold text-gray-900 dark:text-white"
        data-aos="fade-right"
      >
        Experience
      </h2>
      <hr
        className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        data-aos="fade-right"
      />
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {/* Datalogic */}
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3
            className="mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            data-aos="fade-right"
          >
            Datalogic (R&amp;D Hardware Engineer)
          </h3>
          <time
            className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400"
            data-aos="fade-right"
          >
            Aug. 2022 - Oct. 2025
          </time>
          <p
            className="block mb-2 text-sm font-semibold leading-snug bg-clip-text text-transparent 
                   bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200
                   whitespace-nowrap"
            data-aos="fade-right"
          >
            Technical skillset: Hardware design &amp; PCB layout, Board bring up,
            Power supplies, Circuit analysis, Embedded systems, Lab equipment &amp;
            debugging, Motion systems, Product development
          </p>
          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li data-aos="fade-right">
              Engineered high-speed (10G Ethernet) and high-current PCB (24V,
              10A) boosting industrial camera data throughput and enabling
              reliable multi-Gbps communication to the carrier card.
            </li>
            <li data-aos="fade-right">
              Developed mixed-signal board with IrDA control and active
              photodiode feedback that enabled 50 kHz pulsed illumination on a
              12K linear camera system.
            </li>
            <li data-aos="fade-right">
              Led actuator feasibility studies and early PoC builds for a
              next-gen 16K camera focus mechanism, reducing settling time by
              30% and enabling precision optical control.
            </li>
            <li data-aos="fade-right">
              Executed full system bring-up of carrier board achieving a
              &gt;90% pass rate for beta release readiness.
            </li>
            <li data-aos="fade-right">
              Drove cost-reduction initiatives by redesigning circuits and
              qualifying alternate components, unlocking $200K+ annual savings.
            </li>
            <li data-aos="fade-right">
              Collaborated with manufacturers to derive analytical parametrics,
              authored detailed hardware specifications, and led
              cross-functional design reviews to de-risk platform-level
              architectural decisions.
            </li>
            <li data-aos="fade-right">
              Designed buck converters (5V@18A at 95%, 0.85V@18A at 90%) and programmed &gt;100 MHz clock generators (LVDS/LVCMOS/HCSL), achieving &lt;10 ps TIE jitter for FPGA/NNA/COMe accelerators.
            </li>
          </ul>
        </li>

        {/* Hitachi */}
        <li className="mb-4 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3
            className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            data-aos="fade-right"
          >
            Hitachi Hi-Rel Power Electronics Pvt. Ltd. (Project Intern)
          </h3>
          <time
            className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400"
            data-aos="fade-right"
          >
            Jan 2022 - May 2022
          </time>
          <time
            className="block mb-2 text-sm font-semibold leading-snug bg-clip-text text-transparent 
                       bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200
                       whitespace-nowrap"
            data-aos="fade-right"
          >
            Technical skillset: Switched mode power supply, Grid tied solar
            inverter, Power electronic converters, Lean manufacturing
            principles
          </time>

          <ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li data-aos="fade-right">
              Developed conceptual 230 VAC three-phase multi-stage SMPS design
              with closed-loop feedback to deliver stable power to inverter
              control systems.
            </li>
            <li data-aos="fade-right">
              Analyzed production workflows through time-study monitoring and
              manpower traceability, identifying bottlenecks and enabling
              10–15% productivity improvements.
            </li>
          </ul>

          {/* Project report button */}
          
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href = "portfolio/pdfs/Hitachi_Internship_Report.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                > 
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                Internship Project Report
              </a>
             {/* View certificate button with eye icon */}
             <a
                 href="portfolio/pdfs/Hitachi Certificate.pdf"
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             >

                 <svg
                     className="w-4 h-4 mr-2"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth="1.8"
                >
                    <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    <circle cx="12" cy="12" r="3" />
                </svg>
                View Certificate


             </a>






            </div>
        </li>
      </ol>
    </div>
  );
}

export default Experience;
