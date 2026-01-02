import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Chamba",
  lastName: "Nanang",
  name: `Chamba Nanang`,
  role: "Software Engineer and Techpreneur",
  avatar: "/images/avatar.jpg",
  email: "cnanang@st.ug.edu.gh",
  location: "Africa/Accra", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about entrepreneurship, technology, and building successful startups</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chamba-nanang",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SwapGPA</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-swapgpa-student-ecommerce-platform",
  },
  subline: (
    <>
    I'm Chamba, a software engineer and techpreneur, founder and CEO of <Text as="span" size="xl" weight="strong">SwapGPA</Text>, where I build innovative solutions. After hours, I continue to innovate and create.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a passionate and self-driven Full Stack Engineer with a strong background in web development, software engineering, and digital media. With several years of hands-on experience building and deploying scalable applications, I specialize in creating seamless user experiences from front to back, transforming complex ideas into functional, elegant solutions. Currently, I'm pursuing a Bachelor's degree in Computer Science at the University of Ghana while working as a Full Stack Developer at Sikano Ltd., where I contribute to developing innovative systems that improve performance and usability. My experience spans JavaScript (React, Node.js), Python, PHP, and cloud technologies, alongside a strong interest in UI/UX design and graphic media. I take pride in being a self-taught engineer who's constantly exploring new technologies, collaborating on impactful projects, and pushing the boundaries of what's possible in the tech space. My goal is to continue growing as a developer, mentor others, and build solutions that make a real difference.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SwapGPA",
        timeframe: "November 2025 - Present",
        role: "Chief Executive Officer",
        achievements: [
          <>
            Founded and lead SwapGPA, a student-focused e-commerce platform connecting students across campuses.
          </>,
          <>
            Built and scaled a comprehensive marketplace for student goods and services.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "SwapGPA Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Pollvite",
        timeframe: "August 2024 - Present",
        role: "Product Manager / Frontend Developer / Head of Sales Marketing",
        achievements: [
          <>
            Led product development and marketing initiatives for a dynamic tech platform.
          </>,
          <>
            Developed frontend solutions and managed sales/marketing strategies to drive user growth.
          </>,
        ],
        images: [],
      },
      {
        company: "Errand Technology",
        timeframe: "October 2024 - Present",
        role: "Co-Founder / Senior Software Engineer",
        achievements: [
          <>
            Co-founded a technology company focused on innovative solutions.
          </>,
          <>
            Led software engineering efforts and contributed to company growth and product development.
          </>,
        ],
        images: [],
      },
      {
        company: "The Perry Effect",
        timeframe: "December 2021 - Present",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Developed and maintained complex software systems for a media/entertainment company.
          </>,
          <>
            Collaborated on projects that enhanced user experience and system performance.
          </>,
        ],
        images: [],
      },
      {
        company: "Sikano Ltd.",
        timeframe: "February 2025 - October 2025",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Built full-stack applications improving system performance and usability.
          </>,
          <>
            Worked with modern web technologies to deliver scalable solutions.
          </>,
        ],
        images: [],
      },
      {
        company: "Effervetech Company Limited",
        timeframe: "June 2022 - November 2025",
        role: "Web Software Engineer",
        achievements: [
          <>
            Developed web applications and software solutions for various clients.
          </>,
          <>
            Contributed to projects that enhanced digital experiences and functionality.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Ghana",
        description: <>Bachelor of Science in Computer Science (January 2025 - June 2028)</>,
      },
      {
        name: "Our Lady of Grace Senior High School",
        description: <>High School Diploma (April 2022 - September 2024)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full-Stack JavaScript Development",
        description: (
          <>Building scalable web applications using React, Node.js, and modern JavaScript frameworks.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & Cloud Technologies",
        description: (
          <>Developing server-side applications with Python, PHP, and cloud technologies for robust solutions.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "AWS",
            icon: "aws",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
