import { Card, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const IncomingMessage = ({user,message,time}) => {
  return (
    <Card maxW={'90%'} p={1} pl={2} pr={2} borderRadius='5' alignSelf={'flex-start'} justifyContent='center' bgColor={'rgba(0,0,0,.5)'} >
      <Text fontWeight={'bold'} textAlign={'left'} pr={5} color={'deeppink'} fontSize={12}>{user}</Text>
      <Text color={'white'} textAlign={'left'} pr={5} fontSize={16}>{message}</Text>
      <Text textAlign={'right'} color={'gray'} fontSize={10}>{time}</Text>
    </Card>
  )
}

export default IncomingMessage