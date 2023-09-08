import React from 'react'
import { Box, Image, Text,Grid,GridItem } from '@chakra-ui/react'
import { ChatState } from "../Context/ChatProvider";

const CardLeft = ({ DifferentUsers,data }) => {
    const { selectedChat,setSelectedChat,recipientID,
          setRecipientID } = ChatState();
    if (!DifferentUsers || !data) { return null; }
          //  if (!DifferentUsers.messages) return null;
    //if(!DifferentUsers.messages) return null;
    const localdata = DifferentUsers.map((elem) => elem.messages);
    console.log(recipientID)

    return (
    <div>
        {
            DifferentUsers.map((elem) => (
                <Box key={elem.id} textAlign='left' p={3} onClick={() => {
                    setSelectedChat(elem.messages.data[0].from.id === data.id ? (elem.messages.data[0].to.data[0].name) : (elem.messages.data[0].from.name))
                    setRecipientID(elem.messages.data[0].from.id === data.id ? (elem.messages.data[0].to.data[0].id) : (elem.messages.data[0].from.id))
                    //                  localdata.forEach((messages) => {
                    //   const firstMessage = messages.data[0];
                    //   if (!firstMessage) return null;

                    //   if (selectedChat === firstMessage.from.name) {
                    //     setRecipientID(firstMessage.from.id);
                    //   } else {
                    //     setRecipientID(firstMessage.to.data[0].id);
                    //   }
                
                }} bg={selectedChat === elem.messages.data[0].to.data[0].name || selectedChat === elem.messages.data[0].from.name ? "#DFDFDF" : "white"} borderWidth={1} as="article" justifyContent='space-between'>
                <Grid
                    h={14}
                    templateRows='repeat(4, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                >
                    <GridItem rowSpan={4} colSpan={1} >
                        <Image src='https://static-00.iconduck.com/assets.00/check-box-unchecked-icon-2048x2048-8nyerd5c.png' alt='Check' h={5} mt={2} ml={2} />
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1} >
                            <Text fontWeight='semibold' fontSize={14} noOfLines={1}>{elem.messages.data[0].from.id===data.id?(elem.messages.data[0].to.data[0].name):(elem.messages.data[0].from.name)}</Text>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1} pl={12} >
                        <Text color='grey' textAlign='left' fontSize={12}>10 m</Text>
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={1} ><Text textAlign='left' fontSize={13}>Facebook DM</Text></GridItem>
                </Grid>
                <Grid
                    h={6}
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    alignContent='center'
                    verticalAlign='center'
                >
                    <GridItem colSpan={5} rowSpan={1} fontSize={13}>
                        <Text fontWeight='semibold' noOfLines={1}>{ elem.messages.data[0].message}</Text>
                    </GridItem>
                    <GridItem colSpan={5} rowSpan={1} fontSize={13}>
                        <Text color='grey' textAlign='left' fontSize={14} noOfLines={1}>10 m</Text>
                    </GridItem>
                </Grid>
            </Box>)
            )
        }
         </div>

  )
 }
export default CardLeft
