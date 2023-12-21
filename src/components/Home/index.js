import { Button, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoIosPlay } from 'react-icons/io';

// eslint-disable-next-line consistent-return
export const NameAndPronounciation = ({ name }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPronounciation, setAudioPronounciation] = useState(null);

  useEffect(() => {
    // This useEffect will run on the client side after hydration
    setAudioPronounciation(new Audio('/pronounciation.mp3'));
    setIsHydrated(true);
  }, []);

  if (audioPronounciation) {
    audioPronounciation.onplaying = () => {
      setIsPlaying(true);
    };
    audioPronounciation.onended = () => {
      setIsPlaying(false);
    };
  }

  if (isHydrated)
    return (
      <Flex display="inline-block" color="white" lineHeight="1">
        <Flex>
          <Flex
            onClick={() => !isPlaying && audioPronounciation.play()}
            cursor="pointer"
            fontSize="15px"
            align="center"
            position="relative"
          >
            <IoIosPlay />
            <Text
              opacity={!isPlaying ? 1 : 0}
              visibility={!isPlaying ? 'visible' : 'hidden'}
              transition="opacity 0.6s ease-in-out, visibility 0.6s ease-in-out"
            >
              Play pronounciation
            </Text>
            <Text
              opacity={isPlaying ? 1 : 0}
              visibility={isPlaying ? 'visible' : 'hidden'}
              transition="opacity 0.6s ease-in-out, visibility 0.6s ease-in-out"
              position="absolute"
              left="10%"
            >
              Playing...
            </Text>
          </Flex>
        </Flex>
        <Text fontSize="22px" textDecor="underline">
          {name}
        </Text>
      </Flex>
    );
};

// eslint-disable-next-line consistent-return
export const MenuItem = ({ text }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const currentQuery = router.query;
  // const history = useHistory();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (hydrated)
    return (
      <Button
        textDecor="underline"
        bg="transparent"
        p="0"
        m="0"
        w="fit-content"
        height="fit-content"
        fontSize="22px"
        textTransform="capitalize"
        color="white"
        _hover={{
          bg: 'transparent',
        }}
        fontWeight="normal"
        _focus={{
          outline: 'none',
        }}
        _active={{
          bg: 'transparent',
        }}
        onClick={() => {
          currentQuery.showMenu = true;
          router.push({
            pathname: currentPath,
            query: currentQuery,
          });
        }}
      >
        {text}
      </Button>
    );
};

export default NameAndPronounciation;
