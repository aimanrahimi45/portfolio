import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-gray-900/70 backdrop-blur-md border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full bg-gray-900/70 backdrop-blur-md border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400"
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full bg-gray-900/70 backdrop-blur-md border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;