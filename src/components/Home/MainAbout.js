import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const MainAbout = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null;
  return (
    <Flex p="4" w="100%" h="fit-content" bg="white" borderRadius="12px">
      <Flex w="60%" flexDir="column">
        <Heading
          lineHeight="0.8"
          color="black"
          fontFamily={'boldClash'}
          fontSize="70px"
          mb="6"
        >
          Somtochukwu {<br />} Ifeorah
        </Heading>
        <Text css={{ textWrap: 'balance' }} w="60%" fontFamily="productRegular">
          I am Somtochukwu Ifeorah, a results-driven Project Manager with a
          passion for Cyber Security. With over five years of experience in
          leading successful projects from initiation to closure, I have a
          proven track record of delivering projects on time, within scope, and
          under budget. <Divider my="2" borderColor="transparent" /> Throughout
          my career, I have demonstrated a strong ability to collaborate with
          cross-functional teams, manage stakeholders, and prioritize project
          requirements. My expertise in project management methodologies such as
          Agile, Waterfall, and Scrum, allows me to tailor my approach to fit
          the unique needs of each project.{' '}
          <Divider my="2" borderColor="transparent" /> As a Cyber Security
          enthusiast, I stay up-to-date with the latest industry trends and
          developments. I understand the importance of proactive risk management
          and strive to integrate security best practices into all aspects of my
          project management methodology.{' '}
          {/* <Divider my="2" borderColor="transparent" /> In my current role at
          Morgan Stanley, I am responsible for leading complex projects related
          to Cyber Security initiatives. I am proud to have successfully
          implemented several initiatives that have greatly enhanced the
          company's security posture and protected against potential threats.{' '}
          <Divider my="2" borderColor="transparent" /> I am always seeking new
          opportunities to expand my knowledge and expertise in project
          management and Cyber Security. Let's connect and explore ways we can
          collaborate to achieve our professional goals. */}
        </Text>
        <Button
          fontFamily="productRegular"
          w="fit-content"
          color="white"
          backgroundColor="black"
          mt={6}
          _hover={{ backgroundColor: 'black' }}
          _focusVisible={{ outline: 'none' }}
          _active={{ backgroundColor: 'black', outline: 'none' }}
        >
          Read More
        </Button>
      </Flex>
      <Flex w="40%" bg="url(/aboutImg.png) center" borderRadius="12px" />
    </Flex>
  );
};
