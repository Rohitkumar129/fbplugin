import React from 'react'
import { Grid, GridItem, Text, Flex, Button, Spacer  } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import CardRight from '../Components/CardRight'
import CardLeft from '../Components/CardLeft'
import { useState, useEffect } from 'react'
import { ChatState } from '../Context/ChatProvider'
import Message from '../Components/Message'
import ChatInput from '../Components/ChatInput'
import i1 from '../Images/i1.png'
import i2 from '../Images/i2.png'
import i3 from '../Images/i3.png'
import i4 from '../Images/i4.png'
import img from '../Images/img.png'


const Chatpage = () => {
  const [Data, setdata] = useState([]);
  const [conversations, setconversations] = useState([]);
  const [differentusers, setdifferentusers] = useState([]);
  const { selectedChat,setSelectedChat } = ChatState();

  const apiurl ="https://graph.facebook.com/v17.0/me?fields=id%2Cname%2Cconversations%7Bmessages%7Bfrom%2Cto%2Cmessage%2Ccreated_time%7D%7D&access_token=EAAJ0ftGBlqwBO0ZAbHtsSTyQyXUkZAKCZCJyjqnDB1Hb3EebHZCczRWdSLL7mulroNEHiDRX68ZBPoZBwyv0dc34lP3PHNQnTJgPXy31FefEyZB2upkk8dx89RLNvhug0SdNeeSASMLQ7iYr3BJfboLD7hlSFjlZBtpcGEFWVJfn6g0Cu6qOZBNlAjSGHYGCfkmCNiwlD0t0ZAUGtOjcoNtyZBXZCRHA"
  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(apiurl)
        .then(response => response.json())
          setdata(res);
      setconversations(Data.conversations);
      if (conversations) {
    setdifferentusers(conversations.data);
      }
    }
    fetchdata();
  }, [Data, conversations, differentusers])
 // console.log(Data);
  
  return (
    <Grid
  h='100%'
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(19, 1fr)'
      gap={0.2}
>
      <GridItem colSpan={1} rowSpan={4} bg='#184796'>
          <Grid
          h='100%'
          templateRows='repeat(13, 1fr)'
          templateColumns='repeat(1, 1fr)'
          gap={0}
        >
          <GridItem colSpan={1} rowSpan={1} borderWidth={1}>
            <Image src={i1} alt='i1'></Image>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} borderWidth={1} bg='white'>
            <Image src={i2} alt='i2' onClick={()=>setSelectedChat('')}></Image>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} borderWidth={1}>
            <Image src={i3} alt='i3'></Image>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} borderWidth={1}>
            <Image src={i4} alt='i4'></Image>
          </GridItem>
        </Grid>
        </GridItem>
    <GridItem colSpan={4} rowSpan={4} borderWidth={1} bg='#FEFEFE' >
       <Grid
          h='100%'
          templateRows='repeat(13, 1fr)'
          templateColumns='repeat(1, 1fr)'
          gap={0.2}
        >
          <GridItem colSpan={1} rowSpan={1} borderWidth={1} bg='#F5F5F5' position='sticky'>
            <Flex alignItems='center' p={2} justifyContent='space-between'>
              <Image src='https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-three-line-icons-image_1130690.jpg' width={7} marginRight={1} alt='chat' />
              <Text fontSize='2xl' fontWeight='bold'>Conversations</Text>
              <Image src='https://as1.ftcdn.net/v2/jpg/02/52/31/24/1000_F_252312406_84kpql3vCpakGhh8XyT0QoKYIZ3rb3ga.jpg' alt='Reload' width={7} />
           </Flex>
          </GridItem>
          <CardLeft DifferentUsers={differentusers} data={Data} />
        </Grid>
    </GridItem>
      <GridItem colSpan={10} rowSpan={4} borderWidth={1} bg='#F5F5F5' >
       <Grid
          h='100%'
          templateRows='repeat(17, 1fr)'
          templateColumns='repeat(1, 1fr)'
          gap={0.2}
        >
          <GridItem colSpan={1} rowSpan={1} borderWidth={1} bg='#FEFEFE'  position='sticky' top='0'fontWeight='bold' p={3} paddingLeft={4} fontSize='2xl'>
            {selectedChat?(selectedChat):(<div></div>)}
          </GridItem>
          <GridItem   colSpan={1} rowSpan={15}  overflowY='scroll'>
            <Message differentusers={differentusers} data={Data} /> 
          </GridItem>
          <GridItem colSpan={1} rowSpan={1} borderWidth={1} bg='#FEFEFE'  position='sticky'  p={3} paddingLeft={4} fontSize='2xl'>
            <ChatInput differentusers={differentusers} data={Data}/>
          </GridItem>
        </Grid>
        </GridItem>
      <GridItem colSpan={4} rowSpan={4} borderWidth={1} bg='#EEF2F7'>
        <Grid
          h='100%'
          templateRows='repeat(12, 1fr)'
          templateColumns='repeat(1, 1fr)'
          gap={0.2}
        >
          <GridItem colSpan={1} rowSpan={4} borderWidth={1} bg='#FEFEFE' >
              <Grid
          h='100%'
          templateRows='repeat(9, 1fr)'
          templateColumns='repeat(1, 1fr)'
              justifyContent='center'
        >
          <GridItem colSpan={1} rowSpan={5} borderWidth={1} justifyContent='center'>
                <Image src={img} alt='profile' width='70px' borderRadius='50%' marginLeft={19} marginTop={6}/>
              </GridItem>
               <GridItem colSpan={1} rowSpan={2} borderWidth={1} fontWeight='Bold' p={5}>
               {selectedChat}
              </GridItem>
               <GridItem colSpan={1} rowSpan={2} borderWidth={1}>
                <Flex>
                  <Button marginLeft={7} marginTop={1}>
                    <Image src='https://i.pinimg.com/1200x/fd/f2/a8/fdf2a87d36fc2801d281cc0dd0780698.jpg' alt='call' width='16px' marginRight={5} />
                    Phone
                  </Button>
                  <Spacer />
                  <Button marginRight={7} marginTop={1}>
                    <Image src='https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg' alt='call' width='16px'  marginRight={5}/>
                    Profile
                  </Button>
                </Flex>
              </GridItem>
        </Grid>
          </GridItem>
           <CardRight/>
        </Grid>
        </GridItem>
</Grid>
  )
}

export default Chatpage
