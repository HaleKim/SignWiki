import { Box, Heading, Text, VStack, Divider, HStack, Tag } from "@chakra-ui/react";
import React from "react";

const ServiceStatusPage: React.FC = () => {
  const dummyApplications = [
    {
      id: "APP001",
      service: "청각장애인 보조기기 지원",
      date: "2025-10-25",
      status: "승인 대기",
    },
    {
      id: "APP002",
      service: "수어 통역 서비스",
      date: "2025-10-20",
      status: "승인 완료",
    },
    {
      id: "APP003",
      service: "언어재활 서비스",
      date: "2025-10-15",
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
        신청 진행 현황
      </Heading>

      <VStack spacing={6} align="stretch">
        {dummyApplications.map((app) => (
          <Box key={app.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <HStack justifyContent="space-between" mb={2}>
              <Text fontSize="lg" fontWeight="bold">
                {app.service}
              </Text>
              <Tag size="md" variant="solid" colorScheme={getStatusColor(app.status)}>
                {app.status}
              </Tag>
            </HStack>
            <Text fontSize="sm" color="gray.500">
              신청 번호: {app.id}
            </Text>
            <Text fontSize="sm" color="gray.500">
              신청일: {app.date}
            </Text>
            <Divider mt={4} />
            <Text mt={4} fontSize="md">
              현재 {app.service} 신청이 {app.status} 상태입니다.
            </Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ServiceStatusPage;
