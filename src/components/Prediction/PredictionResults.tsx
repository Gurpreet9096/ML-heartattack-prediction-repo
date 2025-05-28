import React from 'react';
import { 
  AlertTriangle, CheckCircle, Heart, ArrowLeft, 
  ChevronRight, TrendingUp, Activity, Info 
} from 'lucide-react';
import { PatientData, PredictionResult } from '../../types';
import DashboardCard from '../Dashboard/DashboardCard';

interface PredictionResultsProps {
  patientData: PatientData;
  predictionResult: PredictionResult;
  onReset: () => void;
}

const PredictionResults: React.FC<PredictionResultsProps> = ({ 
  patientData, 
  predictionResult, 
  onReset 
}) => {
  const getRiskLevelColor = (level: PredictionResult['riskLevel']) => {
    switch (level) {
      case 'low':
        return 'text-green-500';
      case 'moderate':
        return 'text-yellow-500';
      case 'high':
        return 'text-orange-500';
      case 'very-high':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };
  
  const getRiskLevelBg = (level: PredictionResult['riskLevel']) => {
    switch (level) {
      case 'low':
        return 'bg-green-50';
      case 'moderate':
        return 'bg-yellow-50';
      case 'high':
        return 'bg-orange-50';
      case 'very-high':
        return 'bg-red-50';
      default:
        return 'bg-gray-50';
    }
  };
  
  const getRiskLevelIcon = (level: PredictionResult['riskLevel']) => {
    switch (level) {
      case 'low':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'moderate':
        return <Info className="h-5 w-5 text-yellow-500" />;
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'very-high':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };
  
  const getImpactLabel = (impact: number) => {
    switch (impact) {
      case 1:
        return 'Very Low';
      case 2:
        return 'Low';
      case 3:
        return 'Moderate';
      case 4:
        return 'High';
      case 5:
        return 'Very High';
      default:
        return 'Unknown';
    }
  };
  
  const getImpactColor = (impact: number) => {
    switch (impact) {
      case 1:
        return 'bg-green-100 text-green-800';
      case 2:
        return 'bg-green-100 text-green-800';
      case 3:
        return 'bg-yellow-100 text-yellow-800';
      case 4:
        return 'bg-orange-100 text-orange-800';
      case 5:
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const { riskScore, confidence, riskLevel, keyFactors, recommendations } = predictionResult;
  
  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <Heart className="h-5 w-5 text-red-500 mr-2" />
            <h3 className="text-lg font-medium text-gray-800">Prediction Results</h3>
          </div>
          <button
            onClick={onReset}
            className="inline-flex items-center px-3 py-1 text-sm text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Form
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`rounded-lg p-6 text-center ${getRiskLevelBg(riskLevel)}`}>
              <Activity className={`h-8 w-8 mx-auto mb-3 ${getRiskLevelColor(riskLevel)}`} />
              <h4 className="text-gray-700 text-sm font-medium mb-2">Risk Score</h4>
              <div className="flex items-center justify-center">
                <p className={`text-3xl font-bold ${getRiskLevelColor(riskLevel)}`}>
                  {riskScore.toFixed(1)}%
                </p>
              </div>
              <div className="mt-2 flex items-center justify-center">
                {getRiskLevelIcon(riskLevel)}
                <span className={`ml-1 text-sm font-medium capitalize ${getRiskLevelColor(riskLevel)}`}>
                  {riskLevel.replace('-', ' ')} Risk
                </span>
              </div>
            </div>
            
            <div className="rounded-lg p-6 bg-blue-50 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-blue-500" />
              <h4 className="text-gray-700 text-sm font-medium mb-2">Prediction Confidence</h4>
              <p className="text-3xl font-bold text-blue-600">
                {confidence.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Based on model accuracy
              </p>
            </div>
            
            <div className="rounded-lg p-6 bg-gray-50 text-center">
              <Info className="h-8 w-8 mx-auto mb-3 text-gray-500" />
              <h4 className="text-gray-700 text-sm font-medium mb-2">Patient Information</h4>
              <p className="text-xl font-medium text-gray-800">
                {patientData.age} years, {patientData.sex === 'male' ? 'Male' : 'Female'}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                BP: {patientData.restingBP} mmHg, Chol: {patientData.cholesterol} mg/dl
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DashboardCard title="Key Risk Factors">
              <div className="space-y-4">
                {keyFactors.map((factor, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-0.5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImpactColor(factor.impact)}`}>
                        {getImpactLabel(factor.impact)}
                      </span>
                    </div>
                    <div className="ml-3">
                      <h5 className="text-sm font-medium text-gray-800">{factor.factor}</h5>
                      <p className="text-sm text-gray-600">{factor.description}</p>
                    </div>
                  </div>
                ))}
                
                {keyFactors.length === 0 && (
                  <p className="text-gray-600 italic">No significant risk factors identified.</p>
                )}
              </div>
            </DashboardCard>
            
            <DashboardCard title="Recommendations">
              <ul className="space-y-3">
                {recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </DashboardCard>
          </div>
          
          <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-yellow-800">Important Disclaimer</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  This prediction is based on a statistical model and should not replace professional 
                  medical advice. Always consult with a healthcare provider for proper diagnosis and 
                  treatment recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionResults;