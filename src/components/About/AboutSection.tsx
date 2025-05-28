import React from 'react';
import { FileText, Book, Award, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Prediction Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how we predict heart attack risk using advanced machine learning techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Data Collection</h4>
                  <p className="mt-1 text-gray-600">
                    Patient data including age, sex, clinical parameters, and medical history is collected.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Feature Processing</h4>
                  <p className="mt-1 text-gray-600">
                    Clinical variables are processed, normalized, and prepared for the prediction model.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Model Prediction</h4>
                  <p className="mt-1 text-gray-600">
                    Our machine learning model analyzes the data to calculate heart attack risk probability.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <span className="text-xl font-bold">4</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Risk Analysis</h4>
                  <p className="mt-1 text-gray-600">
                    Results are interpreted to identify key risk factors and provide personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Model Information</h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h4 className="text-lg font-medium text-gray-800">Technical Details</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Algorithm Type</h5>
                    <p className="text-gray-800">Ensemble of Gradient Boosting and Neural Networks</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Model Accuracy</h5>
                    <p className="text-gray-800">88.5% (on validation dataset)</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Training Data</h5>
                    <p className="text-gray-800">Over 50,000 anonymized patient records</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Key Features</h5>
                    <p className="text-gray-800">13 clinical parameters with feature importance analysis</p>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700">Last Updated</h5>
                    <p className="text-gray-800">March 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="text-blue-500 mb-4">
              <FileText className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Research Backed</h3>
            <p className="text-gray-600">
              Our model is based on extensive cardiovascular research and follows clinical guidelines.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="text-blue-500 mb-4">
              <Book className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">
              The model improves over time as it's updated with the latest medical research and data.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="text-blue-500 mb-4">
              <Award className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Validated Accuracy</h3>
            <p className="text-gray-600">
              Rigorously tested and validated against clinical outcomes from multiple hospitals.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-red-50 rounded-full mb-6">
            <Heart className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Dedicated to Heart Health</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide accessible tools that help healthcare professionals and individuals
            better understand and manage heart disease risk factors for improved cardiac health outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;