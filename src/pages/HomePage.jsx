import React from 'react'

import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <Hero title="React Jobs" subtitle="Find the right job for you."/>
        <HomeCards />
        <JobListings isHome={true}/>
        <ViewAllJobs />
    </>
  )
}

export default HomePage