import React from 'react';

// Main App component that renders the entire section
const App = () => {
  const stats = [
    {
      number: "20+",
      label: "Years of Medical Excellence"
    },
    {
      number: "98%",
      label: "Patient Satisfaction"
    },
    {
      number: "24/7",
      label: "Emergency Care Available"
    }
  ];

  return (
    <div className="bg-white py-16 px-8 font-sans text-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[48px] text-[#192431] tracking-tight leading-tight">
            Excellence by the Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:px-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111111] p-10 rounded-2xl w-full max-w-sm flex flex-col items-center text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Stat Number */}
              <p className="text-5xl md:text-6xl font-bold mb-4 text-white">
                {stat.number}
              </p>

              {/* Divider */}
              <div className="w-16 h-1 bg-gray-600 rounded-full mb-6"></div>

              {/* Stat Label */}
              <p className="text-lg font-medium text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
