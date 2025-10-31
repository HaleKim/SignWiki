import { Box, Heading, Flex, Table, Thead, Tbody, Tr, Th, Td, Button, HStack } from "@chakra-ui/react";
import { MdDashboard, MdPeople, MdContentCopy } from "react-icons/md";
import NextLink from 'next/link';
import { List, ListItem, ListIcon } from "@chakra-ui/react";

const AdminUsersPage = () => {
  const users = [
    { id: 1, name: "홍길동", email: "gildong@example.com", joinDate: "2025-10-01" },
    { id: 2, name: "김철수", email: "chulsoo@example.com", joinDate: "2025-10-15" },
  ];

  const AdminSidebar = () => (
    <Box w="250px" p={5} bg="gray.50" borderRight="1px" borderColor="gray.200" minH="100vh">
      <Heading size="md" mb={10}>관리자 메뉴</Heading>
      <List spacing={3}>
        <ListItem>
          <NextLink href="/admin" passHref>
            <Flex align="center" as="a"><ListIcon as={MdDashboard} />대시보드</Flex>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/admin/users" passHref>
            <Flex align="center" as="a"><ListIcon as={MdPeople} />가입자 관리</Flex>
          </NextLink>
        </ListItem>
        <ListItem>
          <NextLink href="/admin/content" passHref>
            <Flex align="center" as="a"><ListIcon as={MdContentCopy} />콘텐츠 관리</Flex>
          </NextLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Flex>
      <AdminSidebar />
      <Box flex="1" p={8}>
        <Heading as="h1" size="lg" mb={6}>
          가입자 관리
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>이름</Th>
              <Th>이메일</Th>
              <Th>가입일</Th>
              <Th>관리</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.joinDate}</Td>
                <Td>
                  <HStack spacing={2}>
                    <Button size="sm">수정</Button>
                    <Button size="sm" colorScheme="red">삭제</Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default AdminUsersPage;
