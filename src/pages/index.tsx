import { useEffect, useState } from 'react';
import { RiTrophyFill } from 'react-icons/ri';

import { Avatar } from '@/components';
import { RankTable } from '@/components/RankTable';
import { fetchAllUsers } from '@/services/contentful/user';
import {
  Box,
  Flex,
  theme,
  VStack,
} from '@chakra-ui/react';
import { NextPage } from 'next';

interface StudentPoint {
  totalPoints: number;
  student: {
    name: string;
    user: string;
    avatar: string;
  }
}


const Ranking: NextPage = (): React.ReactElement => {
  const [ranking, setRanking] = useState<StudentPoint[]>([]);

  useEffect(() => {

    (async function (): Promise<void> {
      const allUsers = await fetchAllUsers();

      const ranking = allUsers.reduce((acc, elem) => {
        const { points, user, name, avatar } = elem.fields;

        const totalPoints = points?.reduce((acc, point) => acc + point.fields.points, 0) || 0;

        acc.push({
          totalPoints,
          student: {
            user,
            name,
            avatar
          }
        });

        return acc;
      }, [] as StudentPoint[]);

      setRanking(ranking);
    })();
  }, []);

  return (
    <Box>
      <Flex direction='column' w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Flex justifyContent='center' alignItems='center'>
          <VStack w={150}>
            <RiTrophyFill size={80} color={theme.colors.yellow['700']} />
            <Avatar />
          </VStack>
          <VStack mb={16} w={170}>
            <RiTrophyFill size={80} color={theme.colors.yellow['300']} />
            <Avatar />
          </VStack>
          <VStack w={150}>
            <RiTrophyFill size={80} color={theme.colors.gray['400']} />
            <Avatar />
          </VStack>
        </Flex>
        <RankTable users={ranking}  />
      </Flex>
    </Box>
  );
};

export default Ranking;
