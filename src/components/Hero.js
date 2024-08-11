import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Dr. Yoshiyuki Kitaguchi</h1>
          <h2 className="text-2xl font-semibold mb-4">Oculoplastic Surgeon & AI Researcher</h2>
          <p className="text-xl mb-6">
            Bridging the gap between surgical precision and artificial intelligence to revolutionize patient care.
          </p>
          <p className="text-2xl font-italic text-purple-600">
            "Pioneering Solutions for Patients Everywhere"
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`} 
            alt="Dr. Yoshiyuki Kitaguchi" 
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
