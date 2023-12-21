import { Flex, Heading } from '@chakra-ui/react';
import { ScrollingText } from './Marquee';

// eslint-disable-next-line import/prefer-default-export
export const About = () => {
  return (
    <Flex
      p="4"
      w="100%"
      h="fit-content"
      bg="white"
      borderRadius="12px"
      flexDir="column"
    >
      <Heading fontFamily={'midClash'}>Skills</Heading>

      <ScrollingText
        skills={[
          'Python',
          'CyberSecurity',
          'CyberSecurity Incident Response',
          'IT Audit',
          'Analytical Skills',
          'Scrum',
          'Microsoft Power BI',
          'Product Development',
        ]}
      />
      <ScrollingText
        skills={[
          'IT Audit',
          'Analytical Skills',
          'Scrum',
          'Microsoft Power BI',
          'Product Development',
          'Python',
          'CyberSecurity',
          'CyberSecurity Incident Response',
        ]}
      />
      <ScrollingText
        skills={[
          'Microsoft Power BI',
          'Product Development',
          'Python',
          'CyberSecurity',
          'CyberSecurity Incident Response',
          'IT Audit',
          'Analytical Skills',
          'Scrum',
        ]}
      />
      <ScrollingText
        skills={[
          'Python',
          'CyberSecurity',
          'CyberSecurity Incident Response',
          'IT Audit',
          'Analytical Skills',
          'Scrum',
          'Microsoft Power BI',
          'Product Development',
        ]}
      />
      <ScrollingText
        skills={[
          'IT Audit',
          'Analytical Skills',
          'Scrum',
          'Microsoft Power BI',
          'Product Development',
          'Python',
          'CyberSecurity',
          'CyberSecurity Incident Response',
        ]}
      />
      <ScrollingText
        skills={[
          'Python',
          'CyberSecurity',
          'CyberSecurity Incident Response',
          'IT Audit',
          'Analytical Skills',
          'Scrum',
          'Microsoft Power BI',
          'Product Development',
        ]}
      />
    </Flex>
  );
};
