import { useEffect, useState } from 'react';

import { RankTable } from '@/components/RankTable';
import { TopRank } from '@/components/TopRank';
import { fetchAllUsers } from '@/services/contentful/user';
import { Box, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

interface StudentPoint {
  totalPoints: number;
  student: {
    name: string;
    user: string;
    avatar: string;
  };
}

const Ranking: NextPage = (): React.ReactElement => {
  const [topRank, setTopRanking] = useState<StudentPoint[]>([]);
  const [ranking, setRanking] = useState<StudentPoint[]>([]);

  useEffect(() => {
    (async function (): Promise<void> {
      const allUsers = await fetchAllUsers();

      const ranking = allUsers.reduce((acc, elem) => {
        const { points, user, name, avatar } = elem.fields;

        const totalPoints =
          points?.reduce((acc, point) => acc + point.fields.points, 0) || 0;

        acc.push({
          totalPoints,
          student: {
            user,
            name,
            avatar,
          },
        });

        return acc;
      }, [] as StudentPoint[]);

      ranking.sort(function (a, b) {
        return b.totalPoints - a.totalPoints;
      });

      const topRank = ranking.splice(0, 3);

      setRanking(ranking);
      setTopRanking(topRank);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Ranking - UC10</title>
        <meta
          name='description'
          content='Ranking de desafios para engajar alunos da UC10'
        />
      </Head>
      <Box>
        <Flex direction='column' w='100%' my='6' maxW={1480} mx='auto' px='6'>
          {topRank.length > 2 && <TopRank topUsers={topRank} />}

          <RankTable users={ranking} />
        </Flex>
      </Box>
    </>
  );
};

export default Ranking;
