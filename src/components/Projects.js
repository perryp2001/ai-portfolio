// src/components/Projects.js

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from './ProjectCard';

import WECSreport from '../assets/pdfs/Wind Energy Conversion System.pdf';
import HAreport from '../assets/pdfs/Home Automation System.pdf';
import SMPSreport from '../assets/pdfs/SMPS.pdf';
import Moviereport from '../assets/pdfs/Movie Recommendation Engine.pdf';
import Solarreport from '../assets/pdfs/Solar Insolation Algoirthm.pdf';
import WECS from '../assets/images/WECS.jpg';
import HA from '../assets/images/HA.webp';
import SMPS from '../assets/images/SMPS.png';
import Movie from '../assets/images/MR.png';  
import Solar from '../assets/images/Solar.png';

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    AOS.init();
    setProjects([
      {
        title: "Wind Energy Conversion System ",
        content: "Engineered 6 kW PMSG-based wind energy conversion model in MATLAB, achieving 49% efficiency by integrating turbine–rectifier–boost converter with pitch angle control and P&O MPPT algorithm",
        imageUrl: WECS,
        githubUrl: WECSreport
      },
      {
        title: "Home Automation System",
        content: "Implemented PLC ladder logic for 10+ elements using counters, timers, and data-handling blocks and deployed the control scheme into a TwinCAT-based GUI for seamless system visualisation",
        videoUrl: "",
        imageUrl: HA,
        githubUrl: HAreport
      },
      {
        title: "Modeling and Analysis of Linear and Switching Power Supply Architectures ",
        content: "Designed and simulated a ±12 V linear supply and a closed-loop 5 V/5 A buck converter, benchmarking regulation, ripple, and efficiency across both architectures, with the SMPS achieving ~80% conversion efficiency under load",
        imageUrl: SMPS,
        githubUrl: SMPSreport
      },
      {
        title: "Movie Recommendation System",
        content: "Built a movie recommendation engine using collaborative filtering and Euclidean similarity, clustering 1,000+ movies from a Kaggle dataset to improve recommendation accuracy",
        imageUrl: Movie,
        githubUrl: Moviereport
      },
      {
        title: "Solar Insolation Algorithm",
        content: "Modeled solar incident energy for three Indian cities and validated the simulation with measured vs calculated error analysis, achieving 5–15% deviation depending on location and atmospheric conditions",
        imageUrl: Solar,
        githubUrl: Solarreport
      },
      

    ]);
  }, []);
  return (
    <div id="projects" className='relative p-8 bg-white dark:bg-gray-900'>
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white py-2" data-aos="fade-right" data-aos-duration="600">Projects</h2>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard 
          key={index} 
          title={project.title} 
          content={project.content} 
          imageUrl={project.imageUrl} 
          videoUrl={project.videoUrl} 
          githubUrl={project.githubUrl} />
        ))}
      </div>
    </div>

  );
}

export default Projects;
