import React, { useEffect, useState } from 'react';
import { T, Flex, Headings } from '../../Cor';
import { colors } from '../../theme';
import Pie from './Pie';
import { Wrapper, Pies, InnerPies } from './style';
import CountUp from 'react-countup';
import { isInViewport } from 'utils/helpers';
const text = {
  heading: 'My SKILLS',
  subText:
    'During the past experiences I learned so much useful frameworks and programming languages, in the charts i am showing some of these skills.',
};

const data = {
  languages: [
    {
      name: 'Java',
      percent: 67,
      size: 1,
      color: '#e32e2d',
    },
    {
      name: 'PHP',
      percent: 70,
      size: 1,
      color: '#777BB3',
    },
    {
      name: 'C#',
      percent: 60,
      size: 1,
      color: '#489926',
    },
    {
      name: 'Javascript',
      percent: 70,
      size: 1,
      color: '#EFD81C',
    },
    {
      name: 'CSS',
      percent: 75,
      size: 1,
      color: '#3562e9',
    },
    {
      name: 'HTML',
      percent: 85,
      size: 1,
      color: '#d55733',
    },
  ],
  frameworks: [
    {
      type: 'Back End',
      size: 2,
      color: `${colors.primary}`,
      percent: 65,
      technologies: [
        {
          name: 'Laravel',
          percent: 70,
          size: 1,
          color: '#E3382C',
        },
        {
          name: 'Node Js',
          size: 1,
          percent: 40,
          color: '#61635C',
        },
      ],
    },
    {
      type: 'Front End',
      color: `${colors.primary}`,
      size: 2,
      percent: 70,
      technologies: [
        {
          name: 'React Js',
          size: 1,
          percent: 85,
          color: '#68CFEE',
        },
        {
          name: 'Next Js',
          percent: 70,
          size: 1,
          color: '#000',
        },
        {
          name: 'Angular',
          size: 1,
          percent: 40,
          color: '#e3e3e3',
        },

        {
          name: 'Bootstrap',
          size: 1,
          percent: 80,
          color: '#7410EB',
        },
        {
          name: 'Tailwind CSS',
          size: 1,
          percent: 80,
          color: '#58B4C0',
        },
      ],
    },
    {
      type: 'Mobile',
      percent: 60,
      size: 2,
      color: `${colors.primary}`,
      technologies: [
        {
          name: 'React Native',
          percent: 65,
          color: '#4e9dc8',
          size: 1,
        },
      ],
    },
  ],
};
const Statistics = () => {
  const [animate, setAnimate] = useState(false);
  const [animateLanguages, setAnimateLanguages] = useState(false);
  useEffect(() => {
    const box = document.querySelector('.statistics');
    const languages = document.querySelector('.languages');

    document.addEventListener(
      'scroll',
      function () {
        if (isInViewport(box)) {
          setAnimate(true);
        }
        if (isInViewport(languages)) {
          setAnimateLanguages(true);
        }
      },
      {
        passive: true,
      }
    );
  }, []);
  return (
    <Wrapper>
      <Flex dr={'column'}>
        <Headings.H1 size={1.7} color={colors.darker}>
          {text.heading}
        </Headings.H1>
        <T size={0.95} m={'1rem 0 3rem 0'} text={'center'} w={70}>
          {text.subText}
        </T>
      </Flex>
      <div className="languages"></div>
      <Pies m={'0 0 3rem 0'} gap={3}>
        {data.languages.map((lang, index) => (
          <Pies key={index} gap={1} align="center" dir={'column'}>
            <div>
              <Pie
                size={100 * lang.size}
                percent={animateLanguages ? lang.percent * lang.size : 0}
                bg={lang.color}
              >
                <CountUp
                  start={0}
                  end={animateLanguages ? lang.percent : 0}
                  duration={3.5}
                  suffix="%"
                />
              </Pie>
              <T text={'center'} m={'1rem 0'}>
                {lang.name}
              </T>
            </div>
          </Pies>
        ))}
      </Pies>
      <div className="statistics"></div>
      <Pies>
        {data.frameworks.map((frame, index) => (
          <Pies key={index} gap={1} align="center" dir={'column'}>
            <div>
              <Pie
                size={100 * frame.size}
                percent={animate ? frame.percent * frame.size : 0}
                bg={frame.color}
              >
                <CountUp
                  start={0}
                  end={animate ? frame.percent : 0}
                  duration={3.5}
                  suffix="%"
                />
              </Pie>
              <T text={'center'} m={'1rem 0'}>
                {frame.type}
              </T>
            </div>
            <InnerPies>
              <Pies key={index} gap={1} align="center">
                {frame.technologies.map((tech, index) => (
                  <div key={index}>
                    <Pie
                      size={100 * tech.size}
                      percent={animate ? tech.percent * tech.size : 0}
                      bg={tech.color}
                    >
                      <CountUp
                        start={0}
                        end={animate ? tech.percent : 0}
                        duration={3.5}
                        suffix="%"
                      />
                    </Pie>
                    <T m={'1rem 0'} text={'center'}>
                      {tech.name}
                    </T>
                  </div>
                ))}
              </Pies>
            </InnerPies>
          </Pies>
        ))}
      </Pies>
    </Wrapper>
  );
};

export default Statistics;
