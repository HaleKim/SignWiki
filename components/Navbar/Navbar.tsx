
import { auth } from "@/firebase/clientApp";

import { Button, Flex, Image, Link, Switch, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import NextLink from "next/link";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

/**
 * Creates a navbar component which contains the following elements:
 *
 * 	- Logo which is visible on mobile and desktop sizes
 * 	- Logo name which is visible only on desktop sizes
 * 	- Search bar which is visible on mobile and desktop sizes and resizes dynamically
 *  - Directory of communities that the user is subscribed to (only displayed when authenticated)
 *
 *
 * Navbar changes depending on whether the user is authenticated.
 * If the user is authenticated, it will display the:
 *  - User menu with name or username
 *  - Buttons (create post, notifications, messages, etc)
 *  - Community directory menu which would display all the subscribed communities and create community option
 *
 * If the user is not authenticated, it will display the:
 *  - Authentication buttons (log in and sing up)
 *  - User menu with different options
 * @returns {React.FC} - Navbar component
 *
 * @requires ./RightContent - content displaying authentication buttons or actions
 * @requires ./SearchInput - Search field
 * @requires ./Directory - showing community menu button
 */
const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth); // will be passed to child components
  const { onSelectMenuItem } = useDirectory();

  return (
    <Flex
      bg="white"
      height="50px"
      padding="6px 10px"
      justify={{ md: "space-between" }}
      position="sticky"
      top="4px"
      zIndex="999"
      // Rounded props
      border="1px solid"
      borderColor="gray.300"
      borderRadius={10}
      m={{ base: 1, md: 1.5 }}
      shadow="lg"
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
      >
        {/* Logo which is always visible */}
        <Image src="/images/logo.svg" height="30px" alt="Website logo" ml={1} />

        {/* Logo name not visible on mobile */}
        <Image
          src="/images/logo_text.svg"
          height="30px"
          display={{ base: "none", md: "unset" }}
          alt="Website text logo"
        />
      </Flex>
      {/* New Navigation Links */}
      <Flex align="center" ml={{ base: 0, md: 2 }} display={{ base: "none", md: "flex" }}>
        <NextLink href="/" passHref>
          <Button as={Link} variant="ghost" mr={2}>홈</Button>
        </NextLink>
        <NextLink href="/services" passHref>
          <Button as={Link} variant="ghost" mr={2}>지원/복지 서비스</Button>
        </NextLink>
        <NextLink href="/submit" passHref>
          <Button as={Link} variant="ghost" mr={2}>정보 등록</Button>
        </NextLink>
        <NextLink href="/mypage" passHref>
          <Button as={Link} variant="ghost" mr={2}>마이페이지</Button>
        </NextLink>
        <NextLink href="/wiki" passHref>
          <Button as={Link} variant="ghost" mr={2}>수어 위키</Button>
        </NextLink>
      </Flex>

      {/* 3D Avatar Toggle (Placeholder) */}
      <Flex align="center" mr={2}>
        <Text fontSize="sm" mr={2}>3D 아바타</Text>
        <Switch id="avatar-toggle" size="md" />
      </Flex>
      <SearchInput />
      {/* Changes depending on whether user is authenticated or not */}
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
