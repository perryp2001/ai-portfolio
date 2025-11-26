
import React, { useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillsRatingBar from './SkillsRatingBar';

function Skills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        AOS.init();
        setSkills([
            { SkillName: "Mentor Graphics EDA", SkillRating: 9.9, SkillType: 'Software' },
            { SkillName: "Oscilloscope", SkillRating: 9.7, SkillType: 'Hardware' },
            { SkillName: "Value Engineering", SkillRating: 9.5, SkillType: 'Applied Concept' },
            { SkillName: "NPI/NPD", SkillRating: 9.5, SkillType: 'Applied Concept' },
            { SkillName: "High-Speed PCB Design", SkillRating: 9, SkillType: 'Applied Concept' },
            { SkillName: "Power Supplies", SkillRating: 8.9, SkillType: 'Hardware'},
            { SkillName: "Programmable Load", SkillRating: 8.8, SkillType: 'Hardware' },
            { SkillName: "LTspice", SkillRating: 8.5, SkillType: 'Software'},
            { SkillName: "C/C++", SkillRating: 8.2, SkillType: 'Software' },
            { SkillName: "Python", SkillRating: 8.2, SkillType: 'Software' },
            { SkillName: "MATLAB", SkillRating: 8, SkillType: 'Software' },
            { SkillName: "Electromechanical Systems", SkillRating: 8, SkillType: 'Hardware' },
            { SkillName: "Circuit Analysis", SkillRating: 8, SkillType: 'Applied Concept' },
            { SkillName: "Linux OS", SkillRating: 7.8, SkillType: 'Software' },
            { SkillName: "HyperLynx", SkillRating: 7.3, SkillType: 'Software' },

        ])
    }, []);

    return (
        <div id='skills' className='relative p-8'>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white" data-aos="fade-right">Skills</h2>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" data-aos="fade-right" />
            <div className="gap-8 grid md:grid-cols-5 grid-cols-3">
                {skills.map((skill, index) => (
                    <SkillsRatingBar key={index} SkillName={skill.SkillName} SkillRating={skill.SkillRating} SkillType={skill.SkillType} />
                ))}

            </div>

        </div>
    );
}

export default Skills;