import { Box, Heading, Flex, Table, Thead, Tbody, Tr, Th, Td, Button, HStack, Badge } from "@chakra-ui/react";
import { MdDashboard, MdPeople, MdContentCopy } from "react-icons/md";
import NextLink from 'next/link';
import { List, ListItem, ListIcon } from "@chakra-ui/react";

const AdminContentPage = () => {
  const content = [
    { id: 1, title: "새로운 청각장애인 지원 정책", author: "홍길동", date: "2025-10-28", status: "승인" },
    { id: 2, title: "코클리어 임플란트 최신 기술", author: "김철수", date: "2025-10-29", status: "대기" },
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
          콘텐츠 관리
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>제목</Th>
              <Th>작성자</Th>
              <Th>작성일</Th>
              <Th>상태</Th>
              <Th>관리</Th>
            </Tr>
          </Thead>
          <Tbody>
            {content.map((item) => (
              <Tr key={item.id}>
                <Td>{item.title}</Td>
                <Td>{item.author}</Td>
                <Td>{item.date}</Td>
                <Td>
                  <Badge colorScheme={item.status === "승인" ? "green" : "yellow"}>
                    {item.status}
                  </Badge>
                </Td>
                <Td>
                  <HStack spacing={2}>
                    {item.status === "대기" && <Button size="sm" colorScheme="green">승인</Button>}
                    {item.status === "대기" && <Button size="sm" colorScheme="orange">거부</Button>}
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

export default AdminContentPage;
