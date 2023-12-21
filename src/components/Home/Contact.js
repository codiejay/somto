import { Flex, Heading, Link, Text } from '@chakra-ui/react';

// eslint-disable-next-line import/prefer-default-export
export const Contact = () => {
  return (
    <Flex
      p="4"
      w="100%"
      h="30vh"
      bg="white"
      borderRadius="12px"
      flexDir="column"
    >
      <Heading fontFamily={'midClash'}>Contact</Heading>
      <Flex mt={8}>
        <Text
          fontSize="30px"
          color="grey"
          fontFamily="productRegular"
          fontWeight="400"
        >
          See what I am up with my personal life on the{' '}
          {
            <Link
              fontFamily="productBold"
              textDecor="underline"
              color="black"
              href="https://www.linkedin.com/in/somtochukwuifeorah/details/skills/"
            >
              gram
            </Link>
          }
          , check out my views on{' '}
          <Link
            fontFamily="productBold"
            textDecor="underline"
            color="black"
            href="https://www.linkedin.com/in/somtochukwuifeorah/details/skills/"
          >
            X
          </Link>{' '}
          and catch my pov right on{' '}
          <Link
            fontFamily="productBold"
            textDecor="underline"
            color="black"
            href="https://www.linkedin.com/in/somtochukwuifeorah/details/skills/"
          >
            Youtube
          </Link>
          . Or send an{' '}
          <Link
            fontFamily="productBold"
            textDecor="underline"
            color="black"
            href="https://www.linkedin.com/in/somtochukwuifeorah/details/skills/"
          >
            email
          </Link>{' '}
          if that`s easier
        </Text>
      </Flex>
    </Flex>
  );
};
