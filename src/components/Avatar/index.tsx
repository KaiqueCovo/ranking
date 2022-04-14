import {
  Avatar as ChakraAvatar,
  AvatarProps as ChakraAvatarProps,
  Box,
  Flex,
  keyframes,
} from '@chakra-ui/react';

type AvatarProps = ChakraAvatarProps;

export const Avatar = (props: AvatarProps): React.ReactElement => {
  const size = '96px';
  const color = 'teal';

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      w='full'
      height={130}
      overflow='hidden'
    >
      <Box
        as='div'
        position='relative'
        w={size}
        h={size}
        _before={{
          // eslint-disable-next-line quotes
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
      >
        <ChakraAvatar size='full' position='absolute' top={0} {...props} />
      </Box>
    </Flex>
  );
};
