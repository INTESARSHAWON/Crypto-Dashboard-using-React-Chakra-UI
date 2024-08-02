import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai";


const PortfolioSection = () => {
  return (
    <HStack bg="white" 
        borderRadius="xl" 
        p="6" 
        justify="space-between" 
        flexDirection={{
            base: "column",
            xl: "row",
        }}
        align={{
            base: "flex-start",
            xl: "center",
        }}
        spacing={{
            base: 4,
            xl: 0,
        }}
        >
        <HStack spacing={{
                    base: 0,
                    xl: 7,
                }}
                flexDirection={{
                    base: "column",
                    xl: "row",
                }}
                align={{
                    base: "flex-start",
                    xl: "center",
                }}>
            <Stack>
                <HStack color="black.80">
                    <Text fontSize="sm">Total Portfolio Value</Text>
                    <Icon as={AiOutlineInfoCircle}/>
                </HStack>
                <Text textStyle="h2" fontWeight="medium">$ 112,312.24</Text>
            </Stack>
        
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
                        <Text textStyle="h2" fontWeight="medium">$ 22.394010</Text> <Tag colorScheme="gray" fontWeight="medium">BTC</Tag>
                    </HStack>
                    <HStack>
                        <Text textStyle="h2" fontWeight="medium">$ 1300.00</Text> <Tag colorScheme="gray" fontWeight="medium">BDT</Tag>
                    </HStack>
                </HStack>
            </Stack>
        </HStack>

        <HStack>
            <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
            <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
        </HStack>

    </HStack>
  )
}

export default PortfolioSection
