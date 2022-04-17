import { useEffect, useState } from 'react';

import { RankTable } from '@/components/RankTable';
import { TopRank } from '@/components/TopRank';
import { StudentPoint } from '@/interface/studentPoint';
import { fetchAllUsers } from '@/services/contentful/user';
import { Box, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

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

        const pointFields = points?.map((point) => point.fields);

        acc.push({
          totalPoints,
          points: pointFields,
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
          content='Ranking de desafios dos alunos da UC10'
        />
      </Head>
      <Box>
        <Flex direction='column' w='100%' my='6' maxW={1480} mx='auto' px='6'>
          {topRank.length === 3 && <TopRank topUsers={topRank} />}

          <RankTable users={ranking} />
        </Flex>
      </Box>
    </>
  );
};

export default Ranking;
