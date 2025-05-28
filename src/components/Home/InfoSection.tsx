import React from 'react';
import { Heart, User, Share2, Clock } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section id="insights" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding Heart Disease Risk</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Heart disease remains the leading cause of death globally. Learn about the key risk factors and prevention strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Risk Factors</h3>
            <div className="space-y-4">
              <RiskFactor 
                name="High Blood Pressure" 
                description="Puts strain on your heart and damages arteries"
                percentage={70}
              />
              <RiskFactor 
                name="High Cholesterol" 
                description="Builds up in arteries, restricting blood flow"
                percentage={65}
              />
              <RiskFactor 
                name="Smoking" 
                description="Damages blood vessels and reduces oxygen"
                percentage={60}
              />
              <RiskFactor 
                name="Diabetes" 
                description="Increases the risk of heart disease and stroke"
                percentage={55}
              />
              <RiskFactor 
                name="Obesity" 
                description="Puts extra strain on your heart"
                percentage={50}
              />
              <RiskFactor 
                name="Physical Inactivity" 
                description="Leads to higher blood pressure and cholesterol"
                percentage={45}
              />
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <div className="mb-6">
              <Heart className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Did You Know?</h3>
              <p className="text-gray-700">
                According to the World Health Organization, cardiovascular diseases take an estimated 
                17.9 million lives each year, representing 32% of all global deaths.
              </p>
            </div>
            
            <div className="space-y-4">
              <InfoCard 
                icon={<Clock className="h-6 w-6 text-blue-500" />}
                title="Early Detection"
                content="80% of premature heart attacks are preventable with early risk detection and lifestyle changes."
              />
              
              <InfoCard 
                icon={<User className="h-6 w-6 text-blue-500" />}
                title="Personalized Approach"
                content="Risk factors vary by individual. Personalized assessment leads to more effective prevention strategies."
              />
              
              <InfoCard 
                icon={<Share2 className="h-6 w-6 text-blue-500" />}
                title="Global Impact"
                content="Heart disease affects all countries, but 75% of cardiovascular deaths occur in low and middle-income countries."
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-xl font-medium text-gray-800">Prevention Strategies</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PreventionCard 
                number="01"
                title="Healthy Diet"
                content="Eat a heart-healthy diet rich in fruits, vegetables, whole grains, and low in saturated fats and sodium."
                color="blue"
              />
              
              <PreventionCard 
                number="02"
                title="Regular Exercise"
                content="Aim for at least 150 minutes of moderate-intensity aerobic activity per week to maintain cardiovascular health."
                color="green"
              />
              
              <PreventionCard 
                number="03"
                title="Regular Screenings"
                content="Monitor blood pressure, cholesterol, and blood sugar levels regularly through health check-ups."
                color="yellow"
              />
              
              <PreventionCard 
                number="04"
                title="Avoid Tobacco"
                content="Quit smoking and avoid secondhand smoke to significantly reduce heart disease risk."
                color="red"
              />
              
              <PreventionCard 
                number="05"
                title="Limit Alcohol"
                content="If you drink alcohol, do so in moderation to avoid negative effects on heart health."
                color="purple"
              />
              
              <PreventionCard 
                number="06"
                title="Manage Stress"
                content="Practice stress-reduction techniques such as meditation, deep breathing, or yoga."
                color="teal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface RiskFactorProps {
  name: string;
  description: string;
  percentage: number;
}

const RiskFactor: React.FC<RiskFactorProps> = ({ name, description, percentage }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-medium text-gray-800">{name}</h4>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          {icon}
        </div>
        <div className="ml-3">
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{content}</p>
        </div>
      </div>
    </div>
  );
};

interface PreventionCardProps {
  number: string;
  title: string;
  content: string;
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'teal';
}

const PreventionCard: React.FC<PreventionCardProps> = ({ number, title, content, color }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-600',
    purple: 'bg-purple-50 text-purple-600',
    teal: 'bg-teal-50 text-teal-600',
  };
  
  return (
    <div className="flex items-start">
      <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full ${colors[color]} font-bold`}>
        {number}
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{content}</p>
      </div>
    </div>
  );
};

export default InfoSection;