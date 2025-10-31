import { Box, Button, Divider, Heading, ListItem, OrderedList, Stack, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Textarea, HStack } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

const ServicesPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: "청각장애인 보조기기 지원",
      description: "보청기, 인공와우 등 보조기기 구매 시 일부 금액을 지원합니다.",
    },
    {
      title: "수어 통역 서비스",
      description: "관공서, 병원 등 방문 시 수어 통역사를 지원합니다.",
    },
    {
      title: "언어재활 서비스",
      description: "청각장애 아동 및 성인을 위한 언어재활 프로그램을 제공합니다.",
    },
    {
      title: "취업 지원 프로그램",
      description: "청각장애인의 취업 및 직업 훈련을 지원합니다.",
    },
  ];

  const handleApplyClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    onOpen();
  };

  return (
    <Box p={8}>
      <HStack justifyContent="space-between" mb={6}>
        <Heading as="h1" size="lg">
          지원/복지 서비스
        </Heading>
        <Link href="/services/status" passHref>
          <Button colorScheme="teal" variant="outline">
            신청 진행 현황
          </Button>
        </Link>
      </HStack>

      <OrderedList spacing={8}>
        {services.map((service, index) => (
          <ListItem key={index}>
            <Stack direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems={{ base: "flex-start", md: "center" }}>
              <Box>
                <Heading as="h3" size="md">
                  {service.title}
                </Heading>
                <Text color="gray.600" mt={1}>
                  {service.description}
                </Text>
              </Box>
              <Button colorScheme="blue" mt={{ base: 2, md: 0 }} onClick={() => handleApplyClick(service.title)}>
                신청하기
              </Button>
            </Stack>
            <Divider mt={8} />
          </ListItem>
        ))}
      </OrderedList>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedService} 신청</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>이름</FormLabel>
              <Input placeholder="이름을 입력하세요" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>연락처</FormLabel>
              <Input placeholder="연락처를 입력하세요" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>신청 내용</FormLabel>
              <Textarea placeholder="신청 내용을 상세히 입력하세요" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              신청 제출 (더미)
            </Button>
            <Button onClick={onClose}>취소</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ServicesPage;

