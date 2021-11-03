import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import GidContent from '@/components/GidContent';

const experience = [
  {
    unName: 'Pixel Studio AS',
    date: 'Part time freelance',
    subTitle: 'Mobile developer, Remotely',
    description: [
      'I participated in the building of a real mobile app’s screens in the group.',
      'I was able to build an app with React Native and deliver the project on time.',
    ],
  },
  {
    unName: 'ARMATX',
    date: '06/20 — still working',
    subTitle: 'Front-end Developer, Remotely',
    description: [
      'I participated in the designing phase in one of the most important projects in the company. I was watching the process and participated in a few tasks.',
      'I was able to build a tool to scrape data from the internet using Javascript language with the help of libraries like (puppeteer) and achieve the task of scraping almost 10,000 rows of data',
      'In this position I got to learn a lot of soft and hard skills, practicing new technologies.',
    ],
  },
  {
    unName: 'ARMATX',
    date: '03/2020 — 01/2021',
    subTitle: 'WordPress Website Design trainer, Istanbul/Turkey',
    description: [
      'While I was working on a project for the company as a website developer I managed to train two smart students in the same department and allow them to start their journey as website developers using a CMS like WordPress.',
      'I was thrilled to finish a project Called Healthy Souq which is an e-commerce system that serves customers with body care and supplements.',
      'The project was developed by me and other talented employees, unfortunately, we couldn’t kick off the project in the company mainly because of Covid-19.',
    ],
  },
  {
    unName: 'Elbroz Technolojies',
    date: '04/19 — 07/19',
    subTitle: 'Laravel Back-End development training, Istanbul/Turkey',
    description: [
      'Participate in creating a CRM in the company in different phases, (system analysis, UML design, and back-end programming)',
      'I started the training by working on a project for a car battery warehouse managing system. We managed to make the project with Laravel and Angular JS.',
      "It was a  rich experience in this job since I was able to communicate with the customers during the project's time very professionally.",
    ],
  },
  {
    unName: 'Nexo Ajans',
    date: '12/18 — 04/19',
    subTitle: 'Website development training, Istanbul/Turkey',
    description: [
      'In a very short time, I was able to transform myself from a trainer to an employee who produces useful work for the company',
      'I had a task to make a pre-built website to make multi-language and I was able to apply the professional steps to do the task.',
    ],
  },
];

const text = {
  heading: 'Work Experience',
  subText:
    'During the journey i worked for groups and companies that added to me great experience and give the opportunity to expand my knowledge all the time ',
  // and i was thrilled to pay them back with my hard working and achievements
};

const Experience = () => {
  return (
    <>
      <Head>
        <title>ALALAYA | {'Experience'}</title>
        <meta
          name="description"
          content="During the journey i worked for groups and companies that added to me great experience and give the opportunity to expand my knowledge all the time "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GidContent
        heading={text.heading}
        subText={text.subText}
        data={experience}
      />
    </>
  );
};
Experience.layout = Layout;
export default Experience;
