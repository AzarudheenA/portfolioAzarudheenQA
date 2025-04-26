import React from "react";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center py-10">
      <div className="w-full max-w-4xl mx-4 p-6 bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center">
          <img
            src="/assets/avatar.jpg"
            alt="Avatar"
            className="rounded-full w-40 h-40 object-cover shadow-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Azarudheen A</h1>
          <p className="text-gray-600 text-center mb-8">
            Software Test Automation Engineer
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col items-center">
            <img
              src="/assets/selenium-icon.png"
              alt="Selenium"
              className="w-12 h-12"
            />
            <p className="mt-2 text-center text-sm font-semibold text-gray-700">
              Selenium<br/>Targeting Drone
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/appium-icon.png"
              alt="Appium"
              className="w-12 h-12"
            />
            <p className="mt-2 text-center text-sm font-semibold text-gray-700">
              Appium<br/>Mobile Control Unit
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/jenkins-icon.png"
              alt="Jenkins"
              className="w-12 h-12"
            />
            <p className="mt-2 text-center text-sm font-semibold text-gray-700">
              Jenkins<br/>Auto-Deploy Bot
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/assets/robotframework-icon.png"
              alt="Robot Framework"
              className="w-12 h-12"
            />
            <p className="mt-2 text-center text-sm font-semibold text-gray-700">
              Robot Framework<br/>Script Launcher
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
