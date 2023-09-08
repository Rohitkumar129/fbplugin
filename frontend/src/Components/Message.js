import React from 'react'
import { ChatState } from '../Context/ChatProvider'
import { Flex, Box } from '@chakra-ui/react';

const Message = ({ differentusers, data }) => {
  const { selectedChat } = ChatState()

  if (!differentusers || !data) {
  
    return null
  }
 // console.log('hey')
  const localdata = differentusers.map((elem) => elem.messages);
  const chats = localdata.map((elem) => elem.data);
  const message = (e) => {
    return (
      <>
        {selectedChat === e.from.name || selectedChat === e.to.data[0].name ? (<Flex flexDirection='column' maxHeight='80vh' key={e.message.id}>
          <Box
            maxWidth='50%'
            width='fit-content'
            borderWidth={2}
            overflowY='auto'
            p={2}
            borderRadius='10px'
            margin={2}
            bg='white'
            marginLeft={e.from.id === data.id ? 'auto' : '30px'}
            marginRight={e.from.id === data.id ? '30px' : '2px'} // Conditionally set marginLeft
          >{e.message}</Box></Flex>):(null)}
      </>
    )
  }
  const chat = (e) => {
    e.reverse()
    return(<>
      {e.map(message)}
    </>
    )
  }
return(<>
  {chats.map(chat)}
    </>
    )
}
export default Message