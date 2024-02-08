import { Flex, Grid, Heading, Link } from '@chakra-ui/react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ExperienceCarousel, WorksCarousel } from './Carosel';

export const BottomNav = ({ showExperienceCarousel }) => {
  return (
    <Flex bg="white" w="100%" p="4" borderRadius="12px">
      <Flex w="25%" flexDir="column">
        <Heading fontSize="22px">Experiences</Heading>
        <ExperienceCarousel
          showExperienceCarousel={() => {
            showExperienceCarousel();
          }}
        />
      </Flex>
      <Flex w="70%" flexDir="column">
        <Heading fontSize="22px">Works</Heading>
        <WorksCarousel />
      </Flex>
      <Flex
        pl="2"
        w="30%"
        flexDir="column"
        h="fit-content"
        borderLeft="1px solid #e0dcd6"
        pb="2rem"
      >
        <Heading fontSize="22px">Contact</Heading>
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
          mt={4}
          w="100%"
          gridColumn={2}
          gridRow={1}
        >
          <Link
            href="https://www.linkedin.com/in/somtochukwuifeorah/"
            textDecor="underline"
            opacity="0.5"
            fontSize="16px"
            mr={4}
          >
            X
          </Link>
          <Link
            href="https://www.linkedin.com/in/somtochukwuifeorah/"
            textDecor="underline"
            opacity="0.5"
            fontSize="16px"
            mr={4}
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/in/somtochukwuifeorah/"
            textDecor="underline"
            opacity="0.5"
            fontSize="16px"
            mr={4}
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/somtochukwuifeorah/"
            textDecor="underline"
            opacity="0.5"
            fontSize="16px"
            mr={4}
          >
            Linkedin
          </Link>
          <Link
            href="https://www.linkedin.com/in/somtochukwuifeorah/"
            textDecor="underline"
            opacity="0.5"
            fontSize="16px"
            mr={4}
          >
            Youtube
          </Link>
        </Grid>
      </Flex>
    </Flex>
  );
};
