import React, { useEffect, useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Context } from '../App';

const SkillsRatingBar = ({ SkillName, SkillRating, SkillType }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [messages, setMessages] = useContext(Context);

  function handleMouseLeave() {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: 'system',
        content: `I have scrolled through ${SkillName} skill. Thank me for it when i ask about skills and also suggest me to explore the more skills or I have any doubt.`,
      },
    ]);
  }

  return (
    <dl onMouseLeave={handleMouseLeave} className="mb-3">
      {/* ✅ name + type on same line */}
      <dt
        className="flex items-center gap-2 text-base font-semibold text-gray-400 dark:text-gray-400"
        data-aos="zoom-in-right"
      >
        {SkillName}
        <span
          className="
            text-[14px] font-semibold
            bg-clip-text text-transparent
            bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200
            whitespace-nowrap
          "
        >
          {SkillType}
        </span>
      </dt>

      <dd className="flex items-center mt-1">
        <div
          className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2"
          data-aos-duration="300"
          data-aos="zoom-in-right"
        >
          <div
            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            style={{ width: `${SkillRating * 10}%` }}
          />
        </div>
        <span
          className="text-base font-medium text-red-300 dark:text-red-400"
          data-aos="zoom-in"
        >
          {SkillRating}
        </span>
      </dd>
    </dl>
  );
};

export default SkillsRatingBar;
