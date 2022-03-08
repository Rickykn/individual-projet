import CardContent from "../../components/cardcontent";
import { Box, useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
const HomePage = () => {
  const [contentList, setContentList] = useState([]);
  const toast = useToast();
  const fetchContentList = () => {
    axios
      .get("http://localhost:2000/posts", {
        params: {
          _expand: "user",
        },
      })
      .then((res) => {
        console.log(res.data);
        setContentList(res.data);
      })
      .catch((err) => {
        toast({
          title: "Fetch data failed",
          description: "There is an error at the server",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const renderContentList = () => {
    if (contentList.length) {
      return contentList.map((val) => {
        return (
          <CardContent
            username={val?.user?.username}
            caption={val.caption}
            imageUrl={val.image_url}
            location={val.location}
            numberOfLikes={val.number_of_likes}
            id={val.id}
          />
        );
      });
    }
  };

  useEffect(() => {
    fetchContentList();
  }, []);

  return <Box>{renderContentList()}</Box>;
};

export default HomePage;
