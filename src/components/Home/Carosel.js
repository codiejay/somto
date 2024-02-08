import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Slider from 'react-slick';

export const ExperienceCarousel = ({ showExperienceCarousel }) => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: -910, // Adjust this for faster or slower scrolling
    cssEase: 'linear',
  };

  return (
    <Box
      sx={{
        position: 'relative',
        '.slick-arrow': {
          display: 'none !important',
        },
      }}
      w="80%"
      className="slider-container"
      mt={4}
      onMouseEnter={() => {
        showExperienceCarousel();
      }}
    >
      <Slider {...settings}>
        <Box>
          <Box
            w="70px"
            borderRadius="100px"
            h="70px"
            background="url(/googleIcon.png) center no-repeat"
            backgroundSize="contain"
          />
        </Box>
        <Box>
          <Box
            w="70px"
            borderRadius="100px"
            h="70px"
            background="url(/hultIcon.png) center no-repeat"
            backgroundSize="contain"
          />
        </Box>
        <Box>
          <Box
            w="70px"
            borderRadius="100px"
            h="70px"
            background="url(/intelIcon.png) center no-repeat"
            backgroundSize="contain"
          />
        </Box>
        <Box>
          <Box
            w="70px"
            borderRadius="100px"
            h="70px"
            background="url(/morganstanleyIcon.jpeg) center no-repeat"
            backgroundSize="contain"
          />
        </Box>
        <Box>
          <Box
            w="70px"
            borderRadius="100px"
            h="70px"
            background="url(/techequityIcon.png) center no-repeat"
            backgroundSize="contain"
          />
        </Box>
      </Slider>
    </Box>
  );
};

export const WorksCarousel = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000, // Adjust this for faster or slower scrolling
    cssEase: 'linear',
    vertical: true,
  };

  return (
    <Flex
      sx={{
        position: 'relative',
        '.slick-arrow': {
          display: 'none !important',
        },
      }}
      w="90%"
      className="slider-container"
      mt={4}
    >
      <Slider {...settings}>
        <Box mb="1">
          <Heading fontSize="20px" fontFamily="productBold">
            IT Infractructure
          </Heading>
          <Text fontFamily="productRegular">
            I have worked on several IT infractructure projects that have
            greatly enhanced the companys security posture and protected against
            potential threats, I have a proven track record of delivering
            projects on time, within scope, and under budget.
          </Text>
        </Box>
        <Box mb="1">
          <Heading fontSize="20px" fontFamily="productBold">
            IT Infractructure
          </Heading>
          <Text fontFamily="productRegular">
            I have worked on several IT infractructure projects that have
            greatly enhanced the companys security posture and protected against
            potential threats, I have a proven track record of delivering
            projects on time, within scope, and under budget.
          </Text>
        </Box>
        <Box mb="1">
          <Heading fontSize="20px" fontFamily="productBold">
            IT Infractructure
          </Heading>
          <Text fontFamily="productRegular">
            I have worked on several IT infractructure projects that have
            greatly enhanced the companys security posture and protected against
            potential threats, I have a proven track record of delivering
            projects on time, within scope, and under budget.
          </Text>
        </Box>
      </Slider>
    </Flex>
  );
};
