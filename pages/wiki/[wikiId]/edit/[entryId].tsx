import { Box, Heading, Text, VStack, HStack, Button, AspectRatio, Textarea, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const SignSubtitleEditPage: React.FC = () => {
  const router = useRouter();
  const { wikiId, entryId } = router.query;

  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={6}>
        수어 자막 수정: {entryId} ({wikiId})
      </Heading>

      <VStack spacing={8} align="stretch">
        {/* Video and Webcam Section */}
        <HStack spacing={8} align="start">
          <Box flex={1}>
            <Text fontSize="xl" mb={2}>원본 비디오</Text>
            <AspectRatio ratio={16 / 9}>
              <Box bg="gray.200" rounded="md">
                <Text color="gray.500" textAlign="center" pt="30%">원본 비디오 플레이어</Text>
              </Box>
            </AspectRatio>
          </Box>
          <Box flex={1}>
            <Text fontSize="xl" mb={2}>웹캠 녹화</Text>
            <AspectRatio ratio={16 / 9}>
              <Box bg="red.100" rounded="md">
                <Text color="red.500" textAlign="center" pt="30%">웹캠 미리보기 / 녹화 영역</Text>
              </Box>
            </AspectRatio>
            <Button mt={4} colorScheme="green" width="full">녹화 시작/중지 (더미)</Button>
          </Box>
        </HStack>

        {/* Timeline Section */}
        <Box>
          <Text fontSize="xl" mb={2}>타임라인</Text>
          <Box bg="blue.100" h="100px" rounded="md" p={4}>
            <Text color="blue.700" textAlign="center">비디오 타임라인 (구현 예정)</Text>
          </Box>
        </Box>

        {/* Subtitle Editing Area */}
        <Box>
          <Text fontSize="xl" mb={2}>자막 편집</Text>
          <FormControl mb={4}>
            <FormLabel>수어 용어</FormLabel>
            <Input placeholder="수어 용어를 입력하세요" value={entryId} isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>설명</FormLabel>
            <Textarea placeholder="수어에 대한 설명을 입력하세요" rows={5} />
          </FormControl>
        </Box>

        <HStack justifyContent="flex-end">
          <Button variant="outline" onClick={() => router.back()}>취소</Button>
          <Button colorScheme="blue">수정 완료 (더미)</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default SignSubtitleEditPage;