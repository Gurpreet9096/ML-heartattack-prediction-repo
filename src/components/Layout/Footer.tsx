import React from 'react';
import { Heart, Info, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <h3 className="text-xl font-semibold text-white">Heart Attack Prediction</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Advanced analytics and machine learning to help predict and prevent heart disease.
            </p>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <span>contact@heartprediction.example</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#dashboard" className="hover:text-blue-400 transition-colors">Dashboard</a>
              </li>
              <li>
                <a href="#predict" className="hover:text-blue-400 transition-colors">Risk Prediction</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-blue-400 transition-colors">Health Insights</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About the Model</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  <span>How It Works</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Research Papers</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Heart Health FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500 text-center">
          <p>
            © {currentYear} Heart Attack Prediction Analysis. All rights reserved.
          </p>
          <p className="mt-2">
            This tool is for educational purposes only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;