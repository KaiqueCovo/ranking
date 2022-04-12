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
  points: number;
  student: {
    name: string;
    user: string;
    avatar: string;
  }
}


const Ranking: NextPage = (): React.ReactElement => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const [ranking, setRanking] = useState<any[]>([]);

  useEffect(() => {
    async function teste(): Promise<void> {
      const allUsers = await fetchAllUsers();

      console.log(allUsers);

      const ranking = allUsers.reduce((acc, elem) => {
        const { points: pointsField, user, name, avatar } = elem.fields;
        const { points } = pointsField?.fields || {};

        const findIndex = acc.findIndex(rank => rank.student.user === user);

        if(findIndex > -1) {
          acc[findIndex].points = acc[findIndex].points + points;
        } else {
          acc.push({
            points,
            student: {
              user,
              name,
              avatar
            }
          });
        }

        return acc;
      }, [] as StudentPoint[]);

      console.log('POINTS', ranking);
      // setRanking(points);
    }

    teste();
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
