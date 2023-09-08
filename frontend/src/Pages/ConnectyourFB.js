import React from 'react'
import { Container, Center, Box, VStack, Text , Button} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
const ConnectyourFB = () => {
    const navigate = useNavigate();
    const IntegrationHandler = () => {
        navigate('/Deleteorreply');
    }
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
    <VStack spacing={10} paddingLeft={9} paddingRight={9} paddingTop={4} alignItems='revert'>
        <Center marginTop={5}><Text fontSize='xl' fontWeight='semibold'>Facebook page integration</Text></Center>
        <Button bg='#184796' onClick={IntegrationHandler} color='white' marginBottom={6}>Connect Page</Button>     
    </VStack>
     </Box>   
    </Container>
  )
}

export default ConnectyourFB