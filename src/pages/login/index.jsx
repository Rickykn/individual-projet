import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Link,
  Button,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex minHeight="100vh" align="center" justifyContent="center">
      <Box
        borderWidth="2px"
        px={4}
        width="full"
        maxWidth="lg"
        borderRadius={10}
        textAlign={4}
        boxShadow="lg"
      >
        <Box p={4} borderRadius={10}>
          <Box textAlign="center">
            <Heading>Sign In to Your Account</Heading>
          </Box>
          <Box my={8} textAlign="center">
            <form>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Enter your email address" />
              </FormControl>
              <FormControl mt={5}>
                <FormLabel>password</FormLabel>
                <Input type="password" placeholder="Enter your password" />
              </FormControl>

              <Stack isInline justifyContent="space-between" mt={5}>
                <Box>
                  <Checkbox defaultChecked>Remember Me</Checkbox>
                </Box>
                <Box>
                  <Link>Forgot your password?</Link>
                </Box>
              </Stack>

              <Button width="full" mt={4} colorScheme="blue">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
