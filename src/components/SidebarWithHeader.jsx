import {
    Avatar,
    Box,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss, FaHeart } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch } from "react-icons/fi";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import Logo from "../assets/logo_100.png";
import { ConnectSample } from "./ConnectSample";

export default function SidebarWithHeader() {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const color = useColorModeValue("gray.600", "gray.300");

    const ConnectToWallet = (
        <Box
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            as="a"
            aria-label="Connect to wallet"
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            bg="gray.50"
            borderWidth="1px"
            borderColor="gray.200"
            px="1em"
            minH="36px"
            rounded="md"
            fontSize="sm"
            color="gray.800"
            outline="0"
            transition="all 0.3s"
            _hover={{
                bg: "gray.100",
                borderColor: "gray.300",
            }}
            _active={{
                borderColor: "gray.200",
            }}
            _focus={{
                boxShadow: "outline",
            }}
            ml={5}
        >
            <Icon as={FaHeart} w="4" h="4" color="red.500" mr="2" />
            <Box as="strong" lineHeight="inherit" fontWeight="semibold">
                Connect to Wallet
            </Box>
        </Box>
    );

    const NavItem = (props) => {
        const { icon, children, ...rest } = props;
        return (
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color={useColorModeValue("inherit", "gray.400")}
                _hover={{
                    bg: useColorModeValue("gray.100", "gray.900"),
                    color: useColorModeValue("gray.900", "gray.200"),
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
                {...rest}
            >
                {icon && (
                    <Icon
                        mx="2"
                        boxSize="4"
                        _groupHover={{
                            color: color,
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        );
    };

    const SidebarContent = (props) => (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue("white", "gray.800")}
            borderColor={useColorModeValue("inherit", "gray.700")}
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                <Image
                    w={200}
                    alt="Borrower"
                    src={Logo}
                />
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <NavItem icon={MdHome}>Dashboard</NavItem>
                <NavItem icon={FaRss}>Borrow</NavItem>
                <NavItem icon={HiCollection}>Assets</NavItem>
                <NavItem icon={FaClipboardCheck}>NFT</NavItem>
                {/*<NavItem icon={HiCode} onClick={integrations.onToggle}>
                    Integrations
                    <Icon
                        as={MdKeyboardArrowRight}
                        ml="auto"
                        transform={integrations.isOpen && "rotate(90deg)"}
                    />
                </NavItem>
                <Collapse in={integrations.isOpen}>
                    <NavItem pl="12" py="2">
                        Shopify
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Slack
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Zapier
                    </NavItem>
    </Collapse>*/}
                <NavItem icon={AiFillGift}>Analytics</NavItem>
            </Flex>
        </Box>
    );
    return (
        <Box
            as="section"
            bg={useColorModeValue("gray.50", "gray.700")}
            minH="100vh"
        >
            <SidebarContent display={{ base: "none", md: "unset" }} />
            <Drawer
                isOpen={sidebar.isOpen}
                onClose={sidebar.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Flex
                    as="header"
                    align="center"
                    justify="space-between"
                    w="full"
                    px="4"
                    bg={useColorModeValue("white", "gray.800")}
                    borderBottomWidth="1px"
                    borderColor={useColorModeValue("inherit", "gray.700")}
                    h="14"
                >
                    <IconButton
                        aria-label="Menu"
                        display={{ base: "inline-flex", md: "none" }}
                        onClick={sidebar.onOpen}
                        icon={<FiMenu />}
                        size="sm"
                    />
                    {/*<InputGroup w="96" display={{ base: "none", md: "flex" }}>
                        <InputLeftElement color="gray.500">
                            <FiSearch />
                        </InputLeftElement>
                        <Input placeholder="Search for articles..." />
    </InputGroup>*/}

                    {ConnectToWallet}

                    {/*<Flex align="center">
                        <Icon color="gray.500" as={FaBell} cursor="pointer" />
                        <Avatar
                            ml="4"
                            size="sm"
                            name="anubra266"
                            src="https://avatars.githubusercontent.com/u/30869823?v=4"
                            cursor="pointer"
                        />
                    </Flex>*/}
                </Flex>

                <Box as="main" p="4">
                    {/* Add content here, remove div below  */}
                    <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
                </Box>
            </Box>
        </Box>
    );
}
