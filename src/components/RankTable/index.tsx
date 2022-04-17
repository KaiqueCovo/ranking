import { RiVipCrown2Fill } from 'react-icons/ri';

import { StudentPoint } from '@/interface/studentPoint';
import {
  Avatar,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  UnorderedList,
  useBreakpointValue,
  ListItem,
} from '@chakra-ui/react';

interface RankTableProps {
  users: StudentPoint[];
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
          {users.map((user) => (
            <Tr key={user.student.user}>
              <Td>
                <RiVipCrown2Fill color='colors.blue' />
              </Td>
              <Td>
                <Avatar
                  size='sm'
                  name={user.student.avatar}
                  src={user.student.avatar}
                />
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
                <Tooltip
                  hasArrow
                  bg='gray.500'
                  isDisabled={!user.totalPoints}
                  label={
                    <UnorderedList>
                      {user.points?.map((point) => (
                        <ListItem
                          key={`${point.motive}-${point.points}`}
                        >{`${point.motive} : ${point.points}`}</ListItem>
                      ))}
                    </UnorderedList>
                  }
                >
                  <Text as='span' cursor='pointer'>
                    {user.totalPoints}
                  </Text>
                </Tooltip>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
