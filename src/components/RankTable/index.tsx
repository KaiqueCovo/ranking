import { RiVipCrown2Fill } from 'react-icons/ri';

import {
  Avatar,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';

interface Users {
  totalPoints: number;
  student: {
    name: string;
    user: string;
    avatar: string;
  }
}

interface RankTableProps {
  users: Users[]
}


export const RankTable = ({ users }: RankTableProps): React.ReactElement => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      flex='1'
      borderRadius={8}
      border='1px solid'
      borderColor='#E2E8F0'
      p='2'
    >
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            {isWideVersion && <Th>Avatar</Th>}
            <Th>Aluno</Th>
            <Th>Pontos</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            users.map(user => (
              <Tr key={user.student.user}>
                <Td>
                  <RiVipCrown2Fill color='colors.blue' />
                </Td>
                <Td>
                  <Avatar size='sm' name='Dan Abrahmov' src={user.student.avatar} />
                </Td>
                {isWideVersion && (
                  <Td>
                    <Box>
                      <Text fontWeight='bold'>{user.student.name}</Text>
                      <Text fontSize='small' color='gray.300'>
                        {`https://github.com/${user.student.user}`}
                      </Text>
                    </Box>
                  </Td>
                )}
                <Td fontWeight='bold' px='6'>
                  {user.totalPoints}
                </Td>

              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </Box>
  );
};
