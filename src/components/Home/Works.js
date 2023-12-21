import { Flex, Heading } from '@chakra-ui/react';
import { MainWorkList, SecondaryWorkList } from './WorkList';

// eslint-disable-next-line import/prefer-default-export
export const Works = () => {
  return (
    <Flex
      flexDir="column"
      p="4"
      w="100%"
      h="100%"
      bg="white"
      borderRadius="12px"
    >
      <Heading fontFamily={'midClash'}>Works</Heading>
      <Flex flexDir="row" h="100%" gap={4}>
        <MainWorkList
          name="Monster X COD"
          link="https://www.linkedin.com/in/somtochukwuifeorah/details/skills/"
          description="Along with the great folks at Monster, I and my team build and
            deploy the collaboration between two giants of their respective
            industries, Monster Energy and Call of Duty."
          isHovered={false}
          linkText="Visit"
        />
        <Flex flexDir="column" h="100%" w="100%" gap={4}>
          <SecondaryWorkList
            name="Project Management"
            link="https://www.linkedin.com/in/somtochukwuifeorah/details/skills/"
            description="
            A simple walkthrough of the project management process I use for my projects."
            linkText="Open Document"
            bg="url('/projectbgTwo.svg')"
          />
          <SecondaryWorkList
            name="Thesis on AI vs Cybersecurity"
            link="https://www.linkedin.com/in/somtochukwuifeorah/details/skills/"
            description="
            My well researed thesis on the impact of AI on Cybersecurity.
            This focuses on the impact of AI on Cybersecurity and how it can be used to improve the security of systems."
            linkText="Open Document"
            bg="url('/projectbgThree.svg')"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
