import { Box, Flex } from '@chakra-ui/react';

// Custom CSS for the scrolling animation
const scrollingAnimation = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

// Component that uses the custom CSS and applies the animation
export const ScrollingText = ({ skills }) => {
  return (
    <>
      <style>{scrollingAnimation}</style>
      <Box as="div" position="relative" width="full" overflow="hidden">
        <Box
          as="div"
          display="inline-flex"
          whiteSpace="nowrap"
          animation="scroll 50s linear infinite"
        >
          <Flex mr="4" gap={10} as="span" minW="max-content">
            {skills.map((skill) => (
              <Box
                as="span"
                minW="max-content"
                fontFamily="boldClash"
                fontSize="40px"
                color="black"
              >
                {skill}
              </Box>
            ))}
          </Flex>
          <Flex gap={10} as="span" minW="max-content">
            {skills.map((skill) => (
              <Box
                as="span"
                minW="max-content"
                fontFamily="boldClash"
                fontSize="40px"
                color="black"
              >
                {skill}
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default ScrollingText;
