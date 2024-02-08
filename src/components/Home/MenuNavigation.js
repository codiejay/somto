import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BottomNav } from './BottomNav';
import { Experiences } from './Experience';
import { MainAbout } from './MainAbout';

export const MenuNavigation = ({ display }) => {
  const [width, setWidth] = useState('0%');
  const [displayExperienceCarousel, setDisplayExperienceCarousel] =
    useState(false);
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

  const showExperienceCarousel = () => {
    setDisplayExperienceCarousel(true);
  };

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
        display={display}
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
        h="fit-content"
        flexDir="column"
      >
        {displayExperienceCarousel ? (
          <Experiences
            closeExperienceCarousel={() => {
              setDisplayExperienceCarousel(false);
            }}
          />
        ) : (
          <MainAbout />
        )}

        <BottomNav
          showExperienceCarousel={() => {
            showExperienceCarousel();
          }}
        />
        {/* <Flex w="50%" m="0 auto" flexDir="column" gap={4}>
          <Experiences />
          <Contact />
        </Flex>
        <Flex w="50%" m="0 auto" h="98%" flexDir="column" gap={4}>
          <About />
          <Works />
        </Flex> */}
      </Flex>
    </Flex>
  );
};
