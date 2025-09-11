import React from 'react';
import Hero from '../components/Hero';
import Process from '../components/Process';
import ExperiencesGrid from '../components/ExperiencesGrid';
import Benefits from '../components/Benefits';
import MediaCoverage from '../components/MediaCoverage';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Benefits />
      <Process />
      <ExperiencesGrid />
      <MediaCoverage />
    </div>
  );
};

export default Home;
