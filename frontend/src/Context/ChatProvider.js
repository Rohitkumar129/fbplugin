import React, { createContext, useContext,useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";

const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
    const [recipientID, setRecipientID] = useState('');

  //const [recipientID, setrecipientID] = useState('');
    const [user, setUser] = useState();
    const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

    return (
        <ChatContext.Provider
            value={{
                selectedChat,
          setSelectedChat,
          recipientID,
          setRecipientID,
                 user,
                setUser,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;