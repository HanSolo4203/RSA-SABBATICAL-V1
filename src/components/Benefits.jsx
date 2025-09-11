import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Heart } from 'lucide-react';
import { getBenefits } from '../data/sabbaticalData';

const Benefits = () => {
  const benefits = getBenefits();
  
  const benefitCards = [
    {
      title: 'Deepen Meaning',
      description: benefits.deepen_meaning,
      icon: Target,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Enhance Performance',
      description: benefits.enhance_performance,
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Find Fulfilment',
      description: benefits.find_fulfilment,
      icon: Heart,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transformational Travel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Purpose: Harness the power of transformational travel to help individuals and organizations seeking life affirming experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitCards.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${benefit.color} bg-opacity-10`}>
                      <IconComponent className={`h-12 w-12 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
