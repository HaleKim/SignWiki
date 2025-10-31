import { Box, Heading, Text, VStack, SimpleGrid, LinkBox, LinkOverlay } from "@chakra-ui/react";
import NextLink from 'next/link';

const WikiPage = () => {
  const wikiCategories = [
    { id: "daily", name: "일상생활", description: "일상생활에서 자주 사용하는 수어" },
    { id: "professional", name: "전문용어", description: "법률, 의료 등 전문 분야의 수어" },
    { id: "expressions", name: "감정표현", description: "다양한 감정을 나타내는 수어" },
  ];

  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={6}>
        수어 위키
      </Heading>
      <Text mb={10}>찾고 싶은 수어를 카테고리에서 선택하거나 검색해보세요.</Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {wikiCategories.map((category) => (
          <LinkBox as="article" key={category.id} p={6} borderWidth="1px" rounded="md" _hover={{ shadow: "lg", transform: "translateY(-2px)", transition: "all 0.2s" }}>
            <Heading size="md" my={2}> 
              <NextLink href={`/wiki/${category.id}`} passHref>
                <LinkOverlay>{category.name}</LinkOverlay>
              </NextLink>
            </Heading>
            <Text>{category.description}</Text>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WikiPage;
