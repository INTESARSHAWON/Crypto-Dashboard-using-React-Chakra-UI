import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="80px">
        <SupportCard
          leftComponent={<ContactCard/>} title="Contact Us" text="If You want to know more, feel free to ask"
          icon= {IoMdMail}
        />
        <SupportCard
          leftComponent={<InfoCard imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and corporate account services"
              tagText="Contact"
              inverted={true}/>} 
        
         title="Live Chat" text="Please let's have some chat with us"
         icon= {AiTwotoneMessage}
        />
        </Stack>
    </DashboardLayout>
  )
}

export default Support
