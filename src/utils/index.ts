// Define types for the application

export interface PatientData {
  age: number;
  sex: 'male' | 'female';
  chestPainType: 'typical' | 'atypical' | 'nonAnginal' | 'asymptomatic';
  restingBP: number;
  cholesterol: number;
  fastingBS: boolean;
  restingECG: 'normal' | 'abnormal' | 'hypertrophy';
  maxHR: number;
  exerciseAngina: boolean;
  oldpeak: number;
  stSlope: 'up' | 'flat' | 'down';
}

export interface PredictionResult {
  riskScore: number;
  confidence: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'very-high';
  keyFactors: {
    factor: string;
    impact: number;
    description: string;
  }[];
  recommendations: string[];
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}