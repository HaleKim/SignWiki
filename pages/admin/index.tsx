import { Box, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, Flex, List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdDashboard, MdPeople, MdContentCopy } from "react-icons/md";
import NextLink from 'next/link';

const AdminDashboard = () => {
  const stats = [
    { label: "총 사용자", value: "1,234", change: "+12%" },
    { label: "오늘 가입자", value: "56", change: "+5%" },
    { label: "총 정보 수", value: "5,678", change: "+200" },
    { label: "승인 대기", value: "89", change: "" },
  ];

  const AdminSidebar = () => (
    <Box w="250px" p={5} bg="gray.50" borderRight="1px" borderColor="gray.200">
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
          관리자 대시보드
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {stats.map((stat, index) => (
            <Stat key={index} p={5} shadow="md" border="1px" borderColor="gray.200" rounded="md">
              <StatLabel>{stat.label}</StatLabel>
              <StatNumber>{stat.value}</StatNumber>
              {stat.change && <StatHelpText>{stat.change}</StatHelpText>}
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default AdminDashboard;
