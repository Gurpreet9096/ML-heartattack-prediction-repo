import { PatientData, PredictionResult, ChartData } from '../types';

// Generate mock patient data
export const generateMockPatients = (count: number): PatientData[] => {
  const patients: PatientData[] = [];
  
  for (let i = 0; i < count; i++) {
    patients.push({
      age: Math.floor(Math.random() * 50) + 30,
      sex: Math.random() > 0.5 ? 'male' : 'female',
      chestPainType: ['typical', 'atypical', 'nonAnginal', 'asymptomatic'][
        Math.floor(Math.random() * 4)
      ] as PatientData['chestPainType'],
      restingBP: Math.floor(Math.random() * 60) + 100,
      cholesterol: Math.floor(Math.random() * 200) + 150,
      fastingBS: Math.random() > 0.7,
      restingECG: ['normal', 'abnormal', 'hypertrophy'][
        Math.floor(Math.random() * 3)
      ] as PatientData['restingECG'],
      maxHR: Math.floor(Math.random() * 80) + 120,
      exerciseAngina: Math.random() > 0.8,
      oldpeak: Math.random() * 4,
      stSlope: ['up', 'flat', 'down'][
        Math.floor(Math.random() * 3)
      ] as PatientData['stSlope'],
    });
  }
  
  return patients;
};

// Mock prediction function
export const predictHeartAttackRisk = (data: PatientData): PredictionResult => {
  // This is a simplified mock model - in a real app this would be a proper ML model
  let baseRisk = 0;
  
  // Age factor
  baseRisk += (data.age - 30) * 0.1;
  
  // Sex factor (males have slightly higher risk)
  if (data.sex === 'male') baseRisk += 5;
  
  // Chest pain type
  if (data.chestPainType === 'asymptomatic') baseRisk += 20;
  else if (data.chestPainType === 'nonAnginal') baseRisk += 10;
  else if (data.chestPainType === 'atypical') baseRisk += 5;
  
  // Blood pressure
  if (data.restingBP > 140) baseRisk += 10;
  
  // Cholesterol
  if (data.cholesterol > 200) baseRisk += (data.cholesterol - 200) * 0.05;
  
  // Fasting blood sugar
  if (data.fastingBS) baseRisk += 10;
  
  // ECG
  if (data.restingECG === 'hypertrophy') baseRisk += 15;
  else if (data.restingECG === 'abnormal') baseRisk += 5;
  
  // Max heart rate
  if (data.maxHR < 150) baseRisk += (150 - data.maxHR) * 0.1;
  
  // Exercise angina
  if (data.exerciseAngina) baseRisk += 20;
  
  // ST depression
  baseRisk += data.oldpeak * 10;
  
  // ST slope
  if (data.stSlope === 'down') baseRisk += 20;
  else if (data.stSlope === 'flat') baseRisk += 10;
  
  // Normalize risk score to 0-100
  const riskScore = Math.min(100, Math.max(0, baseRisk));
  
  // Determine risk level
  let riskLevel: PredictionResult['riskLevel'] = 'low';
  if (riskScore > 75) riskLevel = 'very-high';
  else if (riskScore > 50) riskLevel = 'high';
  else if (riskScore > 25) riskLevel = 'moderate';
  
  // Calculate mock confidence
  const confidence = Math.min(95, 70 + Math.random() * 25);
  
  // Generate key factors
  const keyFactors = [];
  
  if (data.age > 60) {
    keyFactors.push({
      factor: 'Age',
      impact: 3,
      description: 'Higher age correlates with increased cardiovascular risk',
    });
  }
  
  if (data.cholesterol > 240) {
    keyFactors.push({
      factor: 'Cholesterol',
      impact: 4,
      description: 'Elevated cholesterol levels increase risk of arterial blockage',
    });
  }
  
  if (data.restingBP > 140) {
    keyFactors.push({
      factor: 'Blood Pressure',
      impact: 4,
      description: 'High blood pressure puts strain on the heart and blood vessels',
    });
  }
  
  if (data.exerciseAngina) {
    keyFactors.push({
      factor: 'Exercise Angina',
      impact: 5,
      description: 'Chest pain during exercise indicates potential coronary issues',
    });
  }
  
  if (data.fastingBS) {
    keyFactors.push({
      factor: 'Blood Sugar',
      impact: 3,
      description: 'Elevated blood sugar levels can damage blood vessels and heart',
    });
  }
  
  if (data.stSlope === 'down') {
    keyFactors.push({
      factor: 'ST Slope',
      impact: 4,
      description: 'Downsloping ST segment is associated with myocardial ischemia',
    });
  }
  
  // Generate recommendations based on risk factors
  const recommendations = [
    'Maintain a heart-healthy diet rich in fruits, vegetables, and whole grains',
    'Engage in regular physical activity (at least 150 minutes per week)',
    'Monitor blood pressure and cholesterol levels regularly',
  ];
  
  if (data.cholesterol > 200) {
    recommendations.push('Consider discussing cholesterol management with your doctor');
  }
  
  if (data.restingBP > 130) {
    recommendations.push('Monitor blood pressure regularly and consider lifestyle changes');
  }
  
  if (data.fastingBS) {
    recommendations.push('Monitor blood sugar levels and follow a diabetic-friendly diet');
  }
  
  if (riskLevel === 'high' || riskLevel === 'very-high') {
    recommendations.push('Schedule a follow-up with a cardiologist');
    recommendations.push('Consider a comprehensive cardiovascular assessment');
  }
  
  return {
    riskScore,
    confidence,
    riskLevel,
    keyFactors,
    recommendations,
  };
};

// Generate mock chart data
export const generateAgeDistributionData = (): ChartData => {
  return {
    labels: ['30-40', '41-50', '51-60', '61-70', '71+'],
    datasets: [
      {
        label: 'Heart Disease Prevalence by Age',
        data: [5, 15, 30, 45, 60],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(54, 162, 235, 0.9)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
};

export const generateRiskFactorsData = (): ChartData => {
  return {
    labels: ['High BP', 'Cholesterol', 'Smoking', 'Diabetes', 'Obesity', 'Inactivity'],
    datasets: [
      {
        label: 'Impact on Heart Disease Risk',
        data: [70, 65, 60, 55, 50, 45],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
};

export const generateGenderComparisonData = (): ChartData => {
  return {
    labels: ['30-40', '41-50', '51-60', '61-70', '71+'],
    datasets: [
      {
        label: 'Male',
        data: [8, 20, 35, 50, 65],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Female',
        data: [3, 10, 25, 40, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
};

// Placeholder for what would be an API call in a real application
export const fetchPatientHistory = async (patientId: string): Promise<PatientData[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data
  return generateMockPatients(5);
};