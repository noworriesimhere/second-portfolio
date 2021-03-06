const textArray = [
  'think of new ideas',
  'breakdance',
  'do web development',
  'use Macs',
  `think if you click this enough you'll know my whole life`,
  'started learning on Udemy',
  'cook ethnic meals',
  'push to Github',
  'express frustration in commit messages',
  'need to refactor more',
  'am working at being a Google ninja',
  'write clean code',
  'wonder why I started coding',
  'love learning languages',
  'click on purple links often',
  'am on Stack Overflow a lot',
  'sometimes look angry coding',
  'am not a nerd',
  'take long walks on the beach',
  `think you've been clicking this a lot`,
  `type this fast...`,
];

export const shuffledArray = textArray.sort(() => Math.random() - 0.5);

export const projects = [
  {
    name: 'Wedding Site',
    date: 'January 2021',
    description: `React <br />
      Firebase <br />
      Context API <br />
      Styled Components
      `,
    src: '/portfolio-wedding.png',
    url: 'https://wedding-project-f3ecc.web.app/',
    github: 'https://github.com/noworriesimhere/wedding-site',
    key: 4,
  },
  {
    name: 'First Portfolio',
    date: 'December 2020',
    description: `HTML <br />
    PostCSS <br />
    Javascript <br />
    Webpack
    `,
    src: '/portfolio-first.png',
    url: 'https://alantran.netlify.app/',
    github: 'https://github.com/noworriesimhere/personal-portfolio',
    key: 3,
  },
  {
    name: 'Custom Cakes',
    date: 'November 2020',
    description: `HTML <br />
    PostCSS <br />
    Javascript <br />
    Webpack
    `,
    src: '/portfolio-baking.png',
    url: 'https://createbakery.netlify.app/',
    github: 'https://github.com/noworriesimhere/create-bakery',
    key: 2,
  },
  {
    name: 'NYC Tours',
    date: 'October 2020',
    description: `HTML <br />
    Bootstrap 4 <br />
    Javascript <br />
    `,
    src: '/portfolio-city.png',
    url: 'https://parallaxtemplate.vercel.app/',
    github: 'https://github.com/noworriesimhere/parallaxtemplate',
    key: 1,
  },
];
