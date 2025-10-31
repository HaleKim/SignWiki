import { Avatar, Box, Button, Divider, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack, Switch, FormControl, FormLabel } from "@chakra-ui/react";

const MyPage = () => {
  const user = {
    name: "홍길동",
    email: "user@example.com",
    avatar: "https://bit.ly/dan-abramov",
  };

  const applicationHistory = [
    { id: 1, title: "청각장애인 보조기기 지원", status: "승인" },
    { id: 2, title: "수어 통역 서비스", status: "대기" },
  ];

  const notifications = [
    { id: 1, message: "'수어 통역 서비스' 신청이 완료되었습니다." },
    { id: 2, message: "새로운 댓글이 달렸습니다." },
  ];

  const points = {
    current: 1200,
    history: [
      { id: 1, change: 100, reason: "게시글 작성" },
      { id: 2, change: -50, reason: "댓글 삭제" },
    ],
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={6}>
        마이페이지
      </Heading>
      <Tabs variant="enclosed-colored">
        <TabList>
          <Tab>프로필</Tab>
          <Tab>신청 내역</Tab>
          <Tab>알림</Tab>
          <Tab>포인트</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={4} align="start">
              <Avatar size="xl" name={user.name} src={user.avatar} />
              <Text><strong>이름:</strong> {user.name}</Text>
              <Text><strong>이메일:</strong> {user.email}</Text>
              <FormControl display="flex" alignItems="center" mt={4}>
                <FormLabel htmlFor="accessibility-mode" mb="0">
                  접근성 모드 (더미)
                </FormLabel>
                <Switch id="accessibility-mode" />
              </FormControl>
              <Button colorScheme="blue">프로필 수정</Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack divider={<Divider />} spacing={4} align="stretch">
              {applicationHistory.map((item) => (
                <Flex key={item.id} justify="space-between">
                  <Text>{item.title}</Text>
                  <Text color={item.status === "승인" ? "green.500" : "orange.500"}>
                    {item.status}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack divider={<Divider />} spacing={4} align="stretch">
              {notifications.map((item) => (
                <Text key={item.id}>{item.message}</Text>
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={4}>
              <Text fontSize="2xl">현재 포인트: {points.current}P</Text>
              <VStack divider={<Divider />} spacing={4} align="stretch">
                {points.history.map((item) => (
                  <Flex key={item.id} justify="space-between">
                    <Text>{item.reason}</Text>
                    <Text color={item.change > 0 ? "green.500" : "red.500"}>
                      {item.change > 0 ? `+${item.change}` : item.change}P
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default MyPage;
