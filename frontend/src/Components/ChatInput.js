import React, { useEffect, useState } from 'react';
import { Textarea, Button, Flex, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import { ChatState } from '../Context/ChatProvider';

const ChatInput = ({ differentusers, data }) => {
  const [message, setMessage] = useState('');
  const { selectedChat, recipientID, setRecipientID } = ChatState();

    if (!differentusers || !data) return;

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const accessToken = "EAAJ0ftGBlqwBO0ZAbHtsSTyQyXUkZAKCZCJyjqnDB1Hb3EebHZCczRWdSLL7mulroNEHiDRX68ZBPoZBwyv0dc34lP3PHNQnTJgPXy31FefEyZB2upkk8dx89RLNvhug0SdNeeSASMLQ7iYr3BJfboLD7hlSFjlZBtpcGEFWVJfn6g0Cu6qOZBNlAjSGHYGCfkmCNiwlD0t0ZAUGtOjcoNtyZBXZCRHA";

  const handleclick = () => {
    if (!recipientID) return;
    if (!message) return;

    const messagesend = {
      recipient: {
        id: recipientID,
      },
      messaging_type: "RESPONSE",
      message: {
        text: message,
      },
    };

    axios
      .post(
        `https://graph.facebook.com/v17.0/me/messages?access_token=${accessToken}`,
        messagesend
      )
      .then((response) => {
        setMessage('');
        console.log('Message sent successfully:');
      })
      .catch((error) => {
        if (error.response) {
          console.error('Server error:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Request error:', error.message);
        }
      });
  };
  return (
    <Flex position='sticky' bottom='0'>
      <Textarea
        id='Message_content'
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
        resize="none"
      />
      <Spacer/>
      <Button onClick={handleclick}>send</Button>
    </Flex>
      
  );
};

export default ChatInput