import { Box, Avatar, Text, Flex, Image, Icon } from "@chakra-ui/react";
import { FaRegCommentDots, FaRegShareSquare, FaRegHeart } from "react-icons/fa";

const CardContent = () => {
  return (
    <Flex justifyContent="center">
      <Box
        borderWidth="3px"
        px={4}
        width="full"
        borderRadius="lg"
        textAlign={4}
        boxShadow="lg"
        paddingY="2"
        marginY="13"
        maxWidth="50vw"
      >
        {/* Heading */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="inline-flex">
            <Avatar src="https://bit.ly/dan-abramov" size="md" />
            <Box paddingX="3">
              <Text fontSize="lg">Username</Text>
              <Text fontSize="sm" color="gray.500">
                Posted a photo!
              </Text>
            </Box>
          </Box>
          <Box paddingX="3">
            <Text fontSize="lg">Location</Text>
            <Text fontSize="sm">12344 Likes</Text>
          </Box>
        </Box>

        {/* Content */}
        <Box paddingY="3">
          <Image
            borderRadius="10"
            maxWidth="full"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </Box>

        {/* Action */}
        <Box display="flex" justifyContent="center">
          <Box>
            <Icon boxSize={6} as={FaRegHeart} />
          </Box>

          <Box paddingLeft="5">
            <Icon boxSize={6} as={FaRegCommentDots} />
          </Box>

          <Box paddingLeft="5">
            <Icon boxSize={6} as={FaRegShareSquare} />
          </Box>
        </Box>
        {/* Comment */}
      </Box>
    </Flex>
  );
};

export default CardContent;
