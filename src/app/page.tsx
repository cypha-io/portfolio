import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, home, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    image: home.image,
    path: home.path,
  });
}

export default function Home() {
  const structure = [
    {
      title: "Introduction",
      display: true,
      items: [],
    },
    {
      title: "Work Experience",
      display: true,
      items: ["SwapGPA", "Pollvite", "Errand Technology", "The Perry Effect", "Sikano Ltd.", "Effervetech Company Limited"],
    },
    {
      title: "Studies",
      display: true,
      items: ["University of Ghana", "Our Lady of Grace Senior High School"],
    },
    {
      title: "Technical skills",
      display: true,
      items: ["Full-Stack JavaScript Development", "Backend & Cloud Technologies"],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={home.title}
        description={home.description}
        path={home.path}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${home.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {true && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={{
            tableOfContent: { display: true, subItems: false }
          }} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {true && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id="Introduction"
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {true && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href="https://cal.com"
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {true && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <>
                I'm a passionate and self-driven Full Stack Engineer with a strong background in web development, software engineering, and digital media. With several years of hands-on experience building and deploying scalable applications, I specialize in creating seamless user experiences from front to back, transforming complex ideas into functional, elegant solutions. Currently, I'm pursuing a Bachelor's degree in Computer Science at the University of Ghana while working as a Full Stack Developer at Sikano Ltd., where I contribute to developing innovative systems that improve performance and usability. My experience spans JavaScript (React, Node.js), Python, PHP, and cloud technologies, alongside a strong interest in UI/UX design and graphic media. I take pride in being a self-taught engineer who's constantly exploring new technologies, collaborating on impactful projects, and pushing the boundaries of what's possible in the tech space. My goal is to continue growing as a developer, mentor others, and build solutions that make a real difference.
              </>
            </Column>
          )}

          {true && (
            <>
              <Heading as="h2" id="Work Experience" variant="display-strong-s" marginBottom="m">
                Work Experience
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {[
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
                ].map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement, index) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {true && (
            <>
              <Heading as="h2" id="Studies" variant="display-strong-s" marginBottom="m">
                Studies
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {[
                  {
                    name: "University of Ghana",
                    description: <>Bachelor of Science in Computer Science (January 2025 - June 2028)</>,
                  },
                  {
                    name: "Our Lady of Grace Senior High School",
                    description: <>High School Diploma (April 2022 - September 2024)</>,
                  },
                ].map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {true && (
            <>
              <Heading
                as="h2"
                id="Technical skills"
                variant="display-strong-s"
                marginBottom="40"
              >
                Technical skills
              </Heading>
              <Column fillWidth gap="l">
                {[
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
                    images: [
                      {
                        src: "/images/projects/project-01/cover-04.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                      },
                    ],
                  },
                ].map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
