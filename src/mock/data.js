import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'My Resume | Bao Nguyen', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My online portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My Resume',
  name: 'Bao Nguyen',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.jpg',
  paragraphOne:
    'Interested in Computer Science, Robotics, and general technologies. Currently, I am focusing on web-development and looking for an internship to gaining more experience in the field. Undergraduate at Seneca College and planning to getting bachelor’s degree as well as higher academic results.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://1drv.ms/b/s!ApSgs3NaWeddk6M7Nm1FxwJHN2Gg8Q?e=Eb8vwA', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Web developer/ Tech Support',
    info: 'Creating interface by using LabVIEW NXG tools fetching data from Azure SQL server',
    info2: 'Advisor: Nguyen Lan – STIC Director Company website: https://www.stic.com.vn/en/',
    url: 'http://quantraccongtrinh.com.vn/',
    // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'International Business Specialist',
    info:
      'Importing, configuring, and optimizing sensor, datalogger products for construction projects',
    info2: 'Company website: http://bkg.com.vn/en/',
    url: 'http://bkg.com.vn/en/',
    // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Freelancer',
    info:
      'On the way to achieve my study abroad dream. In this phase of my life, I am tring to accomplish my education goals. However, I am still looking for other opportunnities to sharping my skills as an Web Developer',

    url: 'http://baonguyen.ninja/',
    repo: 'https://github.com/pgbnguyen', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'pgbnguyen@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pgbnguyen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/pgbnguyen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
