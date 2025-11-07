import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        About Kodeblom Technologies
      </h1>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-6">
          At <span className="font-semibold">Kodeblom Technologies</span>, we
          are committed to transforming industries through innovation and
          technology. We deliver smart solutions that empower global businesses
          to achieve operational excellence.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Our team of passionate engineers, designers, and innovators
          collaborate to create scalable, secure, and sustainable technologies
          across multiple sectors — from automotive to healthcare and beyond.
        </p>
        <p className="text-lg text-gray-700">
          Founded with a vision to drive digital transformation, Kodeblom stands
          for reliability, innovation, and integrity.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
