"use client"
import React, { useEffect, useState } from 'react';

const WelcomePage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    visible && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My Website!</h1>
      </div>
    )
  );
};

export default WelcomePage;
