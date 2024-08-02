import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";


const Transactions = () => {

    const transactions = [
        {
            id: "1",
            icon: FaBangladeshiTakaSign,
            text: "INR Deposit",
            amount: "$ + 71,690",
            timestamp: "2024-06-02 7:06 PM",
        },
        {
            id: "2",
            icon: FaBtc,
            text: "BTC Sell",
            amount: "$ - 121,690",
            timestamp: "2024-06-04 4:27 PM",
        },
        {
            id: "3",
            icon: FaBangladeshiTakaSign,
            text: "INR Deposit",
            amount: "$ + 52,240",
            timestamp: "2024-06-06 9:21 PM",
        }
    ]

  return (
    <CustomCard h="full">
        <Text fontSize="sm" color="black.80" mb="6">
            Recent Transactions
        </Text>

        <Stack spacing="4">
            {
                transactions.map((transaction, i)=>(
                    <Fragment key={transaction.id}>
                        {i != 0 && <Divider/>}
                        <Flex gap="4">
                            <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
                                <Icon as={transaction.icon}></Icon>
                            </Grid>
                            <Flex justify="space-between" w="full">
                                <Stack spacing={0}>
                                    <Text textStyle="h6">
                                        {transaction.text}
                                    </Text>
                                    <Text fontSize="sm" color="black.40">
                                        {transaction.timestamp}
                                    </Text>    
                                </Stack>
                                <Text textStyle="h6">
                                    {transaction.amount}
                                </Text>
                            </Flex>
                        </Flex>
                    </Fragment>
                ))
            }
        </Stack>
        <Button w="full" colorScheme="gray" mt="6">View All</Button>
    </CustomCard>
  )
}

export default Transactions
