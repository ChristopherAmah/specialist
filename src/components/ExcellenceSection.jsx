import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const App = () => {
  const stats = [
    {
      number: 20,
      suffix: "+",
      label: "Years of Medical Excellence",
    },
    {
      number: 98,
      suffix: "%",
      label: "Patient Satisfaction",
    },
    {
      number: 24,
      suffix: "/7",
      label: "Emergency Care Available",
    },
  ];

  return (
    <div className="bg-white py-16 px-8 font-sans text-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[48px] font-bold text-[#192431] tracking-tight leading-tight">
            Excellence by the Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center md:px-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111111] p-10 rounded-2xl w-full max-w-sm flex flex-col items-center text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Animated Number with VisibilitySensor */}
              <p className="text-5xl md:text-6xl font-bold mb-4 text-white">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={3}
                  suffix={stat.suffix}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </p>

              {/* Divider */}
              <div className="w-16 h-1 bg-gray-600 rounded-full mb-6"></div>

              {/* Label */}
              <p className="text-lg font-medium text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
