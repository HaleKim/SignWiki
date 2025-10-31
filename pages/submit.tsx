import { authModalState } from "@/atoms/authModalAtom";
import PageContent from "@/components/Layout/PageContent";
import AuthButtons from "@/components/Navbar/RightContent/AuthButtons";
import NewPostForm from "@/components/Posts/NewPostForm";
import { auth } from "@/firebase/clientApp";
import { Box, Stack, Text, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import Link from "next/link";

const SubmitPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <PageContent>
      <>
        <HStack justifyContent="space-between" p="14px 0px">
          <Text fontSize="20pt" fontWeight={700} color="black">
            정보 등록하기
          </Text>
          <Link href="/submit/status" passHref>
            <Button colorScheme="teal" variant="outline">
              등록 상태 확인
            </Button>
          </Link>
        </HStack>
        {user ? (
          <NewPostForm user={user} isGenericSubmit={true} />
        ) : (
          <Stack
            justifyContent="center"
            align="center"
            bg="white"
            p={5}
            borderRadius={10}
          >
            <Text fontWeight={600}>로그인 후 정보를 등록할 수 있습니다.</Text>
            <Stack direction="row" spacing={2} ml={4}>
              <AuthButtons />
            </Stack>
          </Stack>
        )}
      </>
      <></>
    </PageContent>
  );
};
export default SubmitPage;
