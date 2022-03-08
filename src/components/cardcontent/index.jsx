import { Box, Avatar, Text, Flex, Image, Icon } from "@chakra-ui/react";
import { FaRegCommentDots, FaRegShareSquare, FaRegHeart } from "react-icons/fa";
import Comment from "../Comment";
import axios from "axios";
import { useState, useEffect } from "react";

const CardContent = ({
  username,
  caption,
  imageUrl,
  location,
  numberOfLikes,
  id,
}) => {
  const [comments, setComments] = useState([]);
  // const [commentInput, setCommentInput] = useState("");

  const fetchAllComment = () => {
    axios
      .get("http://localhost:2000/comments", {
        params: {
          _expand: "user",
          postId: id,
        },
      })
      .then((res) => {
        setComments(res.data);
      });
  };

  const renderAllComment = () => {
    return comments.map((val) => {
      return <Comment username={val.user.username} content={val.content} />;
    });
  };

  useEffect(() => {
    fetchAllComment();
  }, []);
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
              <Text fontSize="lg">{username}</Text>
              <Text fontSize="sm" color="gray.500">
                Posted a photo!
              </Text>
            </Box>
          </Box>
          <Box paddingX="3">
            <Text fontSize="md">{location}</Text>
          </Box>
        </Box>

        {/* Content */}
        <Box paddingY="3">
          <Image borderRadius="10" minWidth="full" src={imageUrl} />
        </Box>

        {/* Action */}
        <Box display="flex" justifyContent="space-around">
          <Box display="inline-flex">
            <Icon boxSize={6} as={FaRegHeart} />
            <Text paddingLeft="2">{numberOfLikes}</Text>
          </Box>

          <Box paddingLeft="5">
            <Icon boxSize={6} as={FaRegCommentDots} />
          </Box>

          <Box paddingLeft="5">
            <Icon boxSize={6} as={FaRegShareSquare} />
          </Box>
        </Box>

        {/* caption */}
        <Box display="inline-flex">
          <Text fontWeight="bold" paddingRight="2">
            {username}
          </Text>
          <Text>{caption}</Text>
        </Box>

        {/* Comment */}
        <Box display="flex" flexDirection="column">
          <Text marginTop="3" as="i">
            COMMENT
          </Text>
          {renderAllComment()}
        </Box>
      </Box>
    </Flex>
  );
};

export default CardContent;
