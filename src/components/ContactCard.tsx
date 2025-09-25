import React from 'react';

const ContactCard: React.FC = () => {
  return (
    <div className="backdrop-blur-lg rounded-2xl p-6 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 transition-all duration-300" style={{ height: '250px' }}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-purple-500/30 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Let's Connect</h3>
        <p className="text-gray-300 mb-4">
          Let's work together on your next project
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40">
          Email Me
        </button>
      </div>
    </div>
  );
};

export default ContactCard;