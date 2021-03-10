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
    name: 'HTML',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eos deleniti sit reprehenderit illum mollitia soluta dolorum voluptatem velit id aut voluptatibus accusamus atque ducimus odit quis commodi, consequuntur in?',
  },
  {
    name: 'CSS',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus aliquam ullam provident consequuntur, laudantium magni dolorem debitis sapiente hic eius inventore numquam aut tenetur nostrum ipsum odio voluptates! Autem.',
  },
  {
    name: 'SCSS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam omnis molestiae illum? Non pariatur totam ea, perferendis amet iste. Assumenda nemo amet iste nihil rem inventore eos, vero sapiente.',
  },
  {
    name: 'Bootstrap',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero perspiciatis possimus repellendus, nihil assumenda sint! Voluptate illum aperiam maxime. Illo magni commodi eum fugit quo ratione. Iusto dicta quod officia?',
  },
  {
    name: 'Webpack',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, cumque deleniti molestias illum voluptates enim quod officiis iure inventore ipsum magnam necessitatibus labore excepturi eveniet maiores non quidem nisi perspiciatis.',
  },
];
