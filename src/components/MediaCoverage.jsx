import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Quote } from 'lucide-react';
import { getMediaCoverage } from '../data/sabbaticalData';

const MediaCoverage = () => {
  const mediaCoverage = getMediaCoverage();

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
            As seen in
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Featured in leading publications and media outlets worldwide
          </p>
        </motion.div>

        {/* Media Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mediaCoverage.map((item, index) => (
            <motion.div
              key={item.source}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                  <Quote className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{item.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">
                      {item.source}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Featured in leading publications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              'Robb Report',
              'Forbes',
              'Body & Soul',
              'Travel & Luxury',
              'The Australian'
            ].map((publication, index) => (
              <div
                key={publication}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-sm font-medium text-gray-600">
                  {publication}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCoverage;
