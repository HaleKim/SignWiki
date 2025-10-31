import { Stack, Text, Link, VStack, Heading, Box, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useAuthState } from "react-firebase-hooks/auth";
import PageContent from "../components/Layout/PageContent";
import PostLoader from "../components/Loaders/PostLoader";
import { auth } from "../firebase/clientApp";

const Home: NextPage = () => {
  const [user, loadingUser] = useAuthState(auth);

  // Dummy data for demonstration
  const todaysNews = [
    { id: 1, title: "정부, 새로운 청각장애인 지원 정책 발표", community: "정책" },
    { id: 2, title: "서울시, 수어 통역 서비스 확대", community: "복지" },
    { id: 3, title: "코클리어 임플란트 최신 기술 동향", community: "의료" },
  ];

  const popularInfo = [
    { id: 1, title: "청각장애인을 위한 최고의 보청기 TOP 5", community: "의료" },
    { id: 2, title: "수어로 '사랑해'를 표현하는 다양한 방법", community: "수어" },
    { id: 3, title: "놓치기 쉬운 연말정산 꿀팁", community: "법률" },
  ];

  return (
    <PageContent>
      <VStack spacing={8} align="stretch">
        {/* Main Branding Section */}
        <VStack justify="center" align="center" py={10} spacing={4}>
          <Image src="/images/hello.png" height="100px" alt="SignWiki Logo" />
          <Heading as="h1" size="2xl">
            SignWiki
          </Heading>
          <Text>청각장애인을 위한 커뮤니티 및 정보 공유 플랫폼</Text>
        </VStack>

        {/* 오늘의 소식 */}
        <Box>
          <Heading size="md" mb={4}>
            오늘의 소식
          </Heading>
          <VStack spacing={2} align="stretch">
            {todaysNews.map((news) => (
              <Link key={news.id} href="#" _hover={{ textDecoration: "none" }}>
                <Box p={4} borderWidth="1px" borderRadius="md" _hover={{ bg: "gray.50" }}>
                  <Text fontWeight="bold">{news.title}</Text>
                  <Text fontSize="sm" color="gray.500">
                    [{news.community}]
                  </Text>
                </Box>
              </Link>
            ))}
          </VStack>
          <Link href="#" float="right" mt={2} color="blue.500">
            더보기
          </Link>
        </Box>

        {/* 인기 정보 */}
        <Box>
          <Heading size="md" mb={4}>
            인기 정보
          </Heading>
          <VStack spacing={2} align="stretch">
            {popularInfo.map((info) => (
              <Link key={info.id} href="#" _hover={{ textDecoration: "none" }}>
                <Box p={4} borderWidth="1px" borderRadius="md" _hover={{ bg: "gray.50" }}>
                  <Text fontWeight="bold">{info.title}</Text>
                  <Text fontSize="sm" color="gray.500">
                    [{info.community}]
                  </Text>
                </Box>
              </Link>
            ))}
          </VStack>
          <Link href="#" float="right" mt={2} color="blue.500">
            더보기
          </Link>
        </Box>
      </VStack>
    </PageContent>
  );
};

export default Home;
