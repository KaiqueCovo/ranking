import { BsAwardFill } from 'react-icons/bs';
import { RiTrophyFill } from 'react-icons/ri';

import { Avatar } from '@/components';
import { StudentPoint } from '@/interface/studentPoint';
import { Box, Flex, theme, VStack, Text } from '@chakra-ui/react';

interface TopRankProps {
  topUsers: StudentPoint[];
}

export const TopRank = ({ topUsers }: TopRankProps): React.ReactElement => {
  const [first, second, third] = topUsers;

  return (
    <Flex justifyContent='center' alignItems='center'>
      <VStack w={150}>
        <RiTrophyFill size={80} color={theme.colors.yellow['700']} />
        <Text
          position='absolute'
          fontWeight='bold'
          top={10}
          color={theme.colors.white}
        >
          {third.totalPoints}
        </Text>
        <Box color={theme.colors.yellow['700']}>
          <Text display='flex'>
            <BsAwardFill size={20} />
          </Text>
          <Text display='flex'>
            <BsAwardFill size={20} />
          </Text>
        </Box>
        <Avatar src={third.student.avatar} name={third.student.user} />
        <Text fontSize={18} fontWeight='bold'>
          {third.student.name}
        </Text>
      </VStack>
      <VStack mb={16} w={170}>
        <RiTrophyFill size={80} color={theme.colors.yellow['400']} />
        <Text
          position='absolute'
          fontWeight='bold'
          top={2}
          color={theme.colors.white}
        >
          {first.totalPoints}
        </Text>
        <Box color={theme.colors.yellow['400']}>
          <Text display='flex'>
            <BsAwardFill size={20} />
          </Text>
          <Text display='flex'>
            <BsAwardFill size={20} />
          </Text>
        </Box>
        <Avatar src={first.student.avatar} name={first.student.user} />
        <Text fontSize={18} fontWeight='bold'>
          {first.student.name}
        </Text>
      </VStack>
      <VStack w={150}>
        <RiTrophyFill size={80} color={theme.colors.gray['400']} />
        <Text
          position='absolute'
          fontWeight='bold'
          top={10}
          color={theme.colors.white}
        >
          {second.totalPoints}
        </Text>
        <Box color={theme.colors.gray['400']}>
          <Text display='flex'>
            <BsAwardFill size={20} />
          </Text>
          <Text display='flex'>
            <BsAwardFill size={20} />
          </Text>
        </Box>
        <Avatar src={second.student.avatar} name={second.student.user} />
        <Box textAlign='center'>
          <Text fontSize={18} fontWeight='bold'>
            {second.student.name}
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};
