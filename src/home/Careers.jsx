import React from "react";

const Careers = () => {
  const positions = [
    {
      title: "Frontend Developer",
      location: "Hyderabad, India",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      location: "Pune, India",
      type: "Full-time",
    },
    {
      title: "Project Manager",
      location: "Remote",
      type: "Contract",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Careers at Kodeblom
      </h1>
      <p className="text-center text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
        Join our passionate team and help us build the future of technology.
        Explore exciting opportunities and grow your career with Kodeblom.
      </p>

      <div className="max-w-5xl mx-auto space-y-6">
        {positions.map((job, i) => (
          <div
            key={i}
            className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-blue-600">
                  {job.title}
                </h2>
                <p className="text-gray-600">
                  {job.location} • {job.type}
                </p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
