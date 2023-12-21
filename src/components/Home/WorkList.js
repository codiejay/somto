import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { MdInsertLink } from 'react-icons/md';

export const MainWorkList = ({ name, link, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      h="100%"
      w="50%"
      bg="url('/projectbgOne.svg')"
      bgPos="center"
      bgSize="cover"
      flexDir="column"
      px="4"
      py="0"
      justify="center"
      borderRadius="12px"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        position="absolute"
        top="2%"
        right="3%"
        w={isHovered ? '27%' : '14%'}
        transition="all 0.5s ease-in-out"
        as={Link}
        href={link}
        p="2"
        borderRadius="100px"
        bg="white"
        display="flex"
        gap={1}
      >
        <MdInsertLink fontSize="22px" />
      </Box>
      <Heading fontFamily="boldClash" fontSize="55px">
        {name}
      </Heading>
      <Text fontSize="14px">{description}</Text>
    </Flex>
  );
};

export const SecondaryWorkList = ({ name, link, description, bg }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      py={2}
      h="50%"
      w="100%"
      bg={bg}
      bgPos="center"
      bgSize="cover"
      flexDir="column"
      px="4"
      justify="center"
      borderRadius="12px"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        position="absolute"
        top="2%"
        right="3%"
        w={isHovered ? '42.5%' : '10%'}
        transition="all 0.5s ease-in-out"
        as={Link}
        href={link}
        p="2"
        borderRadius="100px"
        bg="white"
        display="flex"
        gap={1}
      >
        <MdInsertLink fontSize="22px" />
      </Box>
      <Heading fontFamily="boldClash" fontSize="35px">
        {name}
      </Heading>
      <Text fontSize="14px">{description}</Text>
    </Flex>
  );
};
