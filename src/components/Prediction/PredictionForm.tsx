import React, { useState } from 'react';
import { AlertCircle, Heart, ArrowRight } from 'lucide-react';
import { PatientData } from '../../types';
import { predictHeartAttackRisk } from '../../utils/mockData';
import PredictionResults from './PredictionResults';

const initialPatientData: PatientData = {
  age: 45,
  sex: 'male',
  chestPainType: 'typical',
  restingBP: 130,
  cholesterol: 220,
  fastingBS: false,
  restingECG: 'normal',
  maxHR: 150,
  exerciseAngina: false,
  oldpeak: 1.2,
  stSlope: 'up',
};

const PredictionForm: React.FC = () => {
  const [patientData, setPatientData] = useState<PatientData>(initialPatientData);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setPatientData(prev => ({
        ...prev,
        [name]: checked,
      }));
    } else if (type === 'number') {
      setPatientData(prev => ({
        ...prev,
        [name]: parseFloat(value),
      }));
    } else {
      setPatientData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setShowResults(true);
      setLoading(false);
    }, 1500);
  };
  
  const resetForm = () => {
    setPatientData(initialPatientData);
    setShowResults(false);
  };
  
  const predictionResult = showResults ? predictHeartAttackRisk(patientData) : null;
  
  return (
    <section id="predict" className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Heart Attack Risk Prediction</h2>
          <p className="text-gray-600">
            Enter patient information to assess heart attack risk using our advanced prediction model.
          </p>
        </div>
        
        {!showResults ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Patient Information</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="18"
                    max="100"
                    value={patientData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="sex" className="block text-sm font-medium text-gray-700 mb-1">
                    Sex
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    value={patientData.sex}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="chestPainType" className="block text-sm font-medium text-gray-700 mb-1">
                    Chest Pain Type
                  </label>
                  <select
                    id="chestPainType"
                    name="chestPainType"
                    value={patientData.chestPainType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="typical">Typical Angina</option>
                    <option value="atypical">Atypical Angina</option>
                    <option value="nonAnginal">Non-Anginal Pain</option>
                    <option value="asymptomatic">Asymptomatic</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="restingBP" className="block text-sm font-medium text-gray-700 mb-1">
                    Resting Blood Pressure (mm Hg)
                  </label>
                  <input
                    type="number"
                    id="restingBP"
                    name="restingBP"
                    min="80"
                    max="200"
                    value={patientData.restingBP}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="cholesterol" className="block text-sm font-medium text-gray-700 mb-1">
                    Cholesterol (mg/dl)
                  </label>
                  <input
                    type="number"
                    id="cholesterol"
                    name="cholesterol"
                    min="100"
                    max="600"
                    value={patientData.cholesterol}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="restingECG" className="block text-sm font-medium text-gray-700 mb-1">
                    Resting ECG
                  </label>
                  <select
                    id="restingECG"
                    name="restingECG"
                    value={patientData.restingECG}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="normal">Normal</option>
                    <option value="abnormal">ST-T Wave Abnormality</option>
                    <option value="hypertrophy">Left Ventricular Hypertrophy</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="maxHR" className="block text-sm font-medium text-gray-700 mb-1">
                    Maximum Heart Rate
                  </label>
                  <input
                    type="number"
                    id="maxHR"
                    name="maxHR"
                    min="60"
                    max="220"
                    value={patientData.maxHR}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="stSlope" className="block text-sm font-medium text-gray-700 mb-1">
                    ST Slope
                  </label>
                  <select
                    id="stSlope"
                    name="stSlope"
                    value={patientData.stSlope}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="up">Upsloping</option>
                    <option value="flat">Flat</option>
                    <option value="down">Downsloping</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="oldpeak" className="block text-sm font-medium text-gray-700 mb-1">
                    ST Depression (Oldpeak)
                  </label>
                  <input
                    type="number"
                    id="oldpeak"
                    name="oldpeak"
                    min="0"
                    max="6"
                    step="0.1"
                    value={patientData.oldpeak}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="fastingBS"
                    name="fastingBS"
                    checked={patientData.fastingBS}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="fastingBS" className="ml-2 block text-sm text-gray-700">
                    Fasting Blood Sugar &gt; 120 mg/dl
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="exerciseAngina"
                    name="exerciseAngina"
                    checked={patientData.exerciseAngina}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="exerciseAngina" className="ml-2 block text-sm text-gray-700">
                    Exercise Induced Angina
                  </label>
                </div>
              </div>
              
              <div className="mt-8 flex items-center">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                <p className="text-sm text-gray-600">
                  This prediction tool is for educational purposes only and should not replace professional medical advice.
                </p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing
                    </>
                  ) : (
                    <>
                      Calculate Risk <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <PredictionResults 
            patientData={patientData} 
            predictionResult={predictionResult!} 
            onReset={resetForm} 
          />
        )}
      </div>
    </section>
  );
};

export default PredictionForm;