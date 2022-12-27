import { Badge, Center } from '@chakra-ui/react'
import React from 'react'

const InfoMessage = ({message}) => {
  return (
    <Center p={2}>
      <Badge p={2} fontSize='10' color={'white'} bgColor={'GrayText'}>{message}</Badge>
    </Center>
  )
}

export default InfoMessage