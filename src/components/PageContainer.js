import { Box, Flex, useColorMode, VStack } from '@chakra-ui/react';
import MovingGradientBox from './Gradient/VerticalGradient';

const generateSpeed = () => Math.random() * 10 + 1;
const PageContainer = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      justify="center"
      h="100vh"
      bg={colorMode === 'light' ? 'black' : 'black'}
      transition="background 100ms linear"
      zIndex={-1}
      w="100%"
      overflow="hidden"
    >
      <Box w="100%" position="fixed" opacity="0.4" overflow="hidden">
        <Flex justify="space-between" w="100%" opacity="0.6">
          {Array.from({ length: 7 }).map((item) => (
            <MovingGradientBox key={item} speed={generateSpeed()} />
          ))}
        </Flex>
        <Flex
          opacity="0.6"
          position="fixed"
          top="-30%"
          justify="space-between"
          w="100%"
          transform="rotate(90deg)"
        >
          {Array.from({ length: 7 }).map((item) => (
            <MovingGradientBox
              key={item}
              speed={generateSpeed()}
              height="120vw"
            />
          ))}
        </Flex>
      </Box>
      <Flex
        zIndex={500}
        maxW={{
          base: '100%',
          md: '90%',
          lg: '90%',
        }}
      >
        {children}
      </Flex>
    </VStack>
  );
};

export default PageContainer;
