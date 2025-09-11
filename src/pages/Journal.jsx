import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, User } from 'lucide-react';
import { getJournalArticles } from '../data/sabbaticalData';

const Journal = () => {
  const articles = getJournalArticles();

  return (
    <div className="pt-16">
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Journal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, stories, and perspectives from the world of transformational travel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card overflow-hidden h-full">
                  {/* Image Placeholder */}
                  <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-100 to-primary-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ExternalLink className="h-8 w-8" />
                        </div>
                        <p className="text-sm font-medium">Article Image</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>

                    {/* Author */}
                    {article.author && (
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span>{article.author}</span>
                      </div>
                    )}

                    {/* CTA */}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
                    >
                      Read more
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
