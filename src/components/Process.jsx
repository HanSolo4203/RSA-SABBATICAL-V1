import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, TrendingUp } from 'lucide-react';
import { getProcess } from '../data/sabbaticalData';

const Process = () => {
  const process = getProcess();
  const steps = [
    {
      number: '01',
      title: 'Examine',
      description: process.step_1.description,
      icon: Search,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'Experience',
      description: process.step_2.description,
      icon: MapPin,
      color: 'from-green-500 to-green-600'
    },
    {
      number: '03',
      title: 'Evolve',
      description: process.step_3.description,
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go deeper than anyone else. We care more than anyone else. We individualize each travel experience. Here's how we do it:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0"></div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Step Number */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white text-2xl font-bold mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      className={`p-4 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10`}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className={`h-8 w-8 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4">
            View Process Details
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
