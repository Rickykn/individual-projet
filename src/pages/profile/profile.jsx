import { Text, Flex, Box, Avatar, Divider } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex align="center" justifyContent="center">
      <Box
        borderWidth="2px"
        px={4}
        width="full"
        maxWidth="50vw"
        borderRadius={10}
        textAlign={4}
        boxShadow="lg"
      >
        <Box display="inline-flex" padding="5">
          <Avatar size="2xl"></Avatar>

          <Box display="inline-block" paddingLeft="20">
            <Text>Username</Text>
            <Text paddingTop="3">Full Name</Text>
            <Text paddingTop="3">Bio</Text>
            <Text paddingTop="3">Email</Text>
          </Box>
        </Box>

        <Divider orientation="horizontal" variant="solid" />
        <Box marginTop="3" display="flex" justifyContent="space-around">
          <Text>POST</Text>
          <Text>LIKES</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Profile;
