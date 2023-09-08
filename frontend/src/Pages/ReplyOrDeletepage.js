import React from 'react'
import { Container, Center, Box, VStack, Text , Button} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { ChatState } from '../Context/ChatProvider';
const ReplyOrDeletepage = ({ Name }) => {
  const [Loading, setLoading] = useState(false);
  const { user } = ChatState();
  const navigate = useNavigate();
  const MessageHandler = () => {
    navigate('/Chatpage')
  }
  const IntegrationdeleteHandler = async () => {
    setLoading(true);
    if (!user) {
      navigate('/')
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      await axios.delete(
        `/api/deleteintegration`,
        config,
        navigate('/')
      ).catch((error) => {
        console.error('Error making DELETE request:', error);
      });
      setLoading(false);
    }
  };
  return (
    <Container maxW="xl" centerContent>
     <Box
                d="flex"
                marginTop='8rem'
                p={3}
                bg='white'
                borderWidth='1px'
                w='80%'
                borderRadius='18px'
            >  
    <VStack spacing={3} paddingLeft={9} paddingRight={9} paddingTop={4} alignItems='revert'>
                  <Center marginTop={4}><Text fontSize='xl'>Facebook page integration</Text></Center>
                  <Center><Text fontSize='xl'>Integrated page:{Name}</Text></Center>
        <Button bg='red' onClick={IntegrationdeleteHandler} color='white' marginTop={3}>Delete Integration</Button> 
        <Button bg='#184796' onClick={MessageHandler} color='white' marginBottom={6}>Reply To Messages</Button>     
    </VStack>
     </Box>   
    </Container>
  )
}

export default ReplyOrDeletepage