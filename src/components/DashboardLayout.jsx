import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidenav from "./Sidenav"
import TopNav from "./TopNav"
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({title, children}) => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Flex>
        <Box 
            display={{
            base: "none",
            lg: "flex",
        }} >
          <Sidenav/>
        </Box>

        <SideDrawer isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen}/>
          <Container maxW="62rem" bg="red">
            {children}
          </Container>
        </Box>
    </Flex>
  )
}

export default DashboardLayout
