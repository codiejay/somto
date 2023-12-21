import { MenuItem, NameAndPronounciation } from '@/components/Home';
import { MenuNavigation } from '@/components/Home/MenuNavigation';
import PageContainer from '@/components/PageContainer';
import { Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Home = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const currentQuery = router.query;

  useEffect(() => {
    console.log(currentQuery.showMenu);
    if (currentQuery.showMenu === 'true') {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [currentQuery]);
  useEffect(() => {
    if (!isOpen) {
      onToggle();
    } // This will set isOpen to true
  }, []);
  return (
    <PageContainer>
      <Flex h="100vh" w="100vw" p="10vh 20vh" flexDir="column">
        <Flex
          bg={`url("/landingImg.png")`}
          width="100%"
          height={isOpen ? '400px' : '0px'}
          bgPos="center"
          bgSize="cover"
          borderRadius="20px"
          transition="height 0.5s ease-in-out"
        />
        <Flex mt="20" flexDir="column">
          <Heading
            color="white"
            fontFamily="midClash"
            textTransform="uppercase"
            fontSize="6rem"
            whiteSpace="pre-line"
            lineHeight="90px"
            mb="8"
          >
            {'Cyber Security\nProfessional'}
          </Heading>
          <Text
            fontFamily="midClash"
            fontSize="25px"
            css={{ textWrap: 'balance' }}
            textAlign="left"
            color="#9c9c9c"
            lineHeight="50px"
          >
            Hello there, I am {''}
            {<NameAndPronounciation name="Somtochukwu Ifeorah" />}, A Technical
            Project Manager and Cyber Security Enthusiast. Learn more{' '}
            {<MenuItem text="about" />} my professional background. See my most{' '}
            {<MenuItem text="recent works" />}. Check out my{' '}
            {<MenuItem text="experiences" />} and feel free to{' '}
            {<MenuItem text="reach out" />} directly to me regarding
            collaborations and opportunities.
          </Text>
        </Flex>
      </Flex>
      <MenuNavigation display={showMenu ? 'flex' : 'none'} />
    </PageContainer>
  );
};

export default Home;
