import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Banner() {
  const [dayTime, setDayTime] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
      setDayTime('Good Morning');
    } else if (hours >= 12 && hours < 16) {
      setDayTime('Good Afternoon');
    } else {
      setDayTime('Good Evening');
    }

    // Function to fetch user data
    const fetchUserData = async () => {
      const userId = window.location.href.split('=')[1];
      try {
        const response = await fetch(`https://backend-phki.onrender.com/users/${userId}`);
        const data = await response.json();
        setUserName(`${data.user.firstname} ${data.user.lastname}`);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchUserData(); // Call the fetchUserData function to get user data

  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero container"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-light"
        >
          {dayTime}
          <br />
          {userName}
        </motion.h1>
      </div>
    </motion.section>
  );
}
