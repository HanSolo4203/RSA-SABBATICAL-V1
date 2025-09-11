import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Instagram, Linkedin, Mail } from 'lucide-react';
import sabbaticalData from '../data/sabbaticalData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <Compass className="h-8 w-8 text-primary-400" />
                <span className="text-xl font-bold">
                  {sabbaticalData.company}
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                {sabbaticalData.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={sabbaticalData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={sabbaticalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${sabbaticalData.contact.email}`}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/experiences" className="text-gray-400 hover:text-white transition-colors">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link to="/journal" className="text-gray-400 hover:text-white transition-colors">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Register Interest
                  </Link>
                </li>
                <li>
                  <a
                    href={sabbaticalData.contact.psychedelic_interest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Psychedelic Expression of Interest
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${sabbaticalData.contact.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
              <p className="text-gray-400 mb-4">
                Into your inbox, straight from the heart of Sabbatical Travel.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                {sabbaticalData.copyright}
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
