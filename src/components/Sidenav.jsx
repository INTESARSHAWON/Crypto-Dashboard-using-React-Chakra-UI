import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import {Link} from "react-router-dom";

const Sidenav = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            link: "/transactions",
        }
    ];

  return ( 
  <Stack boxShadow={{
    base: "none",
    lg: "lg",
  }} w={{
    base: "full",
    lg: "16rem",
  }} h="100vh" justify="space-between" bg="white">
    <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">@ChakraProject</Heading>
        <Box mt="6" mx="3">
            {
                navLinks.map((nav)=> (
                    <Link to={nav.link} key={nav.text}>
                        <HStack py="3" px="4" color="#797E82" borderRadius="10px" _hover={{
                            bg:"#F3F3F7", color: "#171717"
                        }}>
                            <Icon as={nav.icon}/>
                            <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
                        </HStack>
                    </Link>    
                ))
            }
        </Box>
    </Box>    

    <Box mt="6" mx="3" mb="6">
        <Link to="/support">        
            <HStack py="3" px="4" color="#797E82" borderRadius="10px" _hover={{
                bg:"#F3F3F7", color: "#171717"
            }}>
                <Icon as={BiSupport}/>
                <Text fontSize="14px" fontWeight="medium">Support</Text>
            </HStack>
        </Link>    
    </Box>

  </Stack>
  );
};

export default Sidenav
