import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pl-64">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">GHS Reports and Monitoring App</h1>
            <p className="text-gray-400">© 2024 GHS Reports and Monitoring App. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
