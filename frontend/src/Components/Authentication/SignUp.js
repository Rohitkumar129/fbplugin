import React from 'react'
import { useState } from 'react'
import { FormControl, VStack ,Input,InputGroup,FormLabel,Container,Box,Center,Text} from '@chakra-ui/react'
import { Checkbox, Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { useToast } from "@chakra-ui/react"
import axios from "axios"
const SignUp = () => {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const navigate = useNavigate();
    const Toast = useToast();

    const SignUpHandler = async() => {
        if (!Name || !Email || !Password) {
            Toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 2000,
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
          const { data }=await axios.post(
                "https://backendfpplugin.onrender.com/api/accountholder",
                {
                    Name,
                    Email,
                    Password,
                },
                config
            );
            console.log(data);
            navigate('/Login')
        } catch (error) {
             Toast({
              title: "Error Occured!",
             description: error,
              status: "error",
              duration: 5000,
             isClosable: true,
             position: "bottom",
             });
        }
    }
    const LoginPageHandler = () => {
        navigate('/Login')
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
                borderRadius='20px'
            >
    <Center fontWeight='semibold' marginTop={8}><Text fontSize='2xl'>Create Account</Text></Center>
    <VStack spacing="10px" paddingLeft={9} paddingRight={9} paddingTop={4} alignItems='revert'>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired >
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type= "password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
                  />
        </InputGroup>
        </FormControl >
        <Checkbox>Remember Me</Checkbox>    
         < Button  marginTop='20px' backgroundColor='#184796' color='white' w='100%' onClick={SignUpHandler}>Sign Up</Button>         
        <Center marginTop={5} paddingBottom={4}><Text fontSize='sm'>Already have an account? <Link color='blue' onClick={LoginPageHandler}>Login</Link></Text></Center>
    </VStack>
     </Box>   
    </Container>
  )
}

export default SignUp