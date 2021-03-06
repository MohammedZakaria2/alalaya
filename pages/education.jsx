import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import GidContent from '@/components/GidContent';
const education = [
  {
    unName: 'Re:Coded',
    date: '04/21 — 09/21',
    subTitle: 'Front-End BootCamp (CSS, HTML, Javascript and ReactJs)',
    description: [
      'Front End Web Development: HTML/CSS, JavaScript, React',
      '5 months of project-based learning + coding, with 400+ hours of curriculum and a simulated client project ',
    ],
  },
  {
    unName: 'UCSI University',
    date: '1/2019 — 12/2021 ',
    subTitle: 'Bachelor Degree in computer since',
    description: [
      'This program makes sure that students are equipped with in-depth and hands-on knowledge of the principles of software design and development as well as key operational and technical aspects of computing. also mastering the relevant industry skills such as analysis and design, programming, software building and maintenance of new developments.',
    ],
  },
  {
    unName: 'Pearson BETC',
    date: '09/16 — 09/18',
    subTitle: 'HND Level 5 in Information Technology',
    description: [
      'BTEC Higher Nationals are internationally-recognized higher education qualifications at level 4 and 5 that are equivalent to the first and second years of a university degree, providing progression to both university and employment.',
    ],
  },
];

const text = {
  heading: 'Education',
  subText:
    'In Term of education I have been graduated from a great places and gained a good academic and vocational skills',
};

const Education = () => {
  return (
    <>
      <Head>
        <title>ALALAYA | {'Education & Experience'}</title>
        <meta
          name="description"
          content="In Term of education I have been graduated from a great places and gained a good academic and vocational skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GidContent
        heading={text.heading}
        subText={text.subText}
        data={education.sort()}
      />
    </>
  );
};
Education.layout = Layout;
export default Education;
