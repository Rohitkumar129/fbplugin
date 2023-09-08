import React from 'react'
import { useState } from 'react'
import { FormControl, VStack ,Input,InputGroup,FormLabel,Container,Box,Center,Text} from '@chakra-ui/react'
import { Checkbox, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import axios from "axios"



const Login = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const Toast = useToast();
  const navigate = useNavigate();

    const SignUpHandler = () => {
        navigate('/')
    }
  
  const FBconnectionHandler = async() => {
    if (!Email || !Password) {
      Toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://backendfpplugin.onrender.com/api/authorise",
        {
          Email,
          Password
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate('/FBconnect');
    } catch (error) {
        Toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
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
                borderRadius='17px'
            >
    <Center marginTop={8}><Text fontWeight='semibold' fontSize='xl'>Login to your account</Text></Center>
    <VStack spacing="10px" paddingLeft={9} paddingRight={9} paddingTop={4} alignItems='revert'>
      <FormControl id="email" isRequired >
        <FormLabel fontSize='15px'>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel fontSize='15px'>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type= "password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
                  />
        </InputGroup>
        </FormControl >
        <Checkbox>Remember Me</Checkbox>    
         < Button  marginTop='20px' backgroundColor='#184796' color='white' w='100%' onClick={FBconnectionHandler}>Login</Button>         
        <Center marginTop={5} paddingBottom={4}><Text fontSize='sm'>New to MyApp? <Link color='blue' onClick={SignUpHandler}>Sign Up</Link></Text></Center>
    </VStack>
     </Box>   
    </Container>
  )
}

export default Login