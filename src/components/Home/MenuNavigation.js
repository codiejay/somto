import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Experiences } from './Experience';
import { Works } from './Works';

export const MenuNavigation = ({ display }) => {
  const [width, setWidth] = useState('0%');
  const [showItems, setShowItems] = useState(false);
  const router = useRouter();
  const currentQuery = router.query;
  const currentPath = router.pathname;
  setTimeout(() => {
    if (display === 'flex') {
      setWidth('100%');
      setShowItems(true);
    } else {
      setWidth('0%');
      setShowItems(false);
    }
  }, 10);

  return (
    <Flex
      pos="absolute"
      top="0"
      w={width}
      h="100vh"
      left="0"
      backdropFilter="blur(10px)"
      bg="rgba(0, 0, 0, 0.5)"
      transition="width 0.5s ease-in-out"
      id="mainParent"
      onClick={(event) => {
        if (event.target.id !== 'mainParent') return;
        delete currentQuery.showMenu;
        router.push({
          pathname: currentPath,
          query: currentQuery,
        });
        setShowItems(false);
      }}
    >
      <Flex
        visibility={showItems ? 'visible' : 'hidden'}
        opacity={showItems ? '1' : '0'}
        w="80%"
        m="4% auto 0 auto"
        gap={4}
        align="start"
        justify="center"
        transition="opacity 0.6s ease-in-out, visibility 0.6s ease-in-out"
        onClick={(event) => {
          console.log(event.target);
        }}
        id="navigationFlex"
      >
        <Flex w="50%" m="0 auto" flexDir="column" gap={4}>
          <Experiences />
          <Contact />
        </Flex>
        <Flex w="50%" m="0 auto" h="98%" flexDir="column" gap={4}>
          <About />
          <Works />
        </Flex>
      </Flex>
    </Flex>
  );
};
