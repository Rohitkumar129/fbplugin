import React, {  useState } from 'react';
import { Textarea, Button, Flex, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import { ChatState } from '../Context/ChatProvider';

const ChatInput = ({ differentusers, data }) => {
  const [message, setMessage] = useState('');
  const {  recipientID } = ChatState();

    if (!differentusers || !data) return;

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const accessToken= "EAAJ0ftGBlqwBO2WFzy45Jm41dQVp3K66FhCtGVRd6TUZAytQExOUGltxyc2PIM8oOhp1eCfuZBRJ5X88ibMSepVPr1dKkOkE9tCMHaYziaBZAVfNAps91lxe8B9jTJp0acXrMKmXzZAjIRYEYu0ygar15RrrTFyYyZCDRjkyNoUvN0xKt2Rl3hyUHdzoNZCJQZD"

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