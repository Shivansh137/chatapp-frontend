import React from 'react';
import {
  ChakraProvider,
  theme,
  Heading,
  HStack,
  Input,
  Container,
} from '@chakra-ui/react';
import Home from './Home';
import ChatBox from './ChatBox';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [bgColor, setBgColor] = useState('#ee00ff')
  return (
    <ChakraProvider theme={theme}>
    <Container display={'flex'} flexDirection={'column'} bgColor={bgColor} minH={'100vh'} p={0}>
        <HStack h={'10vh'} w={'full'} justifyContent={'space-between'} p={4} bgColor="blackAlpha.900" color={'white'}>
            <Heading>ChatApp</Heading>
            <Input size={'sm'} bgColor={'white'} value={bgColor} onChange={(e)=>{setBgColor(e.target.value)}} w={'15%'} type='color' />
          </HStack>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chatroom' element={<ChatBox/>}/>
          </Routes>
        </Container>
    </ChakraProvider>
  );
}

export default App;
