import { HStack, IconButton, Input,VStack } from '@chakra-ui/react'
import React from 'react'
import {MdSend} from 'react-icons/md'
import IncomingMessage from './IncomingMessage'
import InfoMessage from './InfoMessage'
import OutgoingMessage from './OutgoingMessage'
import socketIO from 'socket.io-client'
import { useEffect } from 'react';
import {current_user} from './Home'
import { useState } from 'react'
import { useRef } from 'react'
const ENDPOINT = 'https://chatappbyshivansh-backend.onrender.com'
const socket = socketIO(ENDPOINT, { transports: ['websocket'] });
let id = 1;

const ChatBox = () => {
  const ref = useRef(null);
  const messageEnd = useRef(null);
  const [chats, setChats] = useState([]);
  let message;

  useEffect(() => {
    socket.emit('joined', { current_user });
    setChats([{ type: 'info', message: 'You joined the chat' }]);
  }, []);

 socket.on('newUserJoined', ({ type, message }) => {
      setChats([...chats,({type,message})]);
 })
 socket.on('userLeft', ({ type, message }) => {
      setChats([...chats,({type,message})]);
 })


 socket.on('newMessage', ({ user, message }) => {
      setChats([...chats, { type: user === current_user ? 'outgoing' : 'incoming', user: user, message: message, time: (new Date().toLocaleTimeString().slice(0,4) + new Date().toLocaleTimeString().slice(-3)) }]);
 })

  useEffect(() => {
    messageEnd.current?.scrollIntoView();
  }, [chats]);

  const send = () => {
    socket.emit('sendMessage', ({ current_user, message }));
    ref.current.value = '';
  }

  return (
    <>
      <VStack overflow={'auto'} pl='3' pr='3' h={'80vh'}>

{chats.map((chat) => {
  if (chat.type === 'info') {
    return <InfoMessage key={id++} message={chat.message} />
  }
  else if (chat.type === 'incoming') {
    return <IncomingMessage key={id++} user={chat.user} message={chat.message} time={chat.time } />
  }
  else {
    return <OutgoingMessage key={id++} message={chat.message} time={chat.time}/>
  }
})}
   <div ref={messageEnd}></div>
</VStack>
      <HStack bgColor={'blackAlpha.500'} justifySelf={'flex-end'} w={'full'} h='10vh' p={3} justifyContent={'center'}>
        <Input onChange={()=>{message = ref.current.value}} ref={ref} w={'90%'} h={'50'} color='white' colorScheme={'whatsapp'} placeholder='Message'/>
        <IconButton onClick={send} w={50} borderRadius={'50%'} h={50} color='white' bgColor={'black'} icon={<MdSend/>} />
      </HStack>
     </>
  )
}

export default ChatBox