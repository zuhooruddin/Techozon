
import React from 'react';

export const metadata = {
  title: 'About Us',
};

const fetchTeamData = async () => {
  return {
    description: "Welcome to Our Team! We're passionate about creating memorable experiences and delivering exceptional content to our audience. Our team consists of dedicated professionals who are committed to excellence in everything we do. We strive to inspire, educate, and entertain through our work, and we're excited to share our journey with you.",
    additionalInfo: "Our team consists of dedicated professionals who are committed to excellence in everything we do. We strive to inspire, educate, and entertain through our work, and we're excited to share our journey with you."
  };
};

const AboutPage = async () => {
  const teamData = await fetchTeamData();

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md mx-auto md:max-w-none">
            <img src="/images/team.png" alt="Team" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              {teamData.description}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {teamData.additionalInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
