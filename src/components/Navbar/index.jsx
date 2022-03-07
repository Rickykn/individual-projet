import { Text, Box, Avatar, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="50px"
      //   background="#EFEFEF"
      marginBottom="5"
      paddingX="5"
      pos="sticky"
      w="100%"
      top={0}
      zIndex={1}
      background="white"
      boxShadow="dark-lg"
    >
      <Link to="/">
        <Box>
          <Icon boxSize={6} as={FaHome} />
        </Box>
      </Link>

      <Link to="/profile">
        <Box display="inline-flex" alignItems="center">
          <Avatar src="https://bit.ly/dan-abramov" size="sm" />
          <Box paddingX="3">
            <Text fontSize="sm">Username</Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Navbar;
