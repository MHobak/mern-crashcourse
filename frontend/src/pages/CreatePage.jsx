import { Box, Button, Container, Heading, useColorModeValue, VStack, Input, useToast  } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const { createProduct } = useProductStore();
  const toast = useToast()

  const handleAddProduct = async () => {
    const { succsess, message } = await createProduct(newProduct)
    console.log("Success:", succsess);
    console.log("Message:", message);

    if (!succsess) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Success!',
        description: message,
        status: 'success',
        isClosable: true
      })
    }

    setNewProduct({name:"", price:"", image:""})
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
          Create New product
        </Heading>
        <Box 
          w={"full"} bg={useColorModeValue("white", "gray.8000")}
          p={6} rounded={"lg"} shadow={"md"}
          >
            <VStack spacing={4}>
              <Input placeholder='Product Name'
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />

              <Input placeholder='Price'
                name='price'
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />

              <Input placeholder='Image'
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
              <Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
                AddProduct
              </Button>
            </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage