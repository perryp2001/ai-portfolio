// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Experience from './components/Experience';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Certifications from './components/Certifications'
import Contact from './components/Contact';
import Skills from './components/Skills';
import ResumeString from './assets/resume';

export const Context = React.createContext();
function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        "role": "system",
        "content": ResumeString
      }
    ]);

  }, []);


  return (
    <Context.Provider value={[ messages, setMessages]}>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 overflow-x-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Introduction></Introduction>
          <Experience></Experience>
          <Skills></Skills>
          <Projects></Projects>
          <Certifications></Certifications>
          <Contact></Contact>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
