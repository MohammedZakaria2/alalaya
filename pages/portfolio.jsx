import Head from 'next/head';
import React from 'react';
import Layout from '@/components/Layout';
import GidContent from '@/components/GidContent';

const projects = [
  {
    unName: 'Choose Wisely',
    demo: 'https://choose-wisely-4aeef.web.app/',
    code: 'https://github.com/ReCoded-Org/capstone-turkey-choose_wisely',
    subTitle:
      'React Js | Redux | Helmet | Jest | CSS | Figma | Firebase | Agile | Firebase',
    description: [
      'The place for looking for universities and learning approaches',
      'Environment: Reactjs, Redux, Helmet, Jest CSS, JSX, Figma Firebase, Agile',
      'Working on designing the UI using Figma and developing the screens with functionality, I managed to develop the screens and be a sprint master during the development phase, required features with different types of technologies, learned a lot about the testing library and Redux, new leadership skills.',
    ],
  },
  {
    unName: 'StabSuecia Mobile app',
    demo: null,
    code: null,
    subTitle: 'React Native | styled-components',
    description: [
      "App for managing the company's driver's tasks and delivering location.",
      'Environment: React Native, styled-components.',
      'I managed to develop the screens and make the API connection for the app with the required features with different types of technologies, and learned a lot about ReactNative in this experience.',
    ],
  },
  {
    unName: 'MMS',
    demo: 'https://60f2ae9c53b784c14c19f517--friendly-saha-cd60ee.netlify.app/',
    code: 'https://github.com/MohammaZakaria/mms',
    subTitle: 'React Js | Redux | CSS | Firebase',
    description: [
      "The solution for restaurant's and branches to manage meals cooking operation.",
      'Environment: React Js, Redux, CSS, JSX, Firebase',
      'Working on designing the UI and developing the screens with functionality, I achieved the required features with different types of technologies, learned a lot about ReactJS new libraries and data fetching, fast learning techniques.',
    ],
  },
  {
    unName: 'A&M',
    demo: 'https://mohammazakaria.github.io/oop-movie/',
    code: 'https://github.com/MohammaZakaria/oop-movie',
    subTitle: 'OOP | JS | Html | CSS',
    description: [
      'Website that user can discover movies and actors with search and filter ability',
      'Environment: HTML , CSS, Javascript',
      'As a developer and UI designer, I managed to achieve the required features and some bounce tasks in this project and learned a lot about javascript and DOM manipulation, time management.',
    ],
  },
];

const text = {
  heading: 'Technical Projects',
  subText:
    'Projects i worked on Gladly that added tpo me a wide experience and a lot of skills',
};
const Portfolio = () => {
  return (
    <>
      <Head>
        <title>ALALAYA | {'Portfolio & Experience'}</title>
        <meta
          name="description"
          content="Projects i worked on Gladly that added tpo me a wide experience and a lot of skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GidContent
        heading={text.heading}
        subText={text.subText}
        data={projects}
      />
    </>
  );
};

Portfolio.layout = Layout;
export default Portfolio;
