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
  'am working at being a Googling ninja',
  'wonder why I started coding',
  'love learning languages',
  'click on purple links often',
  'am on Stack Overflow a lot',
  'sometimes look angry coding',
  'am not a nerd',
  'take long walks on the beach',
  `think you've been clicking this a lot`,
  `type this fast...`,
  'can design your website',
  'help businesses with their sites',

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
    key: 6,
  },
  {
    name: 'Green Ink',
    date: 'May 2021',
    description: `WordPress <br />
      PHP <br />
      CSS <br />
      `,
    src: '/portfolio-greenink.png',
    url: 'https://greenink.us.com',
    key: 5,
  },
  {
    name: 'Cali Fashion',
    date: 'April 2021',
    description: `WordPress <br />
      Elementor <br />
      PHP <br />
      CSS <br />
      `,
    src: '/portfolio-califashion.png',
    url: 'https://californiafashion.net',
    key: 4,
  },
  {
    name: 'Freelance Site',
    date: 'December 2020',
    description: `HTML <br />
    PostCSS <br />
    Javascript <br />
    Webpack
    `,
    src: '/portfolio-first.png',
    url: 'https://alantran.tech/',
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
    description: `In spring of 2020, with a bit of extra time on my hands, I started learning code. <br/> <br/>I learned the basics of the web, as well as how the front end worked together with HTML, CSS, and Javascript. One course I took on Udemy also showed me how to leverage Bootstrap for quick projects.`,
  },
  {
    name: 'Node.js / Express / Mongoose / MongoDB',
    description: `After understanding the basics of front end code, I started to explore how I could use the same Javascript for the back end. <br /> <br /> I learned to put together a simple app with a REST API. <br/> <br/> I also learned how to serve web pages with Express using EJS to render the content, while fetching the data from a non-relational database. <br /> <br />`,
  },
  {
    name: 'Git / Webpack / SCSS / BEM ',
    description: `After understanding a bit of how the back end works, I started learning about workflows and automated tools. <br /> <br /> I started to use version control, file bundling, CSS pre-processors, and organized CSS classes to optimize my workflow`,
  },
  {
    name: 'React / Redux / Firebase',
    description: `After dealing with manual configs for Webpack, and server configs for Node and Express, diving into React and Firebase was a dream! <br /> <br /> Around this time I familiarized myself with Redux, althought personally I've been using the Context API for state management`,
  },
  {
    name: 'Next.js',
    description: `This year I've been hearing a lot about Gatsby and Next.js as tools for React development. <br/><br/>I began to learn the basics of Next.js and Static Site Generation. <br/><br/>This portfolio is built in Next.js and hosted on Vercel.`,
  },
  {
    name: 'PHP / Wordpress / Elementor',
    description: `Despite being an older language, PHP and Wordpress still make up the majority of the web. <br/><br/> Having learned Javascript made learning PHP fairly easy. <br/><br/> I took what I learned to set up an ecommerce shop with Wordpress, Woocommerce, and Elementor.`,
  },
];
