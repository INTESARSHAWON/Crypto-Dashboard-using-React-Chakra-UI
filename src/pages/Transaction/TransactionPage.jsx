import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import { AiOutlineDownload } from "react-icons/ai"
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {

  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 154,
    },
    {
      name: "Withdraw",
      count: 214,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];


  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload}/>}> Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" w="full" display="flex" justifyContent="space-between">
            <HStack>
              {
                tabs.map((tab)=>(<Tab key={tab.name} display="flex" gap="2" pb="4">
                                    {tab.name} <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag> 
                                  </Tab>))
              }

            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents='none'>
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type='tel' placeholder='Search...' />
            </InputGroup>  
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>  
  )
}

export default TransactionPage
