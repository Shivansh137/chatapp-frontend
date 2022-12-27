import { Card, Text } from '@chakra-ui/react'
import React from 'react'

const OutgoingMessage = ({message,time}) => {
  return (
    <Card maxW={'90%'} p={1} pl={2} pr={2} borderRadius='5' alignSelf={'flex-end'} justifyContent='center' bgColor={'rgba(255,255,255,.4)'}>
      <Text color={'blackAlpha.700'} textAlign={'left'} pr={5} fontSize={16}>{message}</Text>
      <Text textAlign={'right'} color={'gray'} fontSize={10}>{time}</Text>
  </Card>
  )
}

export default OutgoingMessage