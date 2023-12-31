import React from "react";
// import {
//   Flex,
//   Link,
//   List,
//   ListItem,
//   Text,
//   Spacer,
//   Box,
// } from "@chakra-ui/react";

// import { TelegramIcon, TwitterIcon, DiscordIcon } from "components/icons/Icons";
import { BsDiscord, BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
const FooterLandingPage = () => {
  return (
    <div
      style={{
        zIndex: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>© 2023All Rights Reserved By SubQuest</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <BsTelegram cursor="pointer" size={32} />
        </div>
        <div>
          <AiFillTwitterCircle cursor="pointer" size={32} />
        </div>
        <div>
          <BsDiscord cursor="pointer" size={32} />
        </div>
      </div>
      {/* <SectionContainer>
        <Flex
          w="full"
          py="25px"
          alignItems="center"
          borderTop="1px solid #E3DFF3"
          flexDirection={{ base: "column-reverse", lg: "row" }}
        >
          <Text
            fontSize="md"
            h="30px"
            color={"gray.400"}
            textAlign={{
              base: "center",
              xl: "start",
            }}
            mb={{ base: "20px", xl: "0px" }}
          >
            {" "}
            &copy; {1900 + new Date().getYear()}
            <Text as="span" fontWeight="400" ms="4px">
              All Rights Reserved By
              <Link
                isExternal
                mx="3px"
                target="_blank"
                fontWeight="500"
                color={"gray.400"}
                href="https://www.inkwhale.net"
              >
                Ink Whale
              </Link>
            </Text>
          </Text>
          <Spacer py="8px" />
          <List display="flex">
            <ListItem
              me={{
                base: "20px",
                md: "44px",
              }}
            >
              <Link
                isExternal
                fontWeight="400"
                color={"gray.400"}
                href="https://t.me/inkwhale"
              >
                <Box w="20px" h="25px">
                  <TelegramIcon />
                </Box>
              </Link>
            </ListItem>
            <ListItem
              me={{
                base: "20px",
                md: "44px",
              }}
            >
              <Link
                isExternal
                fontWeight="400"
                color={"gray.400"}
                href="https://discord.com/"
              >
                <Box w="20px" h="25px">
                  <DiscordIcon />
                </Box>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                isExternal
                fontWeight="400"
                color={"gray.400"}
                href="https://twitter.com/inkwhale_net"
              >
                <Box w="20px" h="25px">
                  <TwitterIcon />
                </Box>
              </Link>
            </ListItem>
          </List>
        </Flex>
      </SectionContainer> */}
    </div>
  );
};

export default FooterLandingPage;
