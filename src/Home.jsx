import { Button, Center, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
let current_user;
const Home = () => {
 const [name, setName] = useState('');
  return (
    <Center minH={'100vh'}>
      <VStack p={10} bgColor={'blackAlpha.300'}>
        <Input mb={5} bgColor={'blackAlpha.300'} value={name} onChange={(e)=>{setName(e.target.value)}} size={'lg'} placeholder='Enter your name' />
        <Link to='/chatroom' onClick={(e) =>!name ? e.preventDefault() : null } size={'lg'} bgColor={'black'}>
          <Button colorScheme={'blackAlpha'} onClick={() => { current_user = name}} to='/chatroom'>Enter the Chat</Button>
        </Link>
      </VStack>
    </Center>
  )
}

export default Home
export {current_user}
