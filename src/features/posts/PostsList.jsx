import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import { Card, CardHeader, CardBody, StackDivider, Stack, Box, Heading, Text } from "@chakra-ui/react";
import TimeAgo from "./TimeAgo";
import Reaction from "./Reaction";
const postsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  const renderPosts = orderedPosts.map((post) => (
    <Box key={post.id}>
      <Heading size="xs" textTransform="uppercase">
        {post.title}
      </Heading>
      <Text pt="2" fontSize="sm">
        {post.content.substring(0, 100)}
      </Text>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <Reaction post={post} />
    </Box>
  ));

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Client Report</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {renderPosts}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default postsList;
