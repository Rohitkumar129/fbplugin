import React from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import { ChatState } from '../Context/ChatProvider'
const CardRight = () => {
  const { selectedChat } = ChatState();
    if (!selectedChat) {
         return (
      <Box margin={2} textAlign='left' p={5} bg="White"  borderRadius={10} borderWidth={1} as="article">
   <Heading size="md" fontWeight="bold" p={1} marginTop={1} > Customer Details</Heading> 
               <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={15}>
                <Text color='grey'>Email:</Text>
                     <Text fontWeight='semibold'></Text>
             </Flex>
           <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={15}>
                <Text color='grey'>FirstName:</Text>
                <Text fontWeight='semibold'> </Text>
             </Flex>
           <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={15}>
                <Text color='grey'>LastName:</Text>
                <Text fontWeight='semibold'> </Text>
             </Flex>
             <Flex  alignItems="center" p={1} fontSize={15}>
                <Text fontWeight='semibold' color='blue'>View more details</Text>
             </Flex>
    </Box>
  )
    }
    const nameParts = selectedChat.split(' ');
    if (nameParts.length >= 2) {
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ');
        return (
      <Box margin={2} textAlign='left' p={5} bg="White"  borderRadius={10} borderWidth={1} as="article">
   <Heading size="md" fontWeight="bold" p={1} marginTop={1} > Customer Details</Heading> 
               <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={13} >
                <Text color='grey'>Email:</Text>
              <Text fontWeight='semibold' >{lastName}@richpanel.com</Text>
             </Flex>
           <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={13}>
                <Text color='grey'>FirstName:</Text>
                <Text fontWeight='semibold' noOfLines={1}>{firstName}</Text>
             </Flex>
           <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={13}>
                <Text color='grey'>LastName:</Text>
                    <Text fontWeight='semibold' noOfLines={1}>{lastName}</Text>
            </Flex>
            <Flex  alignItems="center" p={1} fontSize={15}>
                <Text fontWeight='semibold' color='blue'>View more details</Text>
             </Flex>
    </Box>
  )
    } else {
         return (
      <Box margin={2} textAlign='left' p={5} bg="White"  borderRadius={10} borderWidth={1} as="article">
   <Heading size="md" fontWeight="bold" p={1} marginTop={1} > Customer Details</Heading> 
               <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={13}>
                <Text color='grey'>Email:</Text>
                     <Text fontWeight='semibold' noOfLines={1}>{selectedChat}@richpanel.com</Text>
             </Flex>
           <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={13}>
                <Text color='grey'>FirstName:</Text>
               <Text fontWeight='semibold'noOfLines={1}> {selectedChat}</Text>
             </Flex>
           <Flex justifyContent="space-between" alignItems="center" p={1} fontSize={13} >
                <Text color='grey'>LastName:</Text>
                <Text fontWeight='semibold'> </Text>
             </Flex>
             <Flex  alignItems="center" p={1} fontSize={15}>
                <Text fontWeight='semibold' color='blue'>View more details</Text>
             </Flex>
    </Box>
  )
    }
}

export default CardRight