import { GetServerSidePropsContext } from "next";
import { Box, Heading, Text, VStack, SimpleGrid, AspectRatio } from "@chakra-ui/react";

// Dummy data for wiki entries
const wikiEntries = {
  daily: [
    { id: 1, term: "안녕하세요", description: "만나서 반갑게 인사할 때 사용하는 수어입니다.", videoUrl: "" },
    { id: 2, term: "감사합니다", description: "고마움을 표현할 때 사용하는 수어입니다.", videoUrl: "" },
  ],
  professional: [
    { id: 1, term: "법원", description: "재판을 하는 곳을 의미하는 수어입니다.", videoUrl: "" },
  ],
  expressions: [
    { id: 1, term: "기쁘다", description: "기쁜 감정을 표현하는 수어입니다.", videoUrl: "" },
  ],
};

const WikiCategoryPage = ({ category }) => {
  if (!category) {
    return <Text>카테고리를 찾을 수 없습니다.</Text>;
  }

  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={2}>{category.name}</Heading>
      <Text mb={10}>{category.description}</Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {category.entries.map((entry) => (
          <Box key={entry.id} p={5} borderWidth="1px" rounded="md" _hover={{ shadow: "md" }}>
            <Heading size="md">{entry.term}</Heading>
            <Text mt={2}>{entry.description}</Text>
            <AspectRatio ratio={16 / 9} mt={4}>
              <Box bg="gray.200" rounded="md">
                <Text color="gray.500" textAlign="center" pt="30%">비디오 준비 중</Text>
              </Box>
            </AspectRatio>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { wikiId } = context.query;

  const categories = {
    daily: { name: "일상생활", description: "일상생활에서 자주 사용하는 수어", entries: wikiEntries.daily },
    professional: { name: "전문용어", description: "법률, 의료 등 전문 분야의 수어", entries: wikiEntries.professional },
    expressions: { name: "감정표현", description: "다양한 감정을 나타내는 수어", entries: wikiEntries.expressions },
  };

  return {
    props: {
      category: categories[wikiId as string] || null,
    },
  };
}

export default WikiCategoryPage;
