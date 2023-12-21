import { Box, keyframes } from '@chakra-ui/react';

// Define the keyframes for the moving gradient
const moveGradient = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
`;

const MovingGradientBox = ({ speed = 10, height }) => {
  // Apply the animation to the Box component
  const animation = `${moveGradient} ${speed}s cubic-bezier(0.18, 0.89, 0.32, 1.28) infinite`;

  return (
    <Box
      w="3px"
      bgGradient="linear(to bottom, transparent, green.300, green.500, transparent)"
      h={height || '100vh'}
      bgSize="100% 200%"
      backgroundPosition="0 0"
      animation={animation}
    />
  );
};

export default MovingGradientBox;
