import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import { useParams } from "react-router-dom";
import { Box, Container } from "@radix-ui/themes";

const MarkdowmComponent = () => {
  const[content, setContent] = useState("");
  const {slug} = useParams();

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        console.log(text);
    })
    .catch((error) => {
      console.error("Error loading markdown:", error);
      setContent("# 文章載入失敗");
    });
  }, [slug]);


  return (
    <Container size="3">
      <Box p="4" style={{ 
        backgroundColor: 'var(--gray-a2)', 
        borderRadius: 'var(--radius-3)'
      }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </Box>
    </Container>
  )
}

export default MarkdowmComponent