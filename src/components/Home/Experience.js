import { Button, Flex, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { experienceList } from 'src/utils/experience';

const ExperienceBox = ({
  name,
  description,
  duration,
  position,
  location,
  icon,
}) => {
  return (
    <Flex flexDir="row" align="start" justify="flex-start" gap={2}>
      <Image src={icon} alt={name} boxSize="30px" />
      <Flex flexDir="column" fontFamily="productLight">
        <Flex color="grey" flexDir="column" gap="3px" lineHeight="17px" mb={4}>
          <Heading color="black" fontSize="20px" fontFamily="boldClash">
            {position}
          </Heading>
          <Text>{name}</Text>
          <Text>{duration}</Text>
          <Text>{location}</Text>
        </Flex>
        <Flex w="97%">
          <Text css={{ textWrap: 'balance' }} fontSize="15px">
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
// eslint-disable-next-line import/prefer-default-export
export const Experiences = ({ closeExperienceCarousel }) => {
  return (
    <Flex
      p="4"
      w="100%"
      h="60vh"
      bg="white"
      borderRadius="12px"
      flexDir="column"
    >
      <HStack justify="space-between">
        <Heading fontFamily={'midClash'}>Experience</Heading>
        <Button
          bg="black"
          color="white"
          _hover={{
            backgroundColor: 'black',
          }}
          onClick={() => {
            closeExperienceCarousel();
          }}
        >
          Close
        </Button>
      </HStack>

      <Flex
        w="90%"
        mt={6}
        gap={8}
        flexDir="column"
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '2px',
            height: '3px',
          },
          '&::-webkit-scrollbar-track': {
            width: '2px',
            height: '3px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'black',
            borderRadius: '24px',
          },
        }}
      >
        {experienceList.map((experience) => (
          <ExperienceBox {...experience} />
        ))}
      </Flex>
    </Flex>
  );
};
