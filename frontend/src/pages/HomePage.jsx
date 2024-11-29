import { Container, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Container maxW='container.x1' py={12}>
      <VStack spacing={8}>
        <Text 
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradien={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀
        </Text>
        
        <Text fontSize="x.1" textAlign="center" fontWeight="bold" color="gray.500">
          No procts found 😢 {" "}
          <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{ textDecoration:"underline"}}>
              Createa a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}
export default HomePage