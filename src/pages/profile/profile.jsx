import { Text, Flex, Box, Avatar } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex align="center" justifyContent="center">
      <Box
        borderWidth="2px"
        px={4}
        width="full"
        maxWidth="lg"
        borderRadius={10}
        textAlign={4}
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingY="5"
      >
        <Avatar size="xl"></Avatar>
        <Box
          paddingTop="5"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text>First Name</Text>
          <Text paddingLeft="20">Last Name</Text>
        </Box>

        <Text paddingTop="5">Bio</Text>
        <Text paddingTop="5">Username</Text>
        <Text paddingTop="5">Email</Text>
      </Box>
    </Flex>
  );
};

export default Profile;
