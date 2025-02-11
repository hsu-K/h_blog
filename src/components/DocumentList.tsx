import { Box, Heading, Container } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

interface Post {
  title: string;
  path: string;
  date: string;
  description?: string;
}

interface PostsData {
  posts: Post[];
}

const DocumentList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // const printposts = () => {
  //   // console.log(posts);
  //   posts.map((post) => {
  //     console.log(post);
  //   });
  // }

  useEffect(() => {
    fetch("/posts/posts.json")
      .then((res) => res.json())
      .then((data: PostsData) => {
        setPosts(data.posts);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }, []);


  return (
    <Container size="2">
      <Box p="4">
        <Heading size="6" mb="4">文章列表</Heading>
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {Array.isArray(posts) && posts.map((post) => (
            <PostCard
              key={post.path}
              title={post.title}
              path={post.path}
              date={post.date}
              description={post.description}
            />
          ))}
        </Box>
      </Box>
    </Container>

  );
};

export default DocumentList; 