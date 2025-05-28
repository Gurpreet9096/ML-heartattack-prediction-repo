import React from 'react';
import { Activity, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Activity className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                AI-Powered Analysis
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Heart Attack Prediction <br className="hidden md:block" />
              <span className="text-blue-600">Using Machine Learning</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Advanced analytics to predict heart attack risk with high accuracy. 
              Help save lives through early detection and personalized insights.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#predict" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Prediction <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 hover:border-blue-500 text-gray-800 hover:text-blue-600 text-lg font-medium rounded-lg shadow hover:shadow-md transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl animate-float">
              <div className="flex space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-blue-100 rounded-lg w-3/4 animate-pulse"></div>
                <div className="flex space-x-4">
                  <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">75%</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-6 bg-gray-100 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 mt-2 bg-gray-100 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="h-32 bg-blue-50 rounded-lg"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 bg-green-100 rounded"></div>
                  <div className="h-10 bg-yellow-100 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/4 -right-4 h-32 w-32 bg-blue-500 opacity-20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 -left-8 h-40 w-40 bg-red-500 opacity-20 rounded-full blur-xl"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <Stat 
            label="Prediction Accuracy" 
            value="88.5%" 
          />
          <Stat 
            label="Patients Analyzed" 
            value="50,000+" 
          />
          <Stat 
            label="Risk Factors" 
            value="13" 
          />
          <Stat 
            label="Clinical Validation" 
            value="3 Hospitals" 
          />
        </div>
      </div>
    </section>
  );
};

interface StatProps {
  label: string;
  value: string;
}

const Stat: React.FC<StatProps> = ({ label, value }) => {
  return (
    <div className="text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
      <p className="text-3xl font-bold text-blue-600 mb-2">{value}</p>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

export default HeroSection;