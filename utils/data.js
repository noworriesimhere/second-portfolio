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

export const technologies = [
  {
    name: 'HTML / CSS / Bootstrap / Javascript',
    description: `Shortly after the pandemic started, I started learning the basics of the web with Colt Steele's Udemy course on Web Development. <br/> <br/>I learned the basics of the web, as well as how the front end worked together with HTML, CSS, and Javascript. His course also showed me how to leverage Bootstrap for quick projects.`,
  },
  {
    name: 'Node.js / Express / Mongoose / MongoDB',
    description: `In the same Colt Steel course, I learned to put together a simple app with a REST API. <br/> <br/> I also learned how to serve web pages with Express using EJS to render the content, while fetching the data from a non-relational database. <br /> <br /> I didn't include that course project in my portfolio, since it wasn't actually my code.`,
  },
  {
    name: 'Git / Webpack / SCSS / BEM ',
    description: `I took another Udemy course by Brad Schiff that explored the general workflow of a developer. <br /> <br /> It taught me how to configure Webpack, use SCSS(with PostCSS), and BEM methodology to simplify the work, as well as to organize my code. <br /> <br /> It also taught me the value of version control.`,
  },
  {
    name: 'React / Redux / Firebase',
    description: `Andrei Neagoie's Udemy course taught me the basics of React, Redux, and Firebase. <br/> <br/> After dealing with Node/Express/Mongoose/MongoDB, learning Firebase was a dream! <br /> <br /> I also learned to leverage Context API and Redux Saga for future applications.`,
  },
  {
    name: 'Next.js',
    description: `This year I've been hearing a lot about Gatsby and Next as tools for React development. <br/><br/>I used Brad Traversy and Net Ninja's YouTube series on Next.js to learn the basics <br/><br/>This portfolio is built in Next.js and hosted on Vercel.`,
  },
];
