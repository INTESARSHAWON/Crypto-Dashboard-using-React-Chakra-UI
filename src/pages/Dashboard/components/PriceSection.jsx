import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";

const PriceSection = () => {
    const timestamps = ["5.00 PM", "6.00 PM", "7.00 PM", "8.00 PM", "9.00 PM"];

  return (
    <CustomCard>
        <Flex justify="space-between" align="top">
            <Stack>
                <HStack color="black.80">
                    <Text fontSize="sm">Wallet Balances</Text>
                </HStack>
                <HStack spacing={2} 
                    flexDirection={{
                    base: "column",
                    sm: "row",
                }}
                align={{
                    base: "flex-start",
                    sm: "center",
                }}
                >
            
                <HStack>
                    <Text textStyle="h2" fontWeight="medium">$ 22.394010</Text>
                    <HStack fontWeight="medium" color="green.500">
                        <Icon as={BsArrowUpRight}/>
                        <Text fontSize="sm" fontWeight="medium">22%</Text>
                    </HStack>
                </HStack>
                </HStack>
            </Stack>

            <HStack>
                <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
                <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
            </HStack>

        </Flex>

        <Tabs variant='soft-rounded'>
            <Flex justify="end">
                <TabList bg="black.5" p="3px">
                    {
                        ["1H","1D","1W","1M"].map((tab)=>(
                        <Tab 
                            key={tab} 
                            fontSize="sm" 
                            p="6px" 
                            borderRadius="4" 
                            _selected={{
                                bg: "white",
                            }}>
                                {tab}
                        </Tab>
                        ))
                    }
                </TabList>
            </Flex>
            <TabPanels>
                <TabPanel>
                    <Image width="100%" src="/graph.svg" mt="3rem"/> 
                    <HStack justify="space-between">
                    {
                    timestamps.map((timestamp)=>(
                        <Text key={timestamp} fontSize="sm" color="black.80">
                            {timestamp}
                        </Text>
                    ))
                    } 
                    </HStack>
                </TabPanel>
            </TabPanels>
        </Tabs>    
    </CustomCard>
  )
}

export default PriceSection