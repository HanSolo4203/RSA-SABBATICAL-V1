// Import the JSON data
import sabbaticalData from '../../sabbatical_summary.json';

export default sabbaticalData;

// Helper functions for data access
export const getExperiences = () => sabbaticalData.experiences;
export const getProcess = () => sabbaticalData.process;
export const getMediaCoverage = () => sabbaticalData.media_coverage;
export const getJournalArticles = () => sabbaticalData.journal_articles;
export const getContactInfo = () => sabbaticalData.contact;
export const getCoreValues = () => sabbaticalData.core_values;
export const getBenefits = () => sabbaticalData.benefits;

// Experience categories for filtering
export const getExperienceCategories = () => {
  const categories = [...new Set(sabbaticalData.experiences.map(exp => exp.type))];
  return categories;
};

// Get experiences by category
export const getExperiencesByCategory = (category) => {
  return sabbaticalData.experiences.filter(exp => exp.type === category);
};
