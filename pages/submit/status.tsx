import { Box, Heading, Text, VStack, Divider, HStack, Tag } from "@chakra-ui/react";
import React from "react";

const RegistrationStatusPage: React.FC = () => {
  const dummyRegistrations = [
    {
      id: "REG001",
      title: "정부, 새로운 청각장애인 지원 정책 발표",
      date: "2025-10-28",
      status: "승인 대기",
    },
    {
      id: "REG002",
      title: "서울시, 수어 통역 서비스 확대",
      date: "2025-10-27",
      status: "승인 완료",
    },
    {
      id: "REG003",
      title: "코클리어 임플란트 최신 기술 동향",
      date: "2025-10-26",
      status: "반려",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "승인 대기":
        return "orange";
      case "승인 완료":
        return "green";
      case "반려":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="lg" mb={6}>
        정보 등록 상태 확인
      </Heading>

      <VStack spacing={6} align="stretch">
        {dummyRegistrations.map((reg) => (
          <Box key={reg.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <HStack justifyContent="space-between" mb={2}>
              <Text fontSize="lg" fontWeight="bold">
                {reg.title}
              </Text>
              <Tag size="md" variant="solid" colorScheme={getStatusColor(reg.status)}>
                {reg.status}
              </Tag>
            </HStack>
            <Text fontSize="sm" color="gray.500">
              등록 번호: {reg.id}
            </Text>
            <Text fontSize="sm" color="gray.500">
              등록일: {reg.date}
            </Text>
            <Divider mt={4} />
            <Text mt={4} fontSize="md">
              현재 '{reg.title}' 정보 등록이 {reg.status} 상태입니다.
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default RegistrationStatusPage;
